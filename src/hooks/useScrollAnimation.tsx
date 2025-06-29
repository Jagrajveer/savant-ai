import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  scrollLinked?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.001, rootMargin = '200px', triggerOnce = true, scrollLinked = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const updateScrollProgress = useCallback(() => {
    if (!ref.current || !scrollLinked) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress based on element position in viewport
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Progress from 0 (element entering viewport) to 1 (element leaving viewport)
    const progress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ));
    
    setScrollProgress(progress);
  }, [scrollLinked]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current && !scrollLinked) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Add scroll listener for scroll-linked animations
    if (scrollLinked) {
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      updateScrollProgress(); // Initial calculation
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (scrollLinked) {
        window.removeEventListener('scroll', updateScrollProgress);
      }
    };
  }, [threshold, rootMargin, triggerOnce, scrollLinked, updateScrollProgress]);

  return { ref, isVisible, scrollProgress };
};

// Hook for staggered animations
export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      visibleItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * delay);
      });
    }
  }, [isVisible, itemCount, delay]);

  return { ref, visibleItems };
};