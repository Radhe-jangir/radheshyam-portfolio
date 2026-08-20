import React, { useRef, useState, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

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
  intensity = 14,
  glareOpacity = 0.18,
  depth = 22,
  id,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setRotX(rotateX);
    setRotY(rotateY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: glareOpacity });
  }, [intensity, glareOpacity]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1100px',
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-transform duration-200 ease-out select-none ${className}`}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${depth}px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="w-full h-full relative"
      >
        {/* Specular glare reflection highlight */}
        <div
          style={{
            background: isDark
              ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(56, 189, 248, ${glarePos.opacity * 0.9}) 0%, rgba(168, 85, 247, ${glarePos.opacity * 0.4}) 35%, transparent 65%)`
              : `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(99, 102, 241, ${glarePos.opacity * 0.5}) 0%, rgba(56, 189, 248, ${glarePos.opacity * 0.3}) 40%, transparent 65%)`,
            opacity: glarePos.opacity > 0 ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-30"
        />

        {/* Card Content with 3D Depth support */}
        <div className="w-full h-full relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
};
