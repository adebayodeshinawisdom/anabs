// Carousel.js
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    '/images/road6.jpg',
    '/images/road7.jpg',
    '/images/road2.jpg',
    '/images/roadnew.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval as needed (e.g., 3000ms or 3 seconds)

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            
            {/* <button className='bg-orange-500 absolute my-[500px] mx-[500px] rounded-lg w-[15%] h-[7%] text-black'>Mission and Vision</button> */}
            <Image src={image} className="w-full object-contain h-[400px] md:h-[700px]" width={900} height={500} alt={`Team Member ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full gap-2 absolute bottom-0">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`btn btn-xs ${index === currentIndex ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
