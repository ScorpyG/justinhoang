import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const ContactFormSchema = z.object({
  fullname: z.string().nonempty('Full name is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address'),
  content: z.string().min(10, { message: 'Message is required' }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

// -------------------------------------------------
export default function useContactForm() {
  const onSubmit: SubmitHandler<ContactFormValues> = useCallback(
    async (data) => {
      // TODO: Handle form submission

      // eslint-disable-next-line no-console
      console.log(data);
    },
    [],
  );

  const onInvalidSubmit = useCallback(() => {
    toast.error('Please fill in all required fields');
  }, []);

  return {
    onSubmit,
    onInvalidSubmit,
  };
}
