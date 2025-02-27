"use client";

import React from "react";
import Button from "../ui/Button";

const ButtonClient = ({ name }: { name: string }) => {
  const handleButton = () => {
    alert("order");
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center p-6">
      <Button name={name} handleClick={handleButton} />
    </div>
  );
};

export default ButtonClient;
