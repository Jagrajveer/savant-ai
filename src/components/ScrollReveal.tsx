import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  className?: string;
  threshold?: number;
  scrollLinked?: boolean;
  distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.001,
  scrollLinked = false,
  distance = 40
}) => {
  const { ref, isVisible, scrollProgress } = useScrollAnimation({ 
    threshold, 
    rootMargin: '200px',
    scrollLinked 
  });

  const getTransform = () => {
    if (scrollLinked) {
      // Smooth interpolation based on scroll progress
      const progress = Math.min(1, Math.max(0, scrollProgress));
      const opacity = progress;
      
      switch (direction) {
        case 'up':
          return {
            opacity,
            transform: `translate3d(0, ${distance * (1 - progress)}px, 0) scale(${0.95 + 0.05 * progress})`
          };
        case 'down':
          return {
            opacity,
            transform: `translate3d(0, ${-distance * (1 - progress)}px, 0) scale(${0.95 + 0.05 * progress})`
          };
        case 'left':
          return {
            opacity,
            transform: `translate3d(${-distance * (1 - progress)}px, 0, 0) scale(${0.95 + 0.05 * progress})`
          };
        case 'right':
          return {
            opacity,
            transform: `translate3d(${distance * (1 - progress)}px, 0, 0) scale(${0.95 + 0.05 * progress})`
          };
        case 'scale':
          return {
            opacity,
            transform: `translate3d(0, 0, 0) scale(${0.8 + 0.2 * progress})`
          };
        case 'fade':
          return {
            opacity,
            transform: 'translate3d(0, 0, 0) scale(1)'
          };
        default:
          return {
            opacity,
            transform: `translate3d(0, ${distance * (1 - progress)}px, 0) scale(${0.95 + 0.05 * progress})`
          };
      }
    }

    // Standard reveal animation
    if (isVisible) {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)'
      };
    }
    
    switch (direction) {
      case 'up':
        return {
          opacity: 0,
          transform: `translate3d(0, ${distance}px, 0) scale(0.95)`
        };
      case 'down':
        return {
          opacity: 0,
          transform: `translate3d(0, -${distance}px, 0) scale(0.95)`
        };
      case 'left':
        return {
          opacity: 0,
          transform: `translate3d(-${distance}px, 0, 0) scale(0.95)`
        };
      case 'right':
        return {
          opacity: 0,
          transform: `translate3d(${distance}px, 0, 0) scale(0.95)`
        };
      case 'scale':
        return {
          opacity: 0,
          transform: 'translate3d(0, 0, 0) scale(0.8)'
        };
      case 'fade':
        return {
          opacity: 0,
          transform: 'translate3d(0, 0, 0) scale(1)'
        };
      default:
        return {
          opacity: 0,
          transform: `translate3d(0, ${distance}px, 0) scale(0.95)`
        };
    }
  };

  const styles = getTransform();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        ...styles,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;