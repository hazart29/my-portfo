// components/Header.tsx
'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    const navLinks = useMemo(() => [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' },
    ], []);

    const whatsappNumber = '+6282008718112'; // Ganti dengan nomor WhatsApp Anda
    const whatsappMessage = 'Halo, saya ingin berbicara.'; // Pesan default (opsional)

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <header className="container py-6">
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
                                    className={`text-gray-300 hover:text-white transition-colors ${pathname === link.path ? 'text-white' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link
                    className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 hover:text-emerald-200 px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
                    href={whatsappLink} // Tambahkan properti href
                    target="_blank" // Buka di tab baru
                    rel="noopener noreferrer" // Tambahkan rel untuk keamanan
                >
                    Let&apos;s Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;