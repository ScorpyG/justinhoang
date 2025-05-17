import FadeIn from '@/components/FadeIn';
import { ContactForm } from '@/components/Form';
import { PaperPlaneLightIcon } from '@/utils/icons';

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-10 max-w-11/12 md:max-w-2/3 mx-auto">
      <FadeIn duration={100}>
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mt-10">
          <div className="flex flex-row items-center justify-center gap-4">
            <PaperPlaneLightIcon className="size-8 " />
            <span className="font-medium text-2xl md:text-4xl">
              Let&apos;s Connect
            </span>
          </div>

          <div className="text-base md:text-lg">
            <span className="italic">
              &quot;Alone we can do so little, together we can do so much!&quot;
            </span>{' '}
            - Helen Keller
          </div>
        </div>
      </FadeIn>

      <FadeIn duration={200} className="w-full">
        <div className="p-4 border-2 border-gray-200 rounded-lg w-full">
          <ContactForm />
        </div>
      </FadeIn>
    </div>
  );
}
