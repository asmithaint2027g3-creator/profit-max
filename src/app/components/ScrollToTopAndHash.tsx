import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollToTopAndHash handler.
 * - When URL contains a #hash, smoothly scrolls to the target element, accounting for the fixed navigation header (offset ~90px).
 * - Gracefully polls for lazy-loaded route components across transitions.
 * - Listens for custom 'pm:hash-navigate' events for responsive same-page and cross-page submenu clicks.
 * - When URL has no hash, resets window scroll position to (0, 0).
 */
export default function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  const scrollToHashTarget = (targetHash: string) => {
    const rawId = targetHash.replace(/^#/, '');
    const elementId = decodeURIComponent(rawId);
    if (!elementId) return;

    let attempts = 0;
    const maxAttempts = 20; // Poll for up to 2 seconds across chunk loading
    const interval = 100;

    const tryScroll = () => {
      const el =
        document.getElementById(elementId) ||
        document.getElementById(elementId.toLowerCase()) ||
        document.querySelector(`[name="${elementId}"]`) ||
        document.querySelector(`[data-section-id="${elementId}"]`) ||
        document.querySelector(`[data-section-id="${elementId.toLowerCase()}"]`);

      if (el) {
        const navOffset = 90;
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

    setTimeout(tryScroll, 60);
  };

  useEffect(() => {
    if (hash) {
      scrollToHashTarget(hash);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
    }
  }, [pathname, hash]);

  // Listen for direct navigation events from navigation menus
  useEffect(() => {
    const handleCustomHashNav = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string; hash: string }>;
      if (customEvent.detail && customEvent.detail.hash) {
        scrollToHashTarget(customEvent.detail.hash);
      }
    };

    window.addEventListener('pm:hash-navigate', handleCustomHashNav);
    return () => window.removeEventListener('pm:hash-navigate', handleCustomHashNav);
  }, []);

  return null;
}
