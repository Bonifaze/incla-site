import React from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

const UserLogin = () => {
  return (
    <div className="bg-login-bg bg-[#66165A]/85 bg-blend-overlay bg-cover bg-center bg-no-repeat h-screen w-full relative">
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 text-white relative h-screen">
          <div className="p-6 md:p-10">
            <Image 
              height={80}
              width={80}
              alt="logo"
              src={'/image/logo2.png'}
              className="max-md:w-12 max-md:h-12 lg:h-[80px] lg:w-[80px] rounded-full"
            />
            <h1 className="text-4xl lg:text-5xl mt-10 lg:mt-20 mb-1 lg:mb-3 2xl:text-6xl">INCLA </h1>
            <p className="text-nowrap lg:text-xl 2xl:text-3xl">Education Management System</p>
            <div className="flex flex-col md:flex-row gap-7 md:gap-10 mt-24 md:mt-16">
              <Link href={'/auth/lecturerLogin'}><PrimaryButton className={'bg-white border-2 border-white w-full hover:bg-zinc-100 hover:scale-95'} textClass={'!text-black text-xs lg:text-sm 2xl:text-lg text-nowrap'}>LECTURER LOGIN</PrimaryButton></Link>
              <Link href={'/auth/studentLogin'}>
                <PrimaryButton className={'bg-transparent border-2 border-white w-full hover:bg-incla-purple hover:scale-95'} textClass={'text-xs lg:text-sm 2xl:text-lg text-nowrap'}>STUDENT LOGIN</PrimaryButton>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-20 hidden md:block">
            <div>
              <Image 
              width={350}
              height={400}
              alt="holding phone"
              src={'/image/login-phone.png'}
              className="md:max-lg:w-[150px] md:max-lg:h-[200px] xl:w-[400] xl:h-[500] 2xl:w-[600] 2xl:h-[700]"
              />
            </div>
          </div>
        </div>
        <div className="bg-white absolute bottom-0 left-0 w-screen">
          <div className="w-screen h-fit p-6 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            <Link href={'/auth/login'}><PrimaryButton className={'w-full md:w-fit hover:scale-95'} textClass={'text-xs lg:text-sm 2xl:text-lg'}>ADMIN LOGIN</PrimaryButton></Link>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default UserLogin;
