import React from 'react';
import Image from 'next/image'; // Import komponen Image dari Next.js

const AboutPage: React.FC = () => {
    return (
        <div className="container flex flex-1 flex-col gap-8 justify-center items-center text-gray-200 mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="flex-none max-w-fit h-full flex justify-center items-center">
                    <Image
                        src="/images/me/me.jpg" // Ganti dengan URL gambar online
                        alt="Misbakhul Munir"
                        width={270} // Sesuaikan lebar foto
                        height={200} // Sesuaikan tinggi foto
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 flex-none flex gap-6 flex-col">
                    <h1 className="text-4xl font-bold text-gray-200">Tentang Saya</h1>
                    <p className="text-gray-400 text-justify">
                        Saya Misbakhul Munir, seorang pengembang perangkat lunak yang berbasis di Indonesia, dengan fokus pada inovasi dan kualitas. Saya memiliki semangat tinggi untuk menciptakan solusi digital yang berdampak.
                    </p>
                    <p className="text-gray-400 text-justify">
                        Saya mengkhususkan diri dalam pengembangan aplikasi web dan mobile yang dirancang untuk memenuhi kebutuhan bisnis Anda, dengan penekanan pada pengalaman pengguna yang intuitif dan desain yang responsif. Saya memahami bahwa setiap proyek unik, dan saya berkomitmen untuk memberikan solusi yang disesuaikan dengan kebutuhan spesifik Anda.
                    </p>
                    <p className="text-gray-400 text-justify">
                        Sebagai lulusan baru dari Universitas Teknologi Digital Indonesia, dengan gelar Sarjana Komputer dari Fakultas Informatika, saya membawa pengetahuan dan semangat terbaru dalam dunia teknologi, siap untuk menghadapi tantangan dan memberikan kontribusi yang signifikan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;