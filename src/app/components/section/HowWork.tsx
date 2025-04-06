import Image from "next/image";
import React from "react";
import ButtonClient from "./ButtonClient";

const HowWork = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="py-10 text-2xl uppercase">
        4 шага реализовать задуманное
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col pr-10">
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">Заявка или звонок</h2>
            <p>
              Оставляете заявку на нашем сайте или связываетесь с нами по
              телефону или в мессенджерах.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Консультация и замер на объекте
            </h2>
            <p>Обсудим ваши идеи и технические требования.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">3D-моделирование</h2>
            <p>Создаем цифровую модель будущего проекта.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">Печать</h2>
            <p>Бережно нанесем изображение на выбранную поверхность.</p>
          </div>
        </div>
        <div className="relative w-full h-[800px]">
          {/* Фоновое изображение */}
          <Image
            src="/img/foto4.jpg"
            alt="картина на стену"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />

          {/* Затемнение фона (опционально) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Текст по центру изображения */}
          <ButtonClient name="Напиши перезвоним" />
        </div>
      </div>
    </div>
  );
};

export default HowWork;
