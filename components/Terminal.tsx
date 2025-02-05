import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { TerminalProps } from '@/app/types';

export const Terminal: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
  terminalHistory,
  currentCommand,
  setCurrentCommand,
  handleCommand,
}) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  useEffect(() => {
    if (isOpen && commandInputRef.current) {
      commandInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 text-green-400 font-mono z-40">
      <div className="max-w-4xl mx-auto h-full flex flex-col p-4">
        <div className="flex justify-between items-center p-2 border-b border-green-400/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span>portfolio.exe</span>
          <button onClick={onClose} className="hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4" ref={terminalRef}>
          <div className="mb-4">
            <p className="text-xl mb-2">Welcome to Portfolio Terminal</p>
            <p className="text-sm text-green-400/70">
              Type 'help' for available commands
            </p>
          </div>

          {terminalHistory.map((entry, i) => (
            <div key={i} className="mb-4">
              <div className="flex items-center gap-2 text-white">
                <span className="text-green-400">❯</span>
                <span>{entry.command}</span>
              </div>
              {entry.output.map((line, j) => (
                <p key={j} className="ml-4 text-green-400/90">
                  {line}
                </p>
              ))}
            </div>
          ))}

          <div className="flex items-center gap-2">
            <span className="text-green-400">❯</span>
            <input
              ref={commandInputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleCommand(currentCommand)
              }
              className="bg-transparent border-none outline-none flex-1 text-white"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};
