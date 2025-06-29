import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.001, rootMargin: '200px' });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;