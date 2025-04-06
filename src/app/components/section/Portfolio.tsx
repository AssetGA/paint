import { works } from "@/app/api/works";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-16">
      <h1 className="py-10 text-2xl uppercase">Наши работы</h1>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-56"
            >
              <Image
                src={work.imageUrl}
                alt={work.title}
                className="w-full object-cover"
                fill
              />
              <Link
                href={{
                  pathname: `/${work.id}`,
                }}
                className="absolute border rounded-sm px-3 py-2 right-3 items-center justify-center hover:border-2 hover:bg-white/50 hover:border-blue-300  text-center my-2"
              >
                Хочу так же!
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
