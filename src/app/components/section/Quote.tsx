import React from "react";

const Quote = () => {
  return (
    <div
      className="flex w-full min-h-[400px] bg-cover bg-center items-center justify-center text-white font-bold text-center mt-20"
      style={{ backgroundImage: "url('/img/quote.png')" }}
    >
      <div className="flex justify-center items-center">
        <p className="text-2xl">
          «Солнечная электростанция — идеальное вложение средств в свою
          энергонезависимость и пассивный доход напиши свою цитату»
        </p>
      </div>
    </div>
  );
};

export default Quote;
