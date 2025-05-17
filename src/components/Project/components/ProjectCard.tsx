'use client';
import { Project } from '@/utils/constants';
import { LinkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({
  media,
  title,
  source,
  technologies,
  description,
}: Project) {
  return (
    <div className="relative flex flex-col max-w-96 gap-3 p-3 rounded-lg border-2 border-gray-200 shadow">
      <Tilt className="w-full h-52 relative">
        <Image
          src={media.src}
          alt={`${title} image`}
          className="rounded-md shadow"
          fill
          priority
          sizes="(100vw)"
        />
      </Tilt>

      <div className="flex flex-col gap-2.5 items-start justify-start grow">
        <Link
          href={source}
          target="_blank"
          className="font-medium text-lg hover:text-blue-500 hover:underline flex flex-row items-center gap-1.5"
          rel="noopener noreferrer"
        >
          <LinkIcon className="size-5" />
          {title}
        </Link>

        <div className="flex flex-row flex-wrap items-center justify-start gap-2">
          {technologies &&
            technologies.length > 0 &&
            technologies.map((tech, i) => (
              <div
                key={i}
                className="px-2.5 py-1 bg-gray-200 rounded-full text-sm"
              >
                {tech}
              </div>
            ))}
        </div>

        <div className="mt-1 text-sm text-gray-500 px-2 pb-2">
          {description}
        </div>
      </div>
    </div>
  );
}
