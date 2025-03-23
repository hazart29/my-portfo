import React from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white">
          MM29.
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </li>
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