import { works } from "@/app/api/works";
import Image from "next/image";
import React from "react";

type Props = {};

const Galery = (props: Props) => {
  const images = [
    "/img/foto7.jpg",
    "/img/foto8.jpg",
    "/img/foto9.jpg",
    "/img/foto10.jpg",
    "/img/foto11.jpg",
    "/img/foto12.jpg",
    "/img/foto13.jpg",
    "/img/foto14.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {works.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={src.imageUrl}
              alt={`image-${index}`}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
