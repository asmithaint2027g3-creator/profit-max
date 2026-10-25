import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollToTopAndHash handler.
 * - If URL has a #hash, smoothly scrolls to the target element taking the fixed header into account.
 * - Handles lazy-loaded route components with retry polling.
 * - If URL has no hash, scrolls the window to (0, 0) on route transition.
 */
export default function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const rawId = hash.replace(/^#/, '');
      const elementId = decodeURIComponent(rawId);

      let attempts = 0;
      const maxAttempts = 15; // Poll over ~1.5 seconds for lazy chunks to render
      const interval = 100;

      const tryScroll = () => {
        const el =
          document.getElementById(elementId) ||
          document.getElementById(elementId.toLowerCase()) ||
          document.querySelector(`[name="${elementId}"]`) ||
          document.querySelector(`[data-section-id="${elementId}"]`);

        if (el) {
          const navOffset = 85;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - navOffset);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, interval);
        }
      };

      // Slight delay to allow initial DOM update
      const timer = setTimeout(tryScroll, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }
  }, [pathname, hash]);

  return null;
}
