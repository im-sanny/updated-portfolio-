import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  'TypeScript',
  'React',
  'JavaScript',
  'NextJS',
  'HTML',
  'CSS',
  'NodeJS',
  'MongoDB',
  'Github',
  'Vercel',
];

const Skills = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <Badge variant="secondary" key={index} className="rounded-full">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Skills;
