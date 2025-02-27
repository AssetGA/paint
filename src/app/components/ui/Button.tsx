"use client";

import Image from "next/image";
import React from "react";

interface ButtonProps {
  name: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, handleClick }) => {
  return (
    <div className="flex flex-row justify-center my-20">
      <button
        className="flex justify-center w-[55px] h-[55px] border border-white border-3 rounded-full hover:bg-white"
        onClick={handleClick}
      >
        <Image src={"/img/arrow.svg"} width={30} height={10} alt="arrow" />
      </button>
      <p className="py-5 ml-5 -translate-x-6">{name}</p>
    </div>
  );
};

export default Button;
