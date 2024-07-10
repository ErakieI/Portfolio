const express = require('express');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const resend = new Resend('re_Rs58CTP5_FRdnvtvz7C6jKRYzMAihshDb');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'm.jacquemin133@gmail.com',
      subject: subject,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    });

    res.status(200).send('Email envoyé avec succès !');
  } catch (error) {
    console.error('Erreur d/envoi du mail :', error);
    res.status(500).send('Erreur d/envoi du mail');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
