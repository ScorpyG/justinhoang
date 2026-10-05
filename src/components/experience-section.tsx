import { WORK_EXPERIENCES } from '@/utils/constants';
import { type WorkExperience } from '@/utils/types';
import { cn } from 'cn';
import { format } from 'date-fns';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

// ---------------------------------------------------------------
// EXPERIENCE CARD COMPONENT
// ---------------------------------------------------------------
function ExperienceCard({ experience }: { experience: WorkExperience }) {
  // ...
  const { role, company, link, description, startDate, endDate, technologies } =
    experience;

  return (
    <Card
      className={cn(
        'dark:hover:bg-card/50 hover:bg-accent/50 bg-transparent transition-colors duration-200',
        'border-none ring-0 outline-none'
      )}
    >
      <CardHeader>
        {link ? (
          <Link
            target="_blank"
            href={link}
            className={cn('group', 'flex items-center gap-0.75')}
          >
            <CardTitle>{company}</CardTitle>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:-rotate-45" />
          </Link>
        ) : (
          <CardTitle>{company}</CardTitle>
        )}

        <CardDescription>{role}</CardDescription>

        <CardAction>
          <Badge variant="secondary">
            {format(startDate, 'MMMM yyyy')} —{' '}
            {endDate ? format(endDate, 'MMMM yyyy') : 'Current'}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-start gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="default"
              className="bg-teal-500/20 text-teal-600 dark:bg-teal-400/10 dark:text-teal-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------
// EXPERIENCE SECTION COMPONENT
// ---------------------------------------------------------------
export function ExperienceSection() {
  // ...
  return (
    <section
      id="work-experience"
      className="mb-8 scroll-mt-8 md:mb-12 lg:mb-24 lg:scroll-mt-12"
      aria-label="Work experience"
    >
      <div
        className={cn(
          'sticky top-0 z-20 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:opacity-0',
          '-mx-6 mb-4 px-6 py-5 md:-mx-12 md:px-12 lg:mx-auto lg:px-0 lg:py-0',
          'w-screen lg:w-full'
        )}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase lg:sr-only">
          Experience
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {WORK_EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={`exp-${index}`} experience={experience} />
        ))}
      </div>
    </section>
  );
}
