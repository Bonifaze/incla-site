import React from "react";
import UpdateItem from "./UpdateItem";
import { latestUpdate } from "@/data/nav";

const LatestUpdates = () => {
    return (
        <div className="w-full h-full bg-incla-blue md:max-lg:px-10 lg:px-20 py-32 flex-col items-center">
            <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
                <h1 className="text-white text-center text-xl lg:text-3xl -mt-10 md:mt-0 font-semibold 2xl:text-4xl">Latest updates</h1>
                <div className="md:grid md:grid-cols-3 mt-10">
                    {latestUpdate.slice(-3).map((value, index) => (
                        <UpdateItem 
                            className={'!text-[#fffffe]'}
                            key={index}
                            {...value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default LatestUpdates;