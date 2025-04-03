import Image from "next/image";
import React from "react";

const FormField = ({
  value,
  handleChange,
  Icon,
  containerStyles,
  textStyles,
  iconSize,
  image,
  visible,
  setVisible,
  type,
  iconStyles,
  title,
  PwdEye
}) => {
  return (
    <div
      className={` flex flex-row items-center space-x-2 px-4 bg-white text-[#2b2b2b] focus-within:border-2 focus-within:border-[#e68002] rounded-xl py-2.5 ${containerStyles}`}
    >
      {Icon && (
        <span
          onClick={() => {
            if (setVisible) return setVisible(!visible);
          }}
          className={iconStyles}
        >
          <Icon size={iconSize || 20} />
        </span>
      )}

      {image && (
        <div
          onClick={() => {
            if (setVisible) return setVisible(!visible);
          }}
          className="h-4 w-4 overflow-hidden"
        >
          <Image
            src={image}
            className="w-full h-full object-cover"
            width={300}
            height={300}
            alt="Wallet"
          />
        </div>
      )}

      <input
        placeholder={title}
        className={`w-full h-full py-1 px-2 focus:outline-0 text-lg ${textStyles}`}
        type={type}
        value={value}
        onChange={handleChange}
      />

      {PwdEye && (
        <span
          onClick={() => {
            if (setVisible) return setVisible(!visible);
          }}
          className={iconStyles}
        >
          <PwdEye size={iconSize || 20} />
        </span>
      )}
    </div>
  );
};

export default FormField;
