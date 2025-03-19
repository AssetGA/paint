import Image from "next/image";
import React from "react";

const Usefull = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">Где это применимо?</h1>
      <div className="grid grid-cols-2 ">
        <div className="relative w-full h-[500px]">
          {/* Фоновое изображение */}
          <Image
            src="/img/fone-service.png"
            alt="картина на стену"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />

          {/* Затемнение фона (опционально) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Текст по центру изображения */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center p-6">
            <p>Добавьте фото </p>
          </div>
        </div>
        <div className="flex flex-col pr-10">
          <ul className="mx-10 list-disc space-y-5">
            <li>
              Жилые интерьеры: Акцентные стены в гостиных, спальнях, кухнях.
            </li>
            <li>
              Коммерческие помещения: Офисы, рестораны, магазины, выставочные
              залы.
            </li>
            <li>Общественные помещения: Университеты, школы, детские сады. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Usefull;
