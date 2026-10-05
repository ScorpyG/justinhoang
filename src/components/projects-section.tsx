import { PROJECTS } from '@/utils/constants';
import { type Project } from '@/utils/types';
import { cn } from 'cn';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const VISIBLE_LIMIT = 4;

// ---------------------------------------------------------------
// PROJECT CARD COMPONENT
// ---------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  // ...
  const { title, source, description, technologies, media } = project;

  const hasOverflow = technologies.length > VISIBLE_LIMIT;
  const VISIBLE_TECHNOLOGIES = hasOverflow
    ? technologies.slice(0, VISIBLE_LIMIT - 1)
    : technologies;
  const REMAINING_TECHNOLOGIES = hasOverflow
    ? technologies.slice(VISIBLE_LIMIT - 1)
    : [];

  return (
    <Card
      className={cn(
        'dark:hover:bg-card/50 hover:bg-accent/50 bg-transparent transition-colors duration-200',
        'border-none ring-0 outline-none'
      )}
    >
      <CardContent className="flex flex-row items-start justify-start gap-4">
        <Image
          src={media}
          alt={`Project ${title} screenshot`}
          width={180}
          height={90}
          loading="lazy"
          quality={75}
          className="aspect-video h-auto w-auto rounded object-cover"
        />

        <div className="flex flex-col items-start justify-start gap-1">
          <Link
            href={source}
            target="_blank"
            className={cn('group', 'flex items-center gap-0.75')}
          >
            <p className="text-base font-medium">{title}</p>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:-rotate-45" />
          </Link>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          {VISIBLE_TECHNOLOGIES.length > 0 && (
            <div
              className={cn(
                'flex flex-row flex-wrap items-center justify-start gap-2',
                'mt-2'
              )}
            >
              {VISIBLE_TECHNOLOGIES.slice(0, 4).map((technology) => (
                <Badge
                  key={technology}
                  variant="default"
                  className="bg-teal-500/20 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
                >
                  {technology}
                </Badge>
              ))}

              {REMAINING_TECHNOLOGIES.length > 0 && (
                <HoverCard>
                  <HoverCardTrigger
                    delay={10}
                    closeDelay={100}
                    aria-label={`Show ${REMAINING_TECHNOLOGIES.length} more technologies`}
                    // ...
                    render={
                      <Badge
                        variant="default"
                        className="bg-teal-500/20 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
                      >
                        +{REMAINING_TECHNOLOGIES.length}
                      </Badge>
                    }
                  />

                  <HoverCardContent
                    side="top"
                    sideOffset={8}
                    align="center"
                    className={cn(
                      'flex flex-row flex-wrap items-center justify-start gap-2',
                      'min-w-48 p-2'
                    )}
                  >
                    {REMAINING_TECHNOLOGIES.map((technology, index) => (
                      <Badge
                        key={`remaining-tech-${index}`}
                        variant="default"
                        className="bg-teal-500/20 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------
// PROJECTS SECTION COMPONENT
// ---------------------------------------------------------------
export function ProjectsSection() {
  // ...
  return (
    <section
      id="projects"
      className="mb-8 scroll-mt-8 md:mb-12 lg:mb-24 lg:scroll-mt-12"
      aria-label="Projects"
    >
      <div
        className={cn(
          'sticky top-0 z-20 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:opacity-0',
          '-mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:mx-auto lg:px-0 lg:py-0',
          'w-screen lg:w-full'
        )}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase lg:sr-only">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
}
