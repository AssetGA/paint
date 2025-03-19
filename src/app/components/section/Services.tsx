import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">
        Почему выбирают цифровую роспись?
      </h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col pr-10">
          <ul className="list-disc space-y-5">
            <li>
              «Уникальность»: Каждый проект создается индивидуально, под ваш
              вкус и стиль.
            </li>
            <li>
              «Эстетика»: Объемные текстуры и узоры добавляют глубину и характер
              любому помещению.
            </li>
            <li>
              «Долговечность»: используем качественные материалы, устойчивые к
              износу и внешним воздействиям. Ухаживайте за готовым изображением
              с легкостью.
            </li>
            <li>
              «Широкие возможности»: От минималистичных узоров до сложных
              художественных композиций — реализуем любые идеи.
            </li>
            <li>
              «Безопасность»: Специальные УФ-краски не токсичны, не имеют
              запаха, безопасны для людей и животных.
            </li>
          </ul>
        </div>
        <div className="relative w-full h-[500px]">
          {/* Фоновое изображение */}
          <Image
            src="/img/fone-service.webp"
            alt="картина на стену"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
