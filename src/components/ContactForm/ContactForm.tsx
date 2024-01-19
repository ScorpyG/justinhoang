import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import styles from './contactForm.module.scss';
import useContactForm, { ContactFormValues } from './useContactForm';

export default function ContactForm() {
  const colorStateForDarkMode = useColorModeValue('#000', '#FFF');
  const colorStateForLightMode = useColorModeValue('#FFF', '#000');
  const colorStateTextField = useColorModeValue('#dbdbdbcd', 'whiteAlpha.300');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>();
  const { onSubmit, onInvalidSubmit } = useContactForm();

  if (isSubmitSuccessful) {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} className={`${styles.form}`}>
      <FormControl isInvalid={errors.name && true}>
        <FormLabel htmlFor="name" textAlign={'left'}>
          Full Name:
        </FormLabel>
        <Input
          {...register('name', {
            pattern: {
              value: /^[a-zA-Z0-9 ]*$/,
              message: 'Please enter your name',
            },
            required: 'Required Field',
          })}
          placeholder="Your Name"
          backgroundColor={colorStateTextField}
        />
        <FormErrorMessage mt={1}>{errors.name && errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email" textAlign={'left'}>
          Email Address:
        </FormLabel>
        <Input
          {...register('email', {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email address',
            },
            required: 'Required Field',
          })}
          placeholder="Your Email"
          type="email"
          backgroundColor={colorStateTextField}
        />
        <FormErrorMessage mt={1}>{errors.email && errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message && true}>
        <FormLabel htmlFor="message" textAlign={'left'}>
          Your Message:
        </FormLabel>
        <Textarea
          {...register('message', {
            pattern: {
              value: /^[a-zA-Z0-9 !#&@()_,.?"'+-:]*$/,
              message: 'Please enter your message',
            },
            required: 'Required Field',
          })}
          placeholder="Your Message"
          minH={'150px'}
          borderRadius={'5px'}
          padding={'10px 10px'}
          resize={'none'}
          border={'none'}
          backgroundColor={colorStateTextField}
        />
        <FormErrorMessage mt={1}>{errors.message && errors.message.message}</FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        type="submit"
        isLoading={isSubmitting}
        background={'transparent'}
        border={'2px'}
        borderRadius={'30px'}
        transitionDuration={'.3s'}
        _hover={{
          border: colorStateForDarkMode,
          backgroundColor: colorStateForDarkMode,
          color: colorStateForLightMode,
        }}
      >
        SUBMIT
      </Button>
    </form>
  );
}
