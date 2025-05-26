import React from 'react';
import { testimonialItem } from '@/data/nav';
import Image from 'next/image';

const Testimonials = () =>{
    return(
        <div className='bg-[#f2f2f2] p-10 md:p-20'>
            <div className='max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto'>
                <h2 className='text-xl lg:text-3xl text-incla-purple text-center font-semibold 2xl:text-5xl'>TESTIMONIALS</h2>
                <div className='flex flex-col lg:grid xl:grid-cols-3 lg:max-xl:grid-cols-2 gap-7 my-20'>
                    {testimonialItem.map((value, index) => (
                        <div 
                            key={index}
                            style={{
                                boxShadow: "0px 4px 4px 0px #00000040",
                            }}
                            className='bg-white flex flex-col p-4 md:p-7 rounded-lg'
                        >
                            <p className='text-sm lg:text-base 2xl:text-xl'>{value.content}</p>
                            <div className='flex mt-7'>
                                <Image 
                                    width={50}
                                    height={50}
                                    alt={`user ${index}`}
                                    src={value.image}
                                />
                                <div className='flex flex-col ml-3 gap-[1px] text-sm lg:text-base 2xl:text-xl'>
                                    <p>{value.name}</p>
                                    <p className='text-[#0000009f]'>{value.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Testimonials;