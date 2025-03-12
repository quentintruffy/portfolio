'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import animationData from '../../public/assets/blur.json';

// Import dynamique de Lottie avec SSR désactivé
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const Background = () => {
  // État pour vérifier si nous sommes côté client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si nous ne sommes pas côté client, retourner un div vide ou un fallback
  if (!isClient) {
    return <div className="absolute right-0 left-0 -z-10"></div>;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="absolute right-0 left-0 -z-10"
    />
  );
};
