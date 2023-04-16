import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export type ServerRes = {
  title: string;
  description: string;
  toastStatus: 'success' | 'error' | 'warning' | 'info'; // ChakraUI Toast statuses
};

async function handler(request: NextApiRequest, response: NextApiResponse<ServerRes>) {
  const { name, email, message } = request.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      pass: process.env.NEXT_PUBLIC_CONTACT_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `${name} would like to get in touch!`,
      html: `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return response.status(200).json({ title: 'Success', description: 'Email Sent!', toastStatus: 'success' });
  } catch (err) {
    return response.status(500).json({
      title: 'Failed',
      description: 'Sorry, something went wrong \n Please try again later',
      toastStatus: 'error',
    });
  }
}

export default handler;
