import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
    return (
        <div className="flex-1 flex flex-col md:flex-row gap-12 justify-center items-center text-gray-200">
            <Image
                src="/images/me/me.jpg"
                alt="Misbakhul Munir"
                width={270}
                height={300}
                className="rounded-lg shadow-lg"
            />
            <div className="flex-1 flex flex-col justify-between gap-6">
                <h1 className="flex-none text-4xl font-bold text-gray-200">Tentang Saya</h1>
                <div className='flex flex-row gap-8'>
                    <p className="flex-1 text-gray-400 text-justify">
                        Saya Misbakhul Munir, seorang pengembang perangkat lunak yang berbasis di Indonesia, dengan fokus pada inovasi dan kualitas. Saya memiliki semangat tinggi untuk menciptakan solusi digital yang berdampak.
                    </p>
                    <p className="flex-1 text-gray-400 text-justify">
                        Saya mengkhususkan diri dalam pengembangan aplikasi web dan mobile yang dirancang untuk memenuhi kebutuhan bisnis Anda, dengan penekanan pada pengalaman pengguna yang intuitif dan desain yang responsif. Saya memahami bahwa setiap proyek unik, dan saya berkomitmen untuk memberikan solusi yang disesuaikan dengan kebutuhan spesifik Anda.
                    </p>
                    <p className="flex-1 text-gray-400 text-justify">
                        Sebagai lulusan baru dari Universitas Teknologi Digital Indonesia, dengan gelar Sarjana Komputer dari Fakultas Informatika, saya membawa pengetahuan dan semangat terbaru dalam dunia teknologi, siap untuk menghadapi tantangan dan memberikan kontribusi yang signifikan.
                    </p>
                </div>
                <h1 className="flex-none font-signature text-2xl font-bold text-gray-200 text-right">Misbakhul Munir</h1>
            </div>
        </div>
    );
};

export default AboutPage;