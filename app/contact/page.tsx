import React from 'react';

const ContactPage = () => {
    return (
        <div className="container flex flex-1 flex-col gap-8 justify-center items-center text-gray-200 mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
            <div className='flex gap-4 items-start justify-center'>
                <p className="flex-1 mb-4">
                    Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi tentang proyek potensial, jangan ragu untuk menghubungi kami melalui informasi di bawah ini:
                </p>
                <ul className="flex-1 list-di   sc list-inside mb-4">
                    <li>Email: misbakhul2904@gmail.com</li>
                    <li>Telepon: +6282008718112</li>
                    <li>Alamat: RT. 01, RW. 01, Desa Dukuhrejosari, Kec. Ambal, Kab. Kebumen, Jawa Tengah</li>
                </ul>
                <p className='flex-1 '>
                    Anda juga dapat mengisi formulir di bawah ini dan kami akan segera menghubungi Anda.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;