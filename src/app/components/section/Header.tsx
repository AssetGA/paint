import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="flex w-full min-h-[900px] bg-cover bg-center items-center justify-center text-black font-bold text-center p-6"
      style={{ backgroundImage: "url('/img/fone-header.webp')" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <div className="text-4xl uppercase py-10">Assets company</div>
          <div className="backdrop-blur-md mx-96">
            <h1 className="text-3xl py-10">
              Преображайте пространства с роботом-художником!
            </h1>
            <p className="w-full">
              Добро пожаловать в мир, где технологии и творчество объединяются,
              чтобы оживить ваш интерьер! Наша уникальная услуга цифровой печати
              3D принтером позволяет превратить обычные поверхности в
              произведения искусства, функциональные элементы декора или яркие
              акценты, которые подчеркнут ваш стиль.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row justify-center my-20 hover:bg-white/70 p-5 rounded-sm">
              <button className="flex justify-center w-[55px] h-[55px] border border-white bg-green-300 border-3 rounded-full hover:bg-white">
                <Image
                  src={"/img/arrow.svg"}
                  width={30}
                  height={10}
                  alt="arrow"
                />
              </button>

              <p className="py-5 ml-5 text-black z-20">Напишите перезвоним</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <Image
            src={"/img/instagram.svg"}
            width={30}
            height={10}
            alt="instagram"
            className="hover:bg-red-400 rounded-md"
          />
          <Image
            src={"/img/telegram.svg"}
            width={30}
            height={10}
            alt="telegram"
            className="hover:bg-blue-400 rounded-md"
          />
          <Image
            src={"/img/whatsapp.svg"}
            width={30}
            height={10}
            alt="whatsapp"
            className="hover:bg-green-400 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
