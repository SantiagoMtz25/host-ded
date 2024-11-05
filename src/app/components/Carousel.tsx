"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const iconMap: string[] = ["/icons/faArrowLeft.svg", "/icons/faArrowRight.svg"];

interface CarouselProps {
  images: string[];
  title: string;
  description: string;
}

const Carousel = ({ images, title, description }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 8000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="relative max-h-[60vh] w-full flex items-center justify-center overflow-hidden shadow-md rounded-2xl">
      <button
        onClick={prevImage}
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-slate-500/60 px-3 py-2 rounded-full z-10"
      >
        <Image src={iconMap[0]} alt="Previous Image" width={28} height={28} />
      </button>

      <div
        className="flex min-h-[70vh] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 md:px-10 pb-10 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(145,145,145,0.5) 100%, rgba(255,255,255,0) 100%), url(${images[currentIndex]})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-2 text-left sm:w-3/4 md:w-3/4 lg:w-3/5 mb-4 ml-8">
          <h1 className="text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight tracking-tight">
            {title}
          </h1>
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            {description}
          </h2>
        </div>
      </div>

      <button
        onClick={nextImage}
        className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-slate-500/60 px-3 py-2 rounded-full z-10"
      >
        <Image src={iconMap[1]} alt="Next Image" width={28} height={28} />
      </button>
    </div>
  );
};

export default Carousel;