import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

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

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default handler;
