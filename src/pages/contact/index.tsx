import ContactForm from '@/components/ContactForm/ContactForm';
import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Head from 'next/head';
import LocationIcon from '../../utilities/icons/LocationIcon';
import styles from './contact.module.scss';

export default function Contact() {
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
            <LocationIcon />
            <Heading size={'md'}>Vancouver, BC</Heading>
          </Flex>
          <ContactForm />
        </Box>
      </main>
    </>
  );
}
