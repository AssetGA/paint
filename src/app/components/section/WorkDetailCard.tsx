"use client";
import { works } from "@/app/api/works";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type WorkDetailProps = {};

const WorkDetailCard = () => {
  const { id } = useParams();

  const findWork = works.find((elem) => elem.id === Number(id));
  console.log("findwork", findWork);

  const minus =
    Number(id) === 1 ? String(works.length) : String(Number(id) - 1);

  const add = Number(id) === 8 ? "1" : String(Number(id) + 1);
  console.log("minus", minus);
  return (
    <div className="mx-auto mt-5 bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="flex justify-between my-10">
        <div className="flex items-center">
          <Link
            href={`/${minus}`}
            className="py-4 px-6 rounded-lg bg-slate-200 hover:bg-slate-300 m-5"
          >
            предыдущий
          </Link>
        </div>

        <div className="relative w-full h-[600px]">
          <Image
            src={findWork !== undefined ? findWork?.imageUrl : works[0]}
            alt={findWork?.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center">
          <Link
            href={`/${add}`}
            className="py-4 px-6 rounded-lg bg-slate-200 hover:bg-slate-300 m-5"
          >
            следующий
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{findWork?.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {findWork?.description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="py-4 px-6 bg-slate-100 hover:bg-slate-300 rounded-lg">
            назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailCard;
