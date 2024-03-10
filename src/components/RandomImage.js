import React, { useState, useEffect } from 'react';

const RandomDogImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error('Error fetching random dog image:', error);
      }
    };

    fetchRandomDogImage();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}
    </div>
  );
};

export default RandomDogImage;
