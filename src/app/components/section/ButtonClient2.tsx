"use client";

import React from "react";
import Button from "../ui/Button";

const ButtonClient2 = ({ name }: { name: string }) => {
  const handleButton = () => {
    alert("order");
  };
  return (
    <div className="absolute inset-0 flex  justify-center text-white text-xl font-semibold text-center p-6">
      <Button name={name} handleClick={handleButton} />
    </div>
  );
};

export default ButtonClient2;
