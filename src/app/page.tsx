import FadeIn from '@/components/FadeIn';
import {
  ArrowDownTrayIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-start justify-center gap-3 max-w-11/12 md:max-w-2/3 lg:max-w-1/2 mx-auto">
      {/* -------------------------------------------- */}
      <FadeIn duration={100}>
        <div className="text-4xl lg:text-6xl font-semibold text-center tracking-tight">
          Hi, I&apos;m Justin Hoang
        </div>
      </FadeIn>

      <FadeIn duration={150}>
        <div className="text-lg md:text-xl text-center">
          Software Developer | Designer
        </div>
      </FadeIn>
      {/* -------------------------------------------- */}

      <FadeIn duration={200}>
        <div className="text-left text-lg mt-3">
          Based in Vancouver with a passion for technology from planning, design
          and all the way to solve problems. Be able to create and learn along
          side an innovative team is something I always love.
        </div>
      </FadeIn>

      {/* -------------------------------------------- */}
      <FadeIn duration={250}>
        <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-fit justify-center gap-4 self-center mt-4">
          <Link
            href="/projects"
            className="flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full border-2
            bg-black text-white hover:bg-white hover:text-black transition duration-200 ease-in-out cursor-pointer border-black"
          >
            <CubeTransparentIcon className="size-6" />
            <span className="font-medium">Browse Projects</span>
          </Link>

          <Link
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-full
            border-2 border-gray-300 hover:border-gray-700 transition duration-200 ease-in-out cursor-pointer"
          >
            <ArrowDownTrayIcon className="size-6" />
            <span className="font-medium">Download Resume</span>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
