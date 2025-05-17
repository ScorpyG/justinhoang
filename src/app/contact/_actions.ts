'use server';
import { ContactFormValues } from '@/components/Form';
import { google } from 'googleapis';
import nodemailer, { SendMailOptions } from 'nodemailer';

// -------------------------------------------------------------
const GoogleOAuth2 = google.auth.OAuth2;

const googleOAuth2Client = new GoogleOAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

googleOAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

// -------------------------------------------------------------
export async function sendMail(formData: ContactFormValues) {
  // ! Something went wrong with the access token
  //   const accessToken = await googleOAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
      //   expires: 1484314697598,
    },
  });

  try {
    // ...
    await transporter.verify();

    const mailOptions: SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact request from ${formData.fullname}`,
      text: formData.content,
      html: `<p>From: ${formData.fullname} (${formData.email})</p><p>${formData.content}</p>`,
    };

    const mailResult = await transporter.sendMail(mailOptions);

    return mailResult;
  } catch (error) {
    return error;
  }
}
