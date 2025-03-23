'use client'
import React, { useEffect } from 'react';

interface DevelopmentAlertProps {
  message?: string; // Pesan opsional, defaultnya adalah pesan standar
}

const DevelopmentAlert: React.FC<DevelopmentAlertProps> = ({
  message = 'Situs web portofolio ini sedang dalam pengembangan menggunakan template. Beberapa fitur mungkin belum berfungsi dengan baik.',
}) => {
  useEffect(() => {
    alert(message);
  }, [message]);

  return null; // Komponen ini tidak merender apa pun ke DOM
};

export default DevelopmentAlert;