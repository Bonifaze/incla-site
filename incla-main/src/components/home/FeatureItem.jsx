import React from "react";

const FeatureItem = ({ title, content, Icon, className }) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
      className={`flex-1 h-64 md:h-full ${className} bg-incla-purple rounded-lg flex flex-col py-10 items-center justify-between gap-5`}
    >
      <Icon />
      <div className="flex flex-col gap-2.5 items-center px-9 md:max-lg:px-3 lg:px-5 mb-5">
        <h3 className="text-white font-bold text-lg lg:text-xl text-center 2xl:text-3xl">{title}</h3>
        <p className="text-sm lg:text-base text-white font-medium text-center 2xl:text-xl 2xl:font-normal">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
