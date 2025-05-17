'use client';
import { LoadingIcon } from '@/utils/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useContactForm, {
  ContactFormSchema,
  ContactFormValues,
} from '../hooks/useContactForm';

export default function ContactForm() {
  // ...
  const { onSubmit, onInvalidSubmit } = useContactForm();
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  });

  // ---------------------------------------------------
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // ---------------------------------------------------
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor="fullname"
          className=" text-sm text-gray-400 font-medium"
        >
          Full Name
        </label>
        <input
          id="fullname"
          placeholder="Enter full name"
          autoComplete="name"
          className={`ring-0 outline-none rounded-md placeholder:text-gray-400 border-2 bg-gray-100 ${errors.fullname ? 'border-red-500' : 'border-gray-100'}`}
          // ...
          {...register('fullname')}
        />
        <span className="text-xs text-red-500">
          {errors.fullname && errors.fullname.message}
        </span>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-sm text-gray-400 font-medium">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter full name"
          autoComplete="email"
          className={`ring-0 outline-none rounded-md placeholder:text-gray-400 border-2 bg-gray-100 ${errors.email ? 'border-red-500' : 'border-gray-100'}`}
          // ...
          {...register('email')}
        />
        <span className="text-xs text-red-500">
          {errors.email && errors.email.message}
        </span>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="content" className=" text-sm text-gray-400 font-medium">
          Message
        </label>
        <textarea
          id="content"
          placeholder="Enter your message"
          className={`ring-0 outline-none rounded-md placeholder:text-gray-400 border-2 bg-gray-100 
            ${errors.content ? 'border-red-500' : 'border-gray-100'} resize-none h-32`}
          // ...
          {...register('content')}
        />
        <span className="text-xs text-red-500">
          {errors.content && errors.content.message}
        </span>
      </div>

      {/* ---------------------------------------------------------------------- */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-black hover:bg-black/80 rounded-md text-white 
            ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'}
            p-3 flex items-center justify-center`}
      >
        {isSubmitting ? (
          <LoadingIcon className="size-5 animate-spin mx-auto" />
        ) : (
          <span className="text-sm font-semibold">SEND</span>
        )}
      </button>
    </form>
  );
}
