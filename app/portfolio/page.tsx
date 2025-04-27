import type { NextPage } from 'next';
import Image from 'next/image';

const Portfolio: NextPage = () => {
  const projects = [
    {
      title: 'Taabook',
      description: 'Facebook clone built with Next.js and Tailwind CSS',
      imageUrl: '/images/porto/taabook.png',
      link: 'https://taabook.vercel.app',
    },
    {
      title: 'Virtual Dressing',
      description: 'Permainan web tentang fashion dengan fitur gacha Genshin Impact di dalamnya.',
      imageUrl: '/images/porto/vdress.png',
      link: 'https://vdress.vercel.app',
    },
    {
      title: 'Virtual Dressing v2',
      description: 'Permainan web tentang fashion dengan fitur gacha Tower of Fantasy di dalamnya.',
      imageUrl: '/images/porto/vdress2.png',
      link: 'https://vdress2.vercel.app',
    },
    {
      title: 'Birthday Checker',
      description: 'Aplikasi web untuk mengecek hari ulang tahunmu.',
      imageUrl: '/images/porto/birthday.png',
      link: 'https://birthdayweb-ivory.vercel.app/',
    },
    {
      title: 'XDRT Landing Page',
      description: 'Landing page untuk crypto currency XDR Team.',
      imageUrl: '/images/porto/xdrtweb.png',
      link: 'https://xdrtweb.vercel.app/',
    },
    {
      title: 'PKL Project',
      description: 'Redesain aplikasi satria milik pemerintah.',
      imageUrl: '/images/porto/satria.png',
      link: 'https://hazart29.github.io/prototypesatria/',
    },
  ];

  return (
    <div className="flex flex-col flex-1 gap-8 justify-center items-center text-gray-200 mx-auto h-full"> {/* Tambahkan h-full */}
      <ul className="space-y-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/20 pr-2 max-h-[70vh] w-full px-4"> {/* Tambahkan max-h dan px-4 untuk padding samping */}
        {projects.map((project, index) => (
          <li key={index} className="flex items-center bg-white/20 backdrop-blur-md rounded-lg p-4">
            <div className="w-1/4">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="w-1/2 px-4">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="w-1/4 flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-4 rounded"
              >
                Kunjungi Situs
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;