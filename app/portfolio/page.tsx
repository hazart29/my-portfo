import type { NextPage } from 'next';
import Image from 'next/image';

const Portfolio: NextPage = () => {
  const projects = [
    {
      title: 'Proyek 1',
      description: 'Deskripsi proyek 1.',
      imageUrl: '/images/project1.png',
      link: 'https://proyek1.com',
    },
    {
      title: 'Proyek 2',
      description: 'Deskripsi proyek 2.',
      imageUrl: '/images/project2.png',
      link: 'https://proyek2.com',
    },
    {
      title: 'Proyek 3',
      description: 'Deskripsi proyek 3.',
      imageUrl: '/images/project3.png',
      link: 'https://proyek3.com',
    },
    // Tambahkan proyek lain di sini
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
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
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