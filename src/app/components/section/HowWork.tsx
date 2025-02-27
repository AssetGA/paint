import Image from "next/image";
import React from "react";
import ButtonClient from "./ButtonClient";

const HowWork = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="py-10 text-2xl uppercase">
        5 шагов реализовать задуманное
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
            <p>
              Мы просчитываем более 10- 15 вариантов солнечной станции на Вашем
              участке, чтобы предложить Вам один наиболее выгодный.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">Заключение договора</h2>
            <p>
              Заключается договор, благодаря которому, вы будете застрахованы от
              некачественного оборудования и срыва сроков.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">Монтаж СЭС</h2>
            <p>
              Наши специалисты производят монтаж солнечных батарей, проводки и
              инверторов, при необходимости изготавливают опоры.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Получение дохода от государства{" "}
            </h2>
            <p>
              После подключения к «Зеленому тарифу», вы получаете доход за
              каждый киловатт, выработанный на Вашей солнечной электростанции по
              зафиксированному тарифу на момент подключения.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[800px]">
          {/* Фоновое изображение */}
          <Image
            src="/img/rectangle.png"
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
