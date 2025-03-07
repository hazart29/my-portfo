import Image from 'next/image';
import SosmedButton from './SosmedButton';

export default function LandingPage() {
    return (
        <div className="flex flex-1 md:flex-row flex-col md:items-stretch items-center md:my-4 md:mx-40 md:p-4 m-1 p-2 justify-between md:gap-20 gap-4 md:outline-1 outline-0">
            <div className='flex-none'>
                <Image
                    src="/images/me/me.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="filter grayscale hover:grayscale-0 transition-all duration-300 md:w-[300] w-screen"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between items-stretch md:text-start text-center py-4">
                <p className='flex-none md:text-8xl/20 text-2xl font-bold'>I&apos;m Website Developer</p>
                <div className='flex flex-1 flex-col justify-end gap-6'>
                    <p className='flex-none font-light md:w-3/4 w-full'>Beginner Website Developer, focused on frontend developer based on Central Java of Indonesia, Fresh Graduate.</p>
                    <p className='flex-none font-signature text-4xl font-semibold'>Misbakhul Munir</p>
                    <SosmedButton />
                </div>
            </div>
        </div>
    );
}