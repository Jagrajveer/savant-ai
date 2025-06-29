import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none';
  animationType?: 'fade' | 'slide' | 'scale' | 'bounce';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  hoverEffect = 'lift',
  animationType = 'slide'
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.001, rootMargin: '100px' });

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'hover:transform hover:-translate-y-2 hover:shadow-2xl';
      case 'scale':
        return 'hover:transform hover:scale-105';
      case 'glow':
        return 'hover:shadow-2xl hover:shadow-blue-500/25';
      default:
        return '';
    }
  };

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-500 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'slide':
          return `${baseClasses} opacity-0 translate-y-8 scale-95`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-90`;
        case 'bounce':
          return `${baseClasses} opacity-0 translate-y-8 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8 scale-95`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${getHoverClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;