'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
    image_one: string, 
    image_two: string,
}

const ProfileImageSwitcher: React.FC<ProfileImageProps> = ({image_one, image_two}) => {
  const [currentImage, setCurrentImage] = useState('/profile.jpg');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImage(prev => 
          prev === `${image_one}` ? `${image_two}` : `${image_one}`
        );
        setIsTransitioning(false);
      }, 300); 
      
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Image
        src={currentImage}
        alt="profile image"
        height={30}
        width={175}
        className={`rounded-lg transition-opacity duration-600 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default ProfileImageSwitcher;