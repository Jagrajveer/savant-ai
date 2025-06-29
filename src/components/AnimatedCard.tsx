import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  bounceDelay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  bounceDelay = 300
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.001, rootMargin: '200px' });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } ${className}`}
      style={{
        animation: isVisible ? `bounce-in-card 0.8s ease-out both` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;