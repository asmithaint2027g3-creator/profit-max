import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export interface SubNavItem {
  id: string;
  label: string;
  badge?: string;
}

interface OriginStickySubNavProps {
  currentPageTitle: string;
  items: SubNavItem[];
  originNumber?: string;
}

export default function OriginStickySubNav({
  currentPageTitle,
  items,
  originNumber
}: OriginStickySubNavProps) {
  const location = useLocation();
  const rootPath = location.pathname.startsWith('/offerings') ? '/offerings' : '/origin';
  const rootLabel = location.pathname.startsWith('/offerings') ? 'OFFERINGS' : 'ORIGIN';
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 280);

      // Scroll-spy calculation
      const scrollPosition = window.scrollY + 200;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div
      className={`sticky top-20 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Breadcrumb / Page Title */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link
              to={rootPath}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{rootLabel}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {originNumber && (
              <>
                <span className="text-blue-600 font-semibold">{originNumber}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </>
            )}
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">
              {currentPageTitle}
            </span>
          </div>

          {/* Sub Navigation Items with Smooth Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none no-scrollbar">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        isActive
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
