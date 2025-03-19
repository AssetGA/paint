import React from "react";

const Quote = () => {
  return (
    <div
      className="flex w-full min-h-[400px] bg-cover bg-center items-center justify-center text-black font-bold text-center mt-20"
      style={{ backgroundImage: "url('/img/quote.webp')" }}
    >
      <div className="flex justify-center items-center">
        <p className="text-2xl backdrop-blur-xl	p-10">
          Добавьте характер вашему пространству – с рисунками, созданными для
          вас!
        </p>
      </div>
    </div>
  );
};

export default Quote;
