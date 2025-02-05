import { aboutData } from '@/data/data';
import { useState } from 'react';

export const Head = () => {
  const [activePattern, setActivePattern] = useState(0);

  const patterns = [
    'linear-gradient(0deg, #fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
  ];

  return (
    <section className="min-h-screen flex items-center relative">
      <div
        className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] opacity-10 pointer-events-none"
        style={{ background: patterns[activePattern] }}
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square border border-black/20 transition-colors duration-500"
            onMouseEnter={() =>
              setActivePattern((prev) => (prev + 1) % patterns.length)
            }
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 relative group text-wrap leading-tight break-words w-full">
          <span className="absolute -top-6 left-0 text-xs sm:text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity">
            function
          </span>
          createWebExperiences() {'{'}
        </h1>

        <div className="ml-2 sm:ml-16 space-y-4 text-sm sm:text-lg md:text-xl">
          {['name', 'role', 'loves'].map((item) => (
            <p
              key={item}
              id={`magnetic-${item}`}
              className="transition-transform duration-300"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              const {item} ={' '}
              {item === 'loves'
                ? '["Clean Code", "Creative UI", "Animation"]'
                : `"${aboutData[item as keyof typeof aboutData]}"`}
              ;
            </p>
          ))}
        </div>

        <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mt-6 w-full">
          {'}'}
        </p>
      </div>
    </section>
  );
};
