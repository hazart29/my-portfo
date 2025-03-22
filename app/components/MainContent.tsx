import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';
import Image from 'next/image';
import Button from './buttons/Button';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">

        {/* Bagian Teks (Moved to be first on mobile) */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">
            Hi, I&apos;m Misbakhul Munir!
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">Frontend WEB Developer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
            I&apos;m a passionate and creative web developer dedicated to crafting visually stunning and user-friendly websites.
            With a keen eye for design and a deep understanding of modern web development, I transform ideas into
            beautifully functional digital experiences.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
            >
              Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-gray-500 hover:bg-white/10 hover:border-white"
            >
              Hire Me
            </Button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bagian Foto */}
        <div className="flex-none w-1/3 flex relative justify-start items-center pl-4">
          <Image
            src="/images/me/me.png"
            alt="Misbakhul Munir"
            width={300}
            height={300}
            className="absolute transition-transform hover:scale-105 object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
