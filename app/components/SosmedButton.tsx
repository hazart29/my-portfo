import GithubIcon from "./icons/GithubIcon";
import InstaIcon from "./icons/InstaIcon";

export default function SosmedButton() {
    return (
        <div className='flex flex-none gap-4'>
            <a
                href="https://www.instagram.com/misbakhul29_/"
                target="_blank"
                className='flex flex-1 max-w-fit max-h-fit rounded-md p-2 outline-1 items-center gap-2 hover:outline-rose-500 hover:text-rose-500'
            >
                <InstaIcon width={32} height={32} />
                <p className='font-semibold font-mono'>Instagram</p>
            </a>

            <a
                href="https://github.com/hazart29/"
                target="_blank"
                className='flex flex-1 max-w-fit max-h-fit rounded-md p-2 outline-1 items-center gap-2 hover:outline-blue-500  hover:text-blue-500'
            >
                <GithubIcon width={32} height={32} />
                <p className='font-semibold font-mono'>Github</p>
            </a>
        </div>
    );
}