import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">О нас</h1>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col pr-10">
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">"Почему выбирают нас?"</h2>
            <p>
              Расскажите о вашем опыте, технологиях, которые вы используете, и
              преимуществах работы с вами.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold pt-6 pb-3">Преимущества:</h2>
            <ul>
              <li className="list-disc">Высокое качество печати.</li>
              <li className="list-disc">
                Индивидуальный подход к каждому клиенту.
              </li>
              <li className="list-disc">Быстрые сроки выполнения.</li>
            </ul>
          </div>
        </div>
        <div className="relative w-full h-[800px]">
          <Image
            src="/img/fone-service.png"
            alt="картина на стену"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center p-6">
            <p>Добавьте фото вашей команды, чтобы вызвать доверие.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
