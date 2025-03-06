import Image from 'next/image';
import SosmedButton from './SosmedButton';

export default function LandingPage() {
    return (
        <div className="flex flex-1 my-4 mx-40 p-4 justify-between gap-20 outline-1">
            <div className='flex-none'>
                <Image
                    src="/images/me/me.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="filter grayscale hover:grayscale-0"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between items-stretch py-4">
                <p className='flex-none text-8xl/20 font-bold'>I&apos;m Website Developer</p>
                <div className='flex flex-1 flex-col justify-end gap-6'>
                    <p className='flex-none font-light w-3/4'>Beginner Website Developer, focused on frontend developer based on Central Java of Indonesia, Fresh Graduate.</p>
                    <p className='flex-none font-signature text-4xl font-semibold'>Misbakhul Munir</p>
                    <SosmedButton />
                    <a href="#section-2">more&gt;</a>
                </div>
            </div>
        </div>
    );
}