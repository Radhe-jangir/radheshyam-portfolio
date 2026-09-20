import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareOpacity?: number;
  depth?: number;
  id?: string;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  id,
  onClick,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative select-none transition-all duration-200 ${className}`}
    >
      <div className="w-full h-full relative z-20">
        {children}
      </div>
    </div>
  );
};

