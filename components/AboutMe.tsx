import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import React from 'react';

const AboutMe = () => {
  return (
    <>
      <Card className="flex flex-col">
        <CardTitle className="font-bold text-2xl p-6">About me</CardTitle>
        <CardDescription className="px-6 pb-6 text-sm md:text-base leading-relaxed">
          Frontend Developer with expertise in React and a growing knowledge of
          TypeScript. Skilled in delivering user-centered, responsive
          applications with an eye for intuitive UX. Passionate about creating
          impactful, AIdriven products to improve accessibility and enhance user
          experience.
        </CardDescription>
      </Card>
    </>
  );
};

export default AboutMe;
