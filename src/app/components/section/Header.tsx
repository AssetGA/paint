import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="flex w-full min-h-[900px] bg-cover bg-center items-center justify-center text-white font-bold text-center p-6"
      style={{ backgroundImage: "url('/img/fone-header.png')" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-4xl uppercase py-10">Ассет компани</div>
          <h1 className="text-3xl py-10">
            Превращаем ваши стены в произведения искусства с помощью современных
            технологий!
          </h1>
          <p>
            предлагаем уникальные услуги по печати на стенах с использованием
            высококачественных материалов и оборудования.
          </p>
          <div className="flex flex-row justify-center my-20">
            <button className="flex justify-center w-[55px] h-[55px] border border-white border-3 rounded-full hover:bg-white">
              <Image
                src={"/img/arrow.svg"}
                width={30}
                height={10}
                alt="arrow"
              />
            </button>
            <p className="py-5 ml-5">Записаться на консультацию</p>
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
