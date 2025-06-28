import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.05
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin: '50px' });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 40px, 0) scale(0.95)';
      case 'down':
        return 'translate3d(0, -40px, 0) scale(0.95)';
      case 'left':
        return 'translate3d(-40px, 0, 0) scale(0.95)';
      case 'right':
        return 'translate3d(40px, 0, 0) scale(0.95)';
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.8)';
      default:
        return 'translate3d(0, 40px, 0) scale(0.95)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;