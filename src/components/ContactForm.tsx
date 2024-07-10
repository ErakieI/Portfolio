"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setStatus('Email sent successfully');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-3/4 w-4/5 lg:p-8 m-auto">
      {status && <p>{status}</p>}
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
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="sr-only">Sujet</label>
        <input
          type="text"
          id="subject"
          placeholder="Sujet"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full px-3 py-2 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
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
    </form>
  );
};

export default ContactForm;
