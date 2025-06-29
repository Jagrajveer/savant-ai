import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  bounceDelay?: number;
  activeProgress?: number;
  isActive?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  bounceDelay = 300,
  activeProgress = 1,
  isActive = true
}) => {
  // Calculate transform and opacity based on activeProgress
  const translateY = (1 - activeProgress) * 40; // Slide up from bottom
  const opacity = activeProgress;
  const scale = 0.95 + (activeProgress * 0.05); // Subtle scale effect

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${className}`}
      style={{
        opacity: opacity,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;