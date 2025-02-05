import { BackgroundPatternProps } from '@/app/types';
import React from 'react';

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  pattern,
}) => (
  <div
    className="fixed inset-0 opacity-10 pointer-events-none transition-all duration-1000"
    style={{
      background: pattern,
      backgroundSize: '50px 50px',
    }}
  />
);
