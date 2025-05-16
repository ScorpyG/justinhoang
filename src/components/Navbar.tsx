'use client';
import { GitHubIcon, LinkedInIcon } from '@/utils/icons';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3BottomRightIcon,
  BeakerIcon,
  EnvelopeIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WebsiteLogoDark from '../../public/dark-logo.svg';

export default function Navbar() {
  // ...
  const pathname = usePathname();
  const tabs = [
    {
      name: 'About',
      href: '/about',
      icon: <UserIcon className="size-5" />,
      isActive: pathname === '/about',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: <BeakerIcon className="size-5" />,
      isActive: pathname === '/projects',
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <EnvelopeIcon className="size-5" />,
      isActive: pathname === '/contact',
    },
  ];

  return (
    <Disclosure>
      <div className="flex flex-row justify-between items-center p-4">
        {/* ---- Logo ---- */}
        <Link href="/">
          <Image
            priority
            src={WebsiteLogoDark}
            alt="portfolio default link"
            className="rounded-full"
          />
        </Link>

        {/* ---- Toggle ---- */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative flex bg-gray-100 rounded-full p-1.5">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className="relative z-10 flex items-center gap-2 px-6 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 rounded-full"
              >
                {tab.icon}
                {tab.name}
                {tab.isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white shadow rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* ---- Socials Links ---- */}
        <div className="hidden md:flex flex-row gap-4 items-center justify-center">
          <Link
            href="https://github.com/ScorpyG"
            target="_blank"
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <GitHubIcon className="size-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/justin-gia-hoang/"
            target="_blank"
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <LinkedInIcon className="size-6" />
          </Link>
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <DisclosureButton className="md:hidden group inline-flex items-center justify-center p-2 rounded-md outline-none">
          <span className="sr-only">Open main menu</span>
          <Bars3BottomRightIcon
            aria-hidden
            className="size-6 block group-data-[open]:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden size-6 group-data-[open]:block"
          />
        </DisclosureButton>
      </div>

      <DisclosurePanel className="md:hidden mt-1 shadow-sm">
        <div className="space-y-1 p-2">
          {tabs.map((tab) => (
            <DisclosureButton
              key={tab.name}
              as={'a'}
              href={tab.href}
              className={`flex flex-row items-center justify-start gap-2.5 px-2 py-3 rounded-md ${tab.isActive && 'bg-gray-200'}`}
            >
              {tab.icon}
              <span className="font-medium">{tab.name}</span>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
