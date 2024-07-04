"use client";
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    // Réinitialiser le formulaire après soumission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 p-8 m-auto">
      <div className="mb-4">
        <label htmlFor="name" className="sr-only">Nom</label>
        <input
          type="text"
          id="name"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 pl-5 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
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
