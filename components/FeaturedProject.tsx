import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/data';
import Link from 'next/link';

const FeaturedProject = () => {
  return (
    <div className="my-6">
      <h1 className="font-bold text-2xl mb-4">Featured Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-6">
            <CardTitle className='text-clip line-clamp-1'>{project.title}</CardTitle>
            <CardDescription className='max-h-full'>{project.description}</CardDescription>
            <div className="flex justify-between">
              <CardFooter className="p-0 text-sm hover:underline">
                <Link href={project.link} target=''>Project Code</Link>
              </CardFooter>
              <CardFooter className="p-0 hover:underline text-sm">
                <Link href={project.live} target=''>Project Link</Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;
