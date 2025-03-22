import React from 'react';
import Button from './Button';

const HireMeButton: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30 hover:text-pink-200"
    >
      Hire Me
    </Button>
  );
};

export default HireMeButton;