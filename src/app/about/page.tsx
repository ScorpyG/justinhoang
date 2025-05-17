'use client';
import FadeIn from '@/components/FadeIn';
import { experiences, skills } from '@/utils/constants';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import GhostGif from '../../../public/images/ghost.gif';
import HeadshotImage from '../../../public/images/profile.jpg';

export default function AboutPage() {
  // ...
  const [isHeadshot, setIsHeadshot] = useState(false);

  // --------------------------------------------------------------------------------------------------------
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-20 max-w-11/12 md:max-w-2/3 mx-auto">
      {/* ------------------------------ About me ------------------------------ */}
      <FadeIn duration={100}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-6">
          <Image
            priority
            src={isHeadshot ? HeadshotImage : GhostGif}
            alt="profile image"
            height={200}
            width={200}
            className="rounded-full transition duration-200 ease-in-out cursor-pointer hover:scale-95"
            onClick={() => setIsHeadshot((prev) => !prev)}
          />

          <div className="flex flex-col items-start justify-center gap-3">
            <div className="font-medium text-2xl md:text-4xl">About me</div>

            <div className="text-base md:text-lg">
              Based in Vancouver, BC. I&apos;m graduated with Bachelor of
              Computer Science. I love to learn different technologies and
              building applications to challenge my own creativity,
              problem-solving, planning, and organization.
            </div>

            <div className="text-base md:text-lg">
              I&apos;m specialize in Front-End Development with a focus on
              building production-ready applications using{' '}
              <span className="font-semibold">Next.js</span>,{' '}
              <span className="font-medium text-blue-500">TypeScript</span> and{' '}
              <span className="font-medium text-pink-400">GraphQL</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ------------------------------ Technologies ------------------------------ */}
      <FadeIn duration={150}>
        <div className="self-center flex flex-col items-start md:items-center justify-center gap-3 md:gap-4">
          <div className="font-medium text-2xl md:text-4xl">Technologies</div>
          <div className="text-base md:text-lg tracking-wide">
            Check out different technologies I&apos;ve worked with.
          </div>

          <div className="flex flex-row items-center justify-start md:justify-center gap-2 flex-wrap mt-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border-2 px-3.5 py-1 rounded-full transition duration-200 ease-in-out hover:scale-150 bg-white cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ------------------------------- Experiences ------------------------------- */}
      <FadeIn duration={200}>
        <div className="self-center flex flex-col items-start md:items-center justify-center gap-3 md:gap-4">
          <div className="font-medium text-2xl md:text-4xl">
            Work Experience
          </div>

          <div className="text-base md:text-lg tracking-wide">
            Where I&apos;ve been...professionally?
          </div>

          <div className="flex flex-col gap-6 items-center justify-center w-full">
            {experiences.map((experience, index) => (
              <div key={index} className="p-6 rounded-2xl w-full bg-gray-100">
                <div className="flex flex-row items-center justify-start gap-6 w-full">
                  {experience.media ? (
                    <Image
                      src={experience.media.src}
                      alt={`${experience.company} logo`}
                      height={56}
                      width={56}
                      className="rounded-sm"
                    />
                  ) : (
                    <BuildingOfficeIcon className="size-14 text-gray-400" />
                  )}

                  <div className="flex flex-col items-start justify-center gap-0.5 w-full">
                    <div className="font-semibold text-lg">
                      {experience.title}
                    </div>

                    <div className="flex flex-row items-center justify-between gap-2 w-full">
                      <div className="text-sm rounded-full px-2 py-0.5 bg-gray-200">
                        {experience.company}
                      </div>

                      <div className="text-sm text-gray-500 truncate md:block hidden">
                        {format(experience.startDate, 'MMMM yyyy')} -{' '}
                        {experience.endDate
                          ? format(experience.endDate, 'MMMM yyyy')
                          : 'Current'}
                      </div>
                    </div>
                  </div>
                </div>

                <ol className="list-disc list-inside mt-4">
                  {experience.description.split('. ').map((desc, idx) => (
                    <li key={idx} className="text-sm md:text-base mt-0.5">
                      {desc.trim()}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
