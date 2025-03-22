import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-green-900 min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;