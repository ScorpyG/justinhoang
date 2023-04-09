import axios from 'axios';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import Location from '../../utilities/svg/Location';
import styles from './contact.module.scss';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      if (response.status === 200) {
        // TODO: use chakraUI toast for status update
        reset();
      }
    } catch (err) {
      // TODO: use chakraUI toast for status update
    }
  };

  const contactForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.form}`}>
        <label>Full Name:</label>
        <input
          {...register('name', {
            pattern: {
              value: /^[a-zA-Z0-9 ]*$/,
              message: 'Please enter your name',
            },
            required: 'This is required',
          })}
          placeholder="Your Name"
        />
        {errors.name && <p>&#33; {errors.name?.message}</p>}

        <label>Email Address:</label>
        <input
          {...register('email', {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email address',
            },
            required: 'This is required',
          })}
          placeholder="Your Email"
          type="email"
        />
        {errors.email && <p>&#33; {errors.email?.message}</p>}

        <label>Your Message:</label>
        <textarea
          {...register('message', {
            pattern: {
              value: /^[a-zA-Z0-9 !#&@()_,.?"'+-:]*$/,
              message: 'Please enter your message',
            },
            required: 'This is required',
          })}
          placeholder="Your Message"
        />
        {errors.message && <p>&#33; {errors.message.message}</p>}
      </div>

      <button type="submit" className={`${styles.button}`}>
        SUBMIT
      </button>
    </form>
  );

  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <main>
        <div className={`${styles.container}`}>
          <div className={`${styles.header}`}>
            <h1>Get in touch!</h1>
            <hr />
            <p>Here how you can reach me</p>
          </div>
          <div className={`${styles.badge}`}>
            <Location />
            <h3>Vancouver, BC</h3>
          </div>
          {contactForm}
        </div>
      </main>
    </>
  );
}
