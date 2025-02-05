// types.ts
import { ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';

export interface TerminalHistoryItem {
  command: string;
  output: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  githubLink: string;
  liveLink: string;
  features: string[];
}

export interface CursorProps {
  position: { x: number; y: number };
}

export interface BackgroundPatternProps {
  pattern: string;
}

export interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  terminalHistory: TerminalHistoryItem[];
  currentCommand: string;
  setCurrentCommand: (command: string) => void;
  handleCommand: (command: string) => void;
}

export interface ProjectCardProps {
  project: Project;
  pattern: string;
  onHover: () => void;
}

export interface ContactLinkProps {
  label: string;
  icon: LucideIcon;
  pattern: string;
  link: string;
}
