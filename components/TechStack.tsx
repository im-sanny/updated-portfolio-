import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import ts from '@/public/typescript.svg'
import js from '@/public/js.svg'


const TechStack = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-4'>Tech Stack</h1>
      <Card>
        <div className="text-center flex ">
          <Image src={ts} alt='ts logo' width={36} height={36}></Image>
          <Image src={js} alt='js logo' width={36} height={36}></Image>
        </div>
      </Card>
    </div>
  )
}

export default TechStack;
