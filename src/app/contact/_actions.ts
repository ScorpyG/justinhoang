'use server';
import { ContactFormValues } from '@/components/Form';
import nodemailer, { SendMailOptions } from 'nodemailer';

// -------------------------------------------------------------
export async function sendMail(formData: ContactFormValues) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ...
    const mailOptions: SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: formData.email,
      subject: `Contact request from ${formData.fullname}`,
      html: `
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <title>Contact Form</title>
            </head>
            <body>
                <div
                style="
                    width: 600px;
                    margin: 0 auto;
                    padding: 10px;
                    border: 1px solid #e7e7e7;
                    border-radius: 5px;
                    font-family: sans-serif;
                "
                >
                <h2><strong>You have a new message!</strong></h2>
                <p>
                    <strong>Name:<br /> </strong> ${formData.fullname}
                </p>
                <p>
                    <strong>E-Mail: </strong><br />
                    ${formData.email}
                </p>
                <p>
                    <strong>Message: </strong><br />
                    ${formData.content}
                </p>
                </div>
            </body>
        </html>`,
    };

    const mailResult = await transporter.sendMail(mailOptions);

    return mailResult;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
}
