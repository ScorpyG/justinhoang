import { SKILLS } from '@/utils/constants';
import { cn } from 'cn';
import { Badge } from './ui/badge';

// ---------------------------------------------------------------
// SKILLS SECTION COMPONENT
// ---------------------------------------------------------------
export function SkillsSection() {
  // ...
  return (
    <section
      id="skills"
      className="mb-8 scroll-mt-8 md:mb-12 lg:mb-24 lg:scroll-mt-12"
      aria-label="Skills"
    >
      <div
        className={cn(
          'sticky top-0 z-20 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:opacity-0',
          '-mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:mx-auto lg:px-0 lg:py-0',
          'w-screen lg:w-full'
        )}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {SKILLS.map((skill, index) => (
          <Badge
            key={`skill-${index}`}
            variant="outline"
            className={cn(
              'bg-background border-2',
              'cursor-default transition duration-200 ease-in-out hover:scale-200',
              'text-sm'
            )}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
