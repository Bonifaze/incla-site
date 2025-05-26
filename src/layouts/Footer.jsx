import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Iconic from '@/components/icon/Iconic'
import PrimaryButton from '@/components/button/PrimaryButton'

const Footer = () => {
    return(
        <div className='bg-black w-full'>
            <div className='p-5 lg:p-20 text-white flex flex-col md:grid md:max-xl:grid-cols-3 xl:grid-cols-5 gap-5 bottom-0 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto'>
                <div className='flex flex-col text-sm w-full gap:3 md:gap-5 2xl:gap-10 2xl:text-lg 2xl:leading-none xl:text-base'>
                    <Image 
                        width={100}
                        height={100}
                        alt='logo'
                        src={'/image/logo.png'}
                        className='flex items-center 2xl:w-36'
                    />
                    <div className='flex flex-col gap-2'>
                        <Link href={'https://www.info@aicla.org.ng'}>
                            <p>info@aicla.org.ng</p>
                        </Link>
                        <Link href={'tel:+2348064758374'}>
                            <p>(234)- 80 6475 8374</p>
                        </Link>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width={30}
                                    height={30}
                                    alt="incla-facebook"
                                    src="/image/social-icons/Facebook.png"
                                    className="2xl:w-12 lg:w-8 md:max-lg:w-7 xl:w-6"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width={30}
                                    height={30}
                                    alt="incla-instagram"
                                    src="/image/social-icons/Instagram.png"
                                    className="2xl:w-12 lg:w-8 md:max-lg:w-7 xl:w-6"
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={30}
                                    height={30}
                                    alt="incla-twitterX"
                                    src="/image/social-icons/TwitterX.png"
                                    className="2xl:w-12 lg:w-8 md:max-lg:w-7 xl:w-6"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    width={30}
                                    height={30}
                                    alt="incla-Linkedin"
                                    src="/image/social-icons/LinkedIn.png"
                                    className="2xl:w-12 lg:w-8 md:max-lg:w-7 xl:w-6"
                                />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col text-sm w-full gap:3 md:gap-5 2xl:gap-10 2xl:text-lg 2xl:leading-none xl:text-base font-light'>
                    <h1 className='font-normal 2xl:text-2xl'>INFORMATION</h1>
                    <Link href={'/about'}><Iconic text = '>>About us'/></Link>
                    <Link href={'/certificate'}><Iconic text = '>>Course'/></Link>

                    
                </div>
                <div className='flex flex-col text-sm w-full gap:3 md:gap-5 2xl:gap-10 2xl:text-lg 2xl:leading-none xl:text-base font-light'>
                    <h1 className='font-normal 2xl:text-2xl'>STUDENT HELP</h1>
                    <Link href={'/admissionReq'}><Iconic text = '>>Admission requirement'/></Link>
                    <Link href={'/academicPro'}><Iconic text = '>>Post graduate studies'/></Link>
                </div>
                <div className='flex flex-col text-sm w-full gap:3 md:gap-5 2xl:gap-10 2xl:text-lg 2xl:leading-none xl:text-base md:max-xl:mt-20 font-light'>
                    <h1 className='font-normal 2xl:text-2xl'>CONTACT</h1>
                    <p>INCLA, Bwari Area Council, FCT, Abuja</p>
                    <Link href={'tel:+2348064758374'}>
                        <p>Phone: 080 6475 8374</p>
                    </Link>
                    <Link href={'https://www.info@aicla.org.ng'}>
                        <p>Email: info@aicla.org.ng</p>
                    </Link>
                </div>
              {/*
                <div className='flex flex-col text-sm w-full md:max-xl:w-[200%] gap:3 md:gap-5 2xl:gap-10 2xl:text-lg 2xl:leading-none xl:text-base font-light'>
                    <h1 className='font-normal 2xl:text-2xl'>SUBSCRIBE TO GET UPDATES</h1>
                    <p>Pellentesque eu porttitor odio. Nulla diam enim, interdum eu bibendum at, <br /> tempor quis massa. In purus lectus, ultrices.</p>

                    <div className='mt-10'>
                        <p>Email</p>
                        <form action="" method="post" className='flex flex-row gap-3 mt-3'>
                            <input type="email" name="subscribe" id="subscribe" className='rounded-lg text-black p-2 text-sm 2xl:text-lg 2xl:w-96 lg:w-56'/>
                            <PrimaryButton className={'!p-4'}><input type="submit" name='submitButton' value="✔" className='2xl:text-xl 2xl:font-light lg:text-base xl:text-lg text-white'/></PrimaryButton>
                        </form>
                    </div>
                </div>
                */}
            </div>
        </div>
        
    );
};

export default Footer;