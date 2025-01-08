import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const FeaturedProject = () => {
  return (
    <div className="my-6">
      <h1 className="font-bold text-2xl mb-4">FeaturedProject</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <CardTitle>Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <div className="flex justify-between">
            <CardFooter className="p-0 text-sm text-muted-foreground">
              Card footer
            </CardFooter>
            <CardFooter className="p-0 hover:underline text-sm">
              <Link href={'/'}>Project Link</Link>
            </CardFooter>
          </div>
        </Card>
        <Card className="p-6">
          <CardTitle>Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <div className="flex justify-between">
            <CardFooter className="p-0 text-sm text-muted-foreground">
              Card footer
            </CardFooter>
            <CardFooter className="p-0 hover:underline text-sm">
              <Link href={'/'}>Project Link</Link>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedProject;
