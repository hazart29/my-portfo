'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const navLinks = useMemo(() => [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' },
    ], []);

    const whatsappNumber = '+62882008718112';
    const whatsappMessage = 'Halo, saya ingin berbicara.';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="container py-6 relative"> {/* Tambahkan relative ke header */}
            <div className="flex items-center justify-between">
                <button onClick={toggleMenu} className="text-2xl hidden md:flex font-bold text-white">
                    MM29.
                </button>
                <div className="md:hidden"> {/* Hamburger menu untuk mobile */}
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.829z" />
                            ) : (
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                            )}
                        </svg>
                    </button>
                </div>
                <nav
                    ref={menuRef}
                    className={`absolute top-full z-50 left-0 mt-2 bg-gray-800 rounded shadow-md w-full md:w-auto md:static md:bg-transparent md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
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
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let&apos;s Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;