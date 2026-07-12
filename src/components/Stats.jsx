import React from "react";
import SectionWrapper from "./SectionWrapper";
import {
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
  FaJava,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode size={35} className="text-blue-600" />,
    number: "150+",
    title: "LeetCode Problems",
  },
  {
    icon: <FaProjectDiagram size={35} className="text-green-600" />,
    number: "1",
    title: "Major Project",
  },
  {
    icon: <FaLaptopCode size={35} className="text-orange-500" />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <FaJava size={35} className="text-red-500" />,
    number: "1+",
    title: "Years Learning",
  },
];

const Stats = () => {
  return (
    <SectionWrapper>
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((item) => (
              <div
                key={item.title}
                className="
bg-white
rounded-xl
shadow-lg
p-6
hover:-translate-y-3
hover:scale-105
hover:shadow-2xl
transition-all
duration-300
"            >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>

                <h2 className="text-4xl font-bold text-gray-800">
                  {item.number}
                </h2>

                <p className="text-gray-500 mt-2">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Stats;