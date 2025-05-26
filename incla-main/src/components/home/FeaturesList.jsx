import React from "react";
import FeatureItem from "./FeatureItem";
import { featureList } from "@/data/nav";

const FeaturesList = () => {
  return (
    <div className="bg-[#F2F2F2] w-full py-20 px-5">
      <div className="sm:grid sm:grid-cols-3 sm:shrink-0 flex flex-col gap-8 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        {featureList.map((value, index) => (
          <FeatureItem
            key={index}
            {...value}
            className={`${index === 1 ? "!bg-[#30ADE5]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
