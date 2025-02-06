'use client';
import { TerminalHistoryItem } from '@/app/types';
import { BackgroundPattern } from '@/components/BackgroundPattern';
import { ContactLink } from '@/components/ContactLink';
import { CustomCursor } from '@/components/CustomCursor';
import { Head } from '@/components/Head';
import { ProjectCard } from '@/components/ProjectCard';
import { Terminal } from '@/components/Terminal';
import {
  patterns,
  projects,
  socialLinks,
  terminalContentData,
} from '@/data/data';
import { triggerExplodeEffect } from '@/utils/confettiUtils';
import { Box, Command } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryItem[]>(
    [],
  );
  const [currentCommand, setCurrentCommand] = useState('');
  const [activePattern, setActivePattern] = useState(1);
  const [isExploding, setIsExploding] = useState(false);

  // Terminal commands
  const terminalCommands = React.useMemo(
    () => ({
      help: () => ({
        output: terminalContentData.help.messages,
      }),
      about: () => ({
        output: terminalContentData.about.messages,
      }),
      skills: () => ({
        output: terminalContentData.skills.messages,
      }),
      projects: () => ({
        output: terminalContentData.projects.messages,
      }),
      resume: () => ({
        output: terminalContentData.resume.messages,
      }),
      contact: () => ({
        output: terminalContentData.contact.messages,
      }),
      clear: () => {
        setTerminalHistory([]);
        return {
          output: terminalContentData.clear.messages,
        };
      },
      explode: () => {
        triggerExplodeEffect(setIsExploding);
        return {
          output: terminalContentData.explode.messages,
        };
      },
    }),
    [],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    if (!cmd) return;

    const commandFn = terminalCommands[cmd as keyof typeof terminalCommands];
    if (commandFn) {
      const result = commandFn();
      setTerminalHistory((prev) => [
        ...prev,
        { command, output: result.output },
      ]);
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command,
          output: [
            `Command not found: ${command}`,
            "Type 'help' for available commands",
          ],
        },
      ]);
    }
    setCurrentCommand('');
  };

  return (
    <div
      className={`min-h-screen bg-white text-black overflow-hidden ${
        isExploding ? 'animate-shake' : ''
      }`}
    >
      <CustomCursor position={cursorPosition} />
      <BackgroundPattern pattern={patterns[activePattern]} />

      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        terminalHistory={terminalHistory}
        currentCommand={currentCommand}
        setCurrentCommand={setCurrentCommand}
        handleCommand={handleCommand}
      />

      {/* header section */}
      <main className="container mx-auto px-4">
        <Head />

        {/* Projects Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                pattern={patterns[index % patterns.length]}
                onHover={() => setActivePattern(index % patterns.length)}
              />
            ))}
          </div>
        </section>

        {/* Command Menu */}
        <div className="fixed bottom-8 right-8 z-30 flex flex-col gap-4">
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <Command
              className="group-hover:rotate-90 transition-transform"
              size={20}
            />
          </button>
          <button
            onClick={() =>
              setActivePattern((prev) => (prev + 1) % patterns.length)
            }
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <Box
              className="group-hover:rotate-180 transition-transform"
              size={20}
            />
          </button>
        </div>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-8">
              Let's create something unique together
            </h2>
            <div className="space-y-4">
              {socialLinks.map((item) => (
                <ContactLink
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  pattern={patterns[0]}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
