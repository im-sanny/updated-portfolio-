import { ProjectCardProps } from '@/app/types';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  pattern,
  onHover,
}) => (
  <div
    className="group relative aspect-square border border-black hover:border-2 transition-all overflow-hidden"
    onMouseEnter={onHover}
  >
    <div
      className="absolute inset-0 transition-transform duration-700"
      style={{ background: pattern }}
    />

    <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500">
      <div className="p-8">
        <project.icon className="w-8 h-8 mb-4" />
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4 text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-black text-sm hover:bg-black hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
