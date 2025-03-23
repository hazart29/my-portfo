import React from 'react';

const AboutPage = () => {
    return (
        <div className="container flex flex-1 flex-col gap-8 justify-center items-center text-gray-200 mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
            <div className='flex gap-4 items-start justify-center'>
                <p className="mb-4">
                    Kami adalah tim yang berdedikasi untuk menciptakan solusi perangkat lunak yang inovatif. Kami percaya dalam memberikan nilai kepada klien kami melalui keahlian dan komitmen kami.
                </p>
                <p className="mb-4">
                    Kami memiliki pengalaman dalam berbagai teknologi dan industri, dan kami selalu berusaha untuk tetap mengikuti perkembangan terbaru dalam dunia pengembangan perangkat lunak.
                </p>
                <p>
                    Jika Anda memiliki pertanyaan atau ingin tahu lebih banyak tentang kami, jangan ragu untuk menghubungi kami.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;