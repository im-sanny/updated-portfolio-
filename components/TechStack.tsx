import { Card } from '@/components/ui/card';
import css from '@/public/css.svg';
import html from '@/public/html.svg';
import js from '@/public/js.svg';
import next from '@/public/next.svg';
import node from '@/public/node.svg';
import react from '@/public/react.svg';
import tailwind from '@/public/tailwindcss.svg';
import ts from '@/public/typescript.svg';
import Image from 'next/image';


const TechStack = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>Tech Stack</h1>
      <Card>
        <div className="text-center flex ">
          <Image src={ts} alt='ts logo' width={36} height={36}></Image>
          <Image src={js} alt='js logo' width={36} height={36}></Image>
          <Image src={react} alt='react logo' width={36} height={36}></Image>
          <Image src={next} alt='next logo' width={36} height={36}></Image>
          <Image src={node} alt='node logo' width={36} height={36}></Image>
          <Image src={html} alt='html logo' width={36} height={36}></Image>
          <Image src={css} alt='css logo' width={36} height={36}></Image>
          <Image src={tailwind} alt='tailwind logo' width={36} height={36}></Image>
        </div>
      </Card>
    </div>
  )
}

export default TechStack;
