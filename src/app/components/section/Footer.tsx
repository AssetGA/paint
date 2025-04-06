import React from "react";
import ButtonClient2 from "./ButtonClient2";

const Footer = () => {
  return (
    <div
      className="flex w-full min-h-[600px] bg-cover bg-center justify-center text-white font-bold text-center p-6 mt-20"
      style={{ backgroundImage: "url('/img/foto20.jpg')" }}
    >
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-2 gap-5 pt-20">
          <div className="w-full bg-black/40 p-10">
            <h1 className="mb-10 uppercase">Оставить заявку</h1>
            <label className="block mb-2">
              Имя:
              <input
                type="text"
                className="w-full p-2 rounded-sm mt-1 bg-transparent border-b-2"
                placeholder="Ваше имя"
              />
            </label>
            <label className="block mb-2 left-0">
              Телефон:
              <input
                type="tel"
                className="w-full p-2 rounded-sm mt-1 bg-transparent border-b-2"
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <div className="relative flex justify-end">
              <ButtonClient2 name="Напиши перезвоним" />
            </div>
          </div>
          <div className="w-full hover:bg-black/50 p-10">
            <h1 className="mb-10 uppercase">Контакты</h1>
            <div className="flex justify-start">
              <ul className="space-y-4">
                <li>
                  <p>Центральный офис: </p>
                  <span>г. Москва, ул,Гоголя 13, 1й этаж</span>
                </li>
                <li>
                  <p>Представительство в Киеве: </p>
                  <span>г. Киев, ул. Є. Коновальця, 103 оф. 410</span>
                </li>
                <li>
                  <p>Контакты:</p>

                  <span>+77477770600, +77756999475</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
