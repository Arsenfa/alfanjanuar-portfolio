import { useState, useEffect, useRef } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browser): just reveal.
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    // If the element is already on screen, or scrolled past, at mount (page
    // loaded already scrolled down, or an HMR/StrictMode re-mount), reveal
    // immediately so visible content can never get stuck hidden at opacity:0.
    // Only elements still fully below the fold wait for the scroll animation.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      options,
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
