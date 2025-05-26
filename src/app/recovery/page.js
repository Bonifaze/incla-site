'use client'
import { useState } from "react";
import { UserIcon } from "@/components/icon/user-icon";
import { LoginIcon } from "@/components/icon/login-icon";
import Link from "next/link";
import Image from "next/image";

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  }

    return (
        <div className="bg-login-bg bg-[#66165A]/85 bg-blend-overlay bg-cover bg-center bg-no-repeat h-screen w-full relative">
            <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
            <div className="absolute top-7 left-10">
                    <Image 
                    height={80}
                    width={80}
                    alt="logo"
                    src={'/image/logo2.png'}
                    className="max-md:w-12 max-md:h-12 lg:h-[80px] lg:w-[80px] rounded-full"
                    />
                </div>
                <div className="flex h-screen justify-center items-center">
                    <div className="bg-white flex flex-col p-10 pb-20 rounded-lg w-fit h-fit text-center">
                        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">AICLA</h1>
                        <p className="my-5 font-semibold">Password Recovery</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative flex w-full h-full bg-[#96d6f2] p-3 rounded-lg gap-2">
                                <input type="email" id="email" name="email" value={email} required className="bg-[#96d6f2] outline-none" placeholder="Enter your email address" />
                                <UserIcon/>
                            </div>
                            
                            <button type="submit" disabled={isLoading} className="bg-incla-blue px-4 text-white py-2 w-full rounded-lg">{isLoading ? 'sending...' : "RECOVER"}</button>
                        </form>
                        <div className="w-full flex mt-4">
                            <Link href='/userLogin' className="hover:underline text-sm xl:text-base 2xl:text-lg w-full text-right flex gap-[2px] items-center justify-end"><LoginIcon />Return to Login Page</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default PasswordRecovery;