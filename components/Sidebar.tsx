import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Facebook, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="w-full max-w-md">
      <Card className="overflow-hidden border bg-card">
        <CardHeader className="space-y-6">
          <div className="flex flex-row md:flex-col gap-4 md:gap-2 items-start">
            <div className="relative shrink-0 mx-auto">
              <Image
                width={150}
                height={150}
                quality={100}
                src="/pfp.jpg"
                alt="Rasel"
                className="size-16 md:size-48 rounded-full border-2 border-border object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center my-auto w-full md:items-start">
              <h1 className="font-bold text-xl md:text-2xl text-foreground">
                Rasel Parvez Sanny
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Junior Frontend Developer
              </p>
            </div>
          </div>

          <CardDescription className="text-sm md:text-base leading-relaxed">
            Frontend Developer with expertise in React and a growing knowledge
            of TypeScript. Skilled in delivering user-centered, responsive
            applications with an eye for intuitive UX
          </CardDescription>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 font-medium hover:opacity-90" size="lg">
              Contact me
            </Button>
            <Button
              variant="outline"
              className="flex-1 font-medium hover:bg-accent"
              size="lg"
            >
              Resume
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="border-t pt-6">
            <div className="flex justify-center items-center gap-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-600 transition-all duration-200"
                aria-label="Facebook Profile"
              >
                <Facebook strokeWidth={1.5} size={22} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-slate-900 transition-all duration-200"
                aria-label="Github Profile"
              >
                <Github strokeWidth={1.5} size={22} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-700 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin strokeWidth={1.5} size={22} />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
