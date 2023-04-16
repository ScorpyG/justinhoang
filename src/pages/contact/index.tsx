import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  chakra,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import Location from '../../utilities/svgr/Location';
import { ServerRes } from '../api/contact';
import styles from './contact.module.scss';

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const toastNotification = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (values: ContactFormValues) => {
    const config = {
      method: 'POST',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      const data: ServerRes = response.data;

      if (response.status === 200) {
        toastNotification({
          title: data.title,
          description: data.description,
          status: data.toastStatus,
          isClosable: true,
        });
        reset();
      } else {
        toastNotification({
          title: data.title,
          description: data.description,
          status: data.toastStatus,
          isClosable: false,
        });
      }
    } catch (err) {
      toastNotification({
        title: `${err}`,
        description: `${err}`,
        status: 'error',
        isClosable: true,
      });
    }
  };

  const contactForm = (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
      <FormControl isInvalid={errors.name && true}>
        <FormLabel htmlFor="name">Full Name:</FormLabel>
        <Input
          {...register('name', {
            pattern: {
              value: /^[a-zA-Z0-9 ]*$/,
              message: 'Please enter your name',
            },
            required: 'Required Field',
          })}
          placeholder="Your Name"
        />
        <FormErrorMessage mt={1}>{errors.name && errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email">Email Address:</FormLabel>
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
        />
        <FormErrorMessage mt={1}>{errors.email && errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message && true}>
        <FormLabel htmlFor="message">Your Message:</FormLabel>
        <Textarea
          {...register('message', {
            pattern: {
              value: /^[a-zA-Z0-9 !#&@()_,.?"'+-:]*$/,
              message: 'Please enter your message',
            },
            required: 'Required Field',
          })}
          placeholder="Your Message"
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
        transitionDuration={'300ms'}
        _hover={{
          border: 'inherit',
          backgroundColor: '#2E2E2E',
          color: '#FFF',
        }}
      >
        SUBMIT
      </Button>
    </form>
  );

  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <main>
        <Box className={`${styles.container}`}>
          <Box>
            <Heading>Get in touch!</Heading>
            <chakra.hr color={'black'} />
            <Text mt={2}>Here how you can reach me</Text>
          </Box>
          <Flex gap={'15px'} justifyContent={'center'} alignItems={'center'}>
            <Location />
            <h3>Vancouver, BC</h3>
          </Flex>
          {contactForm}
        </Box>
      </main>
    </>
  );
}
