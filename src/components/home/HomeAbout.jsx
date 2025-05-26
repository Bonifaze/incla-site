import React from "react";
import PrimaryButton from "@/components/button/PrimaryButton";

const HomeAbout = () => {
    return (
        <div className="w-full h-fit p-5 md:p-10 bg-incla-grey-200 flex justify-center">
            <div
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040",
                }} 
                className="w-full h-[10%] bg-white rounded-lg flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:max-lg:gap-5 md:p-5 lg:p-14 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto"
            >
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-incla-brown font-bold mb-5 -mt-10 md:mt-0 font-robotoSlab text-lg lg:text-xl 2xl:text-3xl">ABOUT US</h2>
                    <p className="md:leading-loose md:text-lg text-sm lg:text-lg 2xl:text-2xl">INCLA is a unique Institute of
                        Consecrated Life in Africa owned by the Claretian Missionaries. It is an institute that
                        offers specialization in Consecrated life. This institution was conceived for a re-sensitization
                        in the study of Consecrated life, a call to rethink our faith, beliefs, and philosophy of life.</p>
                    <PrimaryButton 
                        style={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                        }} 
                        className={"mt-5 w-full md:w-fit 2xl:!h-20"}
                        textClass={'lg:!text-base 2xl:!text-xl'}
                    >
                        Read More
                    </PrimaryButton>
                </div>
                <div 
                    style={{
                        boxShadow: "0px 4px 4px 0px #00000040",
                    }} 
                    className="w-full h-[200px] md:h-full bg-home-about bg-cover bg-top bg-no-repeat rounded-t-lg md:rounded-lg"
                >
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;