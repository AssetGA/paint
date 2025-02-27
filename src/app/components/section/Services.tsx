import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">Услуги</h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col pr-10">
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Полный комплект солнечной электростанции
            </h2>
            <p>
              74 модели солнечных панелей, 31 модель инверторов, провода с
              повышенной устойчивостью к атмосферным условиям, качественные
              соединители, контроллеры зарядов и надежные гелевые аккумуляторы с
              увеличенным сроком службы.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Подбор оборудования с максимальной производительностью{" "}
            </h2>
            <p>
              Подбираем солнечные панели с учетом расположения Вашего дома,
              количеством прямого и рассеянного излучения, для того, чтобы Ваша
              электростанция - вырабатывала максимальное количество
              электроэнергии и окупилась как можно быстрее.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Подбираем солнечные панели с учетом расположения
            </h2>
            <p>
              Вашего дома, количеством прямого и рассеянного излучения, для
              того, чтобы Ваша электростанция - вырабатывала максимальное
              количество электроэнергии и окупилась как можно быстрее.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">
              Помощь в подключении к «Зеленому тарифу»
            </h2>
            <p>
              Всю бюрократическую процедуру по подключению Вашей электростанции
              к «Зеленому тарифу», мы берем на себя, в том числе по увеличению
              договорной мощности вашего дома. При заказе солнечной
              электростанции эта услуга абсолютно бесплатна.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[800px]">
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
      </div>
    </div>
  );
};

export default Services;
