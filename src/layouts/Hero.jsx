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

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=> (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval)
  }, [])
  return (
    <div
      className={`h-[700px] w-full bg-no-repeat relative bg-center flex items-center justify-center`}
    >
      {images.map((src, i)=>(
        <Image
        key={i}
        src={src}
        alt={`slide ${i}`}
        layout="fill"
        objectFit="cover"
        className={`absolute inset-0 transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100':'opacity-0'}`}
        priority={i === 0}
        />
      ))};
      <div className="absolute inset-0 bg-[#A041915C] bg-opacity-40"></div>
      <div className="relative flex flex-col items-center gap-5 md:gap-20 mt-10 md:mt-16 max-w-screen max-sm:max-w-[640px] max-md:max-w-3xl max-lg:max-w-5xl max-xl:max-w-7xl max-2xl:max-w-screen-2xl mx-auto">
        <h4 className="text-2xl md:text-3xl 2xl:text-4xl text-center font-medium text-white">
          Welcome To
        </h4>

        <h2 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white text-center mx-5 md:mt-10 mt-4">
          Institute of Consecrated Life In <br className="hidden md:block"/> Africa
        </h2>
        <div className="flex items-center gap-5 mx-5">
          <PrimaryButton className={"min-w-fit !px-5 2xl:!h-20"} textClass={'!text-sm md:!text-base 2xl:!text-2xl'}>Apply Now</PrimaryButton>
          <PrimaryButton className={"bg-white min-w-fit !px-5 2xl:!h-20"} textClass={"!text-black !text-sm md:!text-base 2xl:!text-2xl"}>
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
              onClick={()=> setCurrentIndex((prevIndex)=>prevIndex===0 ? images.length-1 : prevIndex -1)}
            />
          </button>
          <button>
            <Image
              src={"/image/arrow-left.png"}
              width={30}
              height={30}
              className="w-8 h-8 rotate-180"
              alt="arrow-left"
              onClick={()=> setCurrentIndex((prevIndex)=> (prevIndex + 1) % images.length)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
