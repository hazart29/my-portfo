import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const ProjectButton: React.FC = () => {
  return (
    <Button
      variant="outline"
      className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 hover:text-purple-200 flex items-center gap-2"
    >
      Projects <ArrowRight className="w-4 h-4" />
    </Button>
  );
};

export default ProjectButton;