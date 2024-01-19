import { ServerRes } from '@/pages/api/contact';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { SubmitHandler } from 'react-hook-form';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function useContactForm() {
  const toast = useToast();

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
        toast({
          title: data.title,
          description: data.description,
          status: data.toastStatus,
          isClosable: true,
        });
      } else {
        toast({
          title: data.title,
          description: data.description,
          status: data.toastStatus,
          isClosable: false,
        });
      }
    } catch (err) {
      toast({
        title: `Unable to send email`,
        description: `${err}`,
        status: 'error',
        isClosable: true,
      });
    }
  };

  const onInvalidSubmit = () => {
    toast({
      title: 'Missing information',
      description: 'Please fill out the form',
      status: 'error',
      duration: 3500,
      isClosable: true,
    });
  };

  return { onSubmit, onInvalidSubmit };
}
