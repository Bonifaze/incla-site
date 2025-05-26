import React from 'react'
import PrimaryButton from '../button/PrimaryButton'

const HomeContact = () => {
  return (
    <div className='p-5 md:p-20 lg:p-40 flex flex-col items-center justify-center bg-contact-image bg-cover bg-center bg-no-repeat bg-black/40 bg-blend-overlay'>
      <div className='flex flex-col items-center w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto'>
        <p className='text-center xl:max-w-[65%] text-white text-sm md:max-lg:text-lg lg:text-xl 2xl:text-3xl 2xl:leading-relaxed'>For additional information regarding the institute, please email or call us. You may also fill the contact form on the website.</p>
        <PrimaryButton className={'mt-10 2xl:!h-20'} textClass={'!text-sm lg:!text-base !font-normal 2xl:!text-xl'}>Contact us</PrimaryButton>
      </div>
    </div>
  )
}

export default HomeContact