import Image from "next/image";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: "/images/work1.jpg",
      description: "A beautiful wall art design.",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "/images/work2.jpg",
      description: "Modern interior wall painting.",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "/images/work3.jpg",
      description: "Custom mural for a cafe.",
    },
    {
      id: 4,
      title: "Project 4",
      imageUrl: "/images/work4.jpg",
      description: "Office wall decoration.",
    },
    {
      id: 5,
      title: "Project 5",
      imageUrl: "/images/work1.jpg",
      description: "A beautiful wall art design.",
    },
    {
      id: 6,
      title: "Project 6",
      imageUrl: "/images/work2.jpg",
      description: "Modern interior wall painting.",
    },
    {
      id: 7,
      title: "Project 7",
      imageUrl: "/images/work3.jpg",
      description: "Custom mural for a cafe.",
    },
    {
      id: 8,
      title: "Project 8",
      imageUrl: "/images/work4.jpg",
      description: "Office wall decoration.",
    },
  ];
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
              <button className="absolute border rounded-sm px-3 py-2 right-3 items-center justify-center hover:border-2 hover:border-blue-300  text-center">
                Хочу так же!
              </button>
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
