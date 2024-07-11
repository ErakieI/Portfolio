"use client";
import React, { useState } from 'react';
require('dotenv').config()

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("access_key", "7a4c5cc0-8f47-48d5-b45c-03b7411bf397");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Error sending email.');
      console.error('Error:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="lg:w-3/4 w-4/5 lg:p-8 m-auto">
      <div className="mb-4">
        <label htmlFor="name" className="sr-only">Nom</label>
        <input
          type="text"
          id="name"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
          name="name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
          name="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Sujet"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
          name="subject"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          placeholder="Message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 h-64 resize-none"
          name="message"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4"
        >
          Envoyer
        </button>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
