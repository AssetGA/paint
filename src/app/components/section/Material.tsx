import Image from "next/image";
import React from "react";

const Material = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">
        На каких материалах мы работаем?
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col pr-10">
          <ul className="list-disc space-y-5">
            <li>
              *Стены* (жилые и офисные помещения, общественные зоны) Украсьте
              жилые, офисные или общественные пространства объемными узорами,
              текстурами или изображениями.
            </li>
            <li>
              *Камень* (натуральный и искусственный камень, декор для ландшафта)
              Создайте уникальный декор для фасадов, ландшафта или интерьера.
            </li>
            <li>
              *Стекло* (окна, перегородки, зеркала, столешницы) добавьте
              изысканности окнам, перегородкам, зеркалам или столешницам.
            </li>
            <li>
              *Фасады дверей* (межкомнатные двери, шкафы-купе, шкафы) Сделайте
              межкомнатные двери и шкафы запоминающимися.
            </li>
            <li>
              *Ролл шторы* (индивидуальный дизайн для затемнения и украшения
              окон) Сочетайте функциональность с эстетикой, создавая
              индивидуальный дизайн.
            </li>
          </ul>
        </div>
        <div className="relative w-full h-[500px]">
          {/* Фоновое изображение */}
          <Image
            src="/img/foto3.jpg"
            alt="картина на стену"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />

          {/* Затемнение фона (опционально) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Текст по центру изображения */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center p-6">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
