'use client'
import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  '/image/slideshow/1N0A7576.webp',
  '/image/slideshow/1N0A7623.webp',
  '/image/slideshow/1N0A7613.webp',
  '/image/slideshow/1N0A7645.webp',
  '/image/slideshow/1N0A7611.webp',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Start with first image loaded

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        // Preload next image
        setLoadedImages(prev => new Set([...prev, nextIndex]));
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Preload the next image when current changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setLoadedImages(prev => new Set([...prev, nextIndex]));
  }, [currentIndex]);

  return (
    <div
      className={`h-[700px] w-full bg-no-repeat relative bg-center flex items-center justify-center`}
    >
      {images.map((src, i) => {
        // Only render images that should be loaded
        if (!loadedImages.has(i) && Math.abs(i - currentIndex) > 1) {
          return null;
        }
        
        return (
          <Image
            key={i}
            src={src}
            alt={`Institute of Consecrated Life in Africa - Slide ${i + 1}`}
            fill
            sizes="100vw"
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={i === 0}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        );
      })}
      <div className="absolute inset-0 bg-[#A041915C] bg-opacity-40"></div>
      <div className="relative flex flex-col items-center gap-5 md:gap-20 mt-10 md:mt-16 max-w-screen max-sm:max-w-[640px] max-md:max-w-3xl max-lg:max-w-5xl max-xl:max-w-7xl max-2xl:max-w-screen-2xl mx-auto">
        <h4 className="text-2xl md:text-3xl 2xl:text-4xl text-center font-medium text-white">
          Welcome To
        </h4>

        <h2 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white text-center mx-5 md:mt-10 mt-4">
          Institute of Consecrated Life In <br className="hidden md:block" /> Africa
        </h2>
        <div className="flex items-center gap-5 mx-5">
          {/* Wrap button in <a> for external link */}
          <a
            href="https://portal.InCLA.edu.ng/admissions/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton
              className={"min-w-fit !px-5 2xl:!h-20"}
              textClass={'!text-sm md:!text-base 2xl:!text-2xl'}
            >
              Apply Now
            </PrimaryButton>
          </a>

          <PrimaryButton
            className={"bg-white min-w-fit !px-5 2xl:!h-20"}
            textClass={"!text-black !text-sm md:!text-base 2xl:!text-2xl"}
          >
            Learn more
          </PrimaryButton>
        </div>
        <div className="flex items-center gap-1 mt-10">
          <button>
            <Image
              src={"/image/arrow-left.png"}
              width={30}
              height={30}
              className="w-8 h-8"
              alt="arrow-left"
              onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)}
            />
          </button>
          <button>
            <Image
              src={"/image/arrow-left.png"}
              width={30}
              height={30}
              className="w-8 h-8 rotate-180"
              alt="arrow-left"
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
