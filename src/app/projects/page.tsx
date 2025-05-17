'use client';
import { ProjectCard } from '@/components/Project';
import { projects } from '@/utils/constants';
import { FanIcon } from '@/utils/icons';

export default function ProjectsPage() {
  // ...
  return (
    <div className="flex-1 flex flex-col items-center justify-start px-4 mx-auto">
      <div className="flex flex-row items-center justify-center gap-2 mt-6">
        <FanIcon className="size-8" />
        <div className="font-medium text-2xl md:text-4xl">Projects</div>
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-6 my-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
