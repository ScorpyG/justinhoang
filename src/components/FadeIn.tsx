'use client';
import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  duration = 0,
  className,
}: FadeInProps) {
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsMounted(true);
          }, duration);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [duration]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className} `}
    >
      {children}
    </div>
  );
}
