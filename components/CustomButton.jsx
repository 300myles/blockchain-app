import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  Icon,
  containerStyles,
  textStyles,
  iconSize,
  image,
  func
}) => {
  return (
    <div
    onClick={func}
      className={` flex flex-row items-center justify-center space-x-2 px-4 bg-[#E68002] rounded-lg py-2.5 hover:cursor-pointer ${containerStyles}`}
    >
      {Icon && (
        <span>
          <icon size={iconSize || 20} />
        </span>
      )}

      {image && (
        <div className="h-4 w-4 overflow-hidden">
          <Image
            src={image}
            className="w-full h-full object-cover"
            width={300}
            height={300}
            alt="Wallet"
          />
        </div>
      )}

      <div className={`text-center text-lg ${textStyles}`}>{title}</div>
    </div>
  );
};

export default CustomButton;
