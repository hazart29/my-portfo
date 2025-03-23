import React, { useState } from 'react';
import { Input, Textarea } from './Input'; // Import Input dan Textarea dari Input.tsx

const FormInputExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    setNameError('');
    setEmailError('');
    setMessageError('');

    if (!name.trim()) {
      setNameError('Nama wajib diisi');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email wajib diisi');
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError('Email tidak valid');
      isValid = false;
    }

    if (!message.trim()) {
      setMessageError('Pesan wajib diisi');
      isValid = false;
    }

    if (isValid) {
      alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Contoh Formulir dengan Input</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nama"
          placeholder="Masukkan nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage={nameError}
        />
        <Input
          label="Email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          errorMessage={emailError}
        />
        <Textarea
          label="Pesan"
          placeholder="Masukkan pesan Anda"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          errorMessage={messageError}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default FormInputExample;