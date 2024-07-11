import { Resend } from 'resend';

const resend = new Resend('re_Rs58CTP5_FRdnvtvz7C6jKRYzMAihshDb');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'm.jacquemin133@gmail.com',
        subject: subject,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
      });

      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}