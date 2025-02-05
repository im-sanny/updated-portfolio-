import { CursorProps } from '@/app/types';

export const CustomCursor: React.FC<CursorProps> = ({ position }) => (
  <div
    className="fixed w-8 h-8 border border-black rounded-full pointer-events-none z-50 mix-blend-difference"
    style={{
      transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      transition: 'transform 0.1s ease-out',
    }}
  />
);
