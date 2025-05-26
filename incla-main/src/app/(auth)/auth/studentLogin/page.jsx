'use client'
import { useState } from "react";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserIcon } from "@/components/icon/user-icon";
import { LockIcon } from "@/components/icon/lock";
import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";

export default function StudentLogin () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    const handleVisibility = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if(res?.error){
            setError("Invalid email or password")
        } else {
            router.push("/")
        }
        setIsLoading(false);
    };
    return (
        <div className="bg-login-bg bg-[#66165A]/85 bg-blend-overlay bg-cover bg-center bg-no-repeat h-screen w-full">
            <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto relative">
                <div className="absolute top-7 left-5 md:left-10">
                    <Image 
                    height={80}
                    width={80}
                    alt="logo"
                    src={'/image/logo2.png'}
                    className="max-md:w-14 max-md:h-14 lg:h-[80px] lg:w-[80px] rounded-full"
                    />
                </div>
                <div className="flex h-screen justify-center items-center">
                    <div className="bg-white flex flex-col mt-20 md:mt-0 p-5 md:p-10 pb-20 rounded-lg w-fit h-fit text-center">
                        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">AICLA</h1>
                        <p className="my-5 font-semibold">Student Login</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative flex w-full h-full bg-[#96d6f2] p-3 rounded-lg gap-2">
                                <input type="email" id="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value); setError(null);}} required className="bg-[#96d6f2] outline-none" placeholder="Email or Username" />
                                <UserIcon/>
                            </div>
                            <div className="relative flex w-full h-full bg-[#96d6f2] p-3 rounded-lg gap-2">
                                <input type={isPasswordVisible ? 'text' : 'password'} id="password" name="password" value={password} onChange={(e)=> {setPassword(e.target.value); setError(null);}} required className="bg-[#96d6f2] outline-none" placeholder="Password" />
                                <button type='button' onClick={handleVisibility}><LockIcon /></button>
                            </div>
                            
                            <button type="submit" disabled={isLoading} className="bg-incla-blue px-4 text-white py-2 w-full rounded-lg">{isLoading ? 'Logging in...' : "LOGIN"}</button>
                        </form>
                        <div className={`${error ? 'block' : 'hidden'} bg-red-100 text-red-500 p-2 mb-4 rounded border border-red-300 mt-3`}>{error}</div>
                        <div className="w-full flex mt-4">
                            <Link href='/recovery' className="hover:underline text-sm xl:text-base 2xl:text-lg w-full text-right">Forgot password?</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}