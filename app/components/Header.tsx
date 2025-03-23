'use client'; // Penting untuk menggunakan usePathname

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';

const Header: React.FC = () => {
    const pathname = usePathname();

    const navLinks = useMemo(() => [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' },
    ], []);

    return (
        <header className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white">
                    MM29.
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`text-gray-300 hover:text-white transition-colors ${pathname === link.path ? 'text-white' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button
                    variant="outline"
                    className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 hover:text-emerald-200"
                >
                    Let&apos;s Talk
                </Button>
            </div>
        </header>
    );
};

export default Header;