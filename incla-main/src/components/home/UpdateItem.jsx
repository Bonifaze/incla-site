import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../button/PrimaryButton";

const UpdateItem = ({ image, category, title, content, href, className}) => {
  return (
    <div className={`flex-1 h-fit ${className} flex flex-col gap-5 p-5 my-5`}>
      <Image
        width={800}
        height={800}
        alt="Image"
        src={image}
        className="w-full h-full max-h-[200px] object-cover object-top"
      />
      <div className="flex flex-col gap-3.5">
        <p className="text-incla-purple text-xs lg:text-sm 2xl:text-xl">{category}</p>
        <h3 className="font-bold text-lg lg:text-xl 2xl:text-3xl">{title}</h3>
        <p className="text-sm lg:text-baseleading-relaxed md:max-lg:text-justify 2xl:text-2xl">
          {content}
        </p>
        <Link href={href}>
            <PrimaryButton className={`w-full lg:w-fit bg-incla-purple/90 hover:bg-incla-purple px-3 py-2 mt-2 2xl:h-16`}
                           textClass={'lg:!text-sm 2xl:!text-xl'}>Read more </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;