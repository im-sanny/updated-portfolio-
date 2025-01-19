import { Card } from '@/components/ui/card';
import css from '@/public/css.svg';
import express from '@/public/express.svg';
import firebase from '@/public/firebase.svg';
import git from '@/public/git.svg';
import github from '@/public/github.svg';
import html from '@/public/html.svg';
import js from '@/public/js.svg';
import mongo from '@/public/mongo.svg';
import netlify from '@/public/netlify.svg';
import next from '@/public/next.svg';
import node from '@/public/node.svg';
import react from '@/public/react.svg';
import tailwind from '@/public/tailwindcss.svg';
import ts from '@/public/typescript.svg';
import vercel from '@/public/vercel.svg';
import Image from 'next/image';

const TechStack = () => {
  const categories = [
    {
      technologies: [
        { alt: 'JavaScript', src: js },
        { alt: 'TypeScript', src: ts },
        { alt: 'React', src: react },
        { alt: 'Next.js', src: next },
        { alt: 'Node.js', src: node },
        { alt: 'HTML', src: html },
        { alt: 'CSS', src: css },
      ]
    },
    {
      technologies: [
        { alt: 'Express', src: express },
        { alt: 'Git', src: git },
        { alt: 'GitHub', src: github },
        { alt: 'MongoDB', src: mongo },
        { alt: 'Firebase', src: firebase },
      ]
    },
    {
      technologies: [
        { alt: 'Tailwind', src: tailwind },
        { alt: 'Vercel', src: vercel },
        { alt: 'Netlify', src: netlify },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-3xl mb-8 text-gray-800">Tech Stack</h1>
      <Card className="p-6">
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {category.technologies.map((icon) => (
                  <div
                    key={icon.alt}
                    className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src={icon.src}
                      alt={`${icon.alt} logo`}
                      width={36}
                      height={36}
                    />
                    <span className="text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {icon.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TechStack;
