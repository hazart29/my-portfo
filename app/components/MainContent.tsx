'use client'
import React, { useState } from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import EmailModal from './ui/EmailModal'; // Import EmailModal
import Link from 'next/link';

const MainContent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State untuk modal

  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">

        {/* Bagian Teks (Moved to be first on mobile) */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">
            Hi, I&apos;m Misbakhul Munir!
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">Frontend WEB Developer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            Saya seorang pengembang web yang penuh semangat dan kreatif, berdedikasi untuk menciptakan situs web yang memukau secara visual dan ramah pengguna.
            Dengan mata yang tajam untuk desain dan pemahaman yang mendalam tentang pengembangan web modern, saya mengubah ide menjadi
            pengalaman digital yang fungsional dan indah.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="https://vdress.vercel.app/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 py-2 px-4 rounded transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-gray-500 hover:bg-white/10 hover:border-white"
              onClick={() => setIsModalVisible(true)} // Buka modal saat diklik
            >
              Hire Me
            </Button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://web.facebook.com/Misbakhul29" aria-label='sosmed' target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/misbakhul-munir-787794233/" aria-label='sosmed' target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/hazart29" aria-label='sosmed' target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Bagian Foto */}
        <div className="flex-none w-1/3 h-auto flex relative justify-start items-center pl-4">
          <div className='absolute bg-pattern-line w-72 h-72 rotate-45'></div>
          <Image
            src="/images/me/me.png"
            alt="Misbakhul Munir"
            width={300}
            height={300}
            className="absolute transition-transform hover:scale-105 object-cover"
          />
        </div>
      </div>
      <EmailModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        toEmail="misbakhul2904@gmail.com" // Ganti dengan email Anda
      />
    </main>
  );
};

export default MainContent;