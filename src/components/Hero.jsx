import SectionWrapper from "./SectionWrapper";
import React from "react";

const Hero = () => {
  return (
    <SectionWrapper>
      <section
        id="home"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 font-semibold mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
              Sunny <span className="text-blue-600">Raj</span>
            </h1>

            <h2 className="text-2xl md:text-4xl mt-5 font-semibold text-slate-700">
              Java Full Stack Developer
            </h2>

            <p className="text-gray-600 text-lg mt-8 leading-8 max-w-xl">
              Passionate about building scalable applications using Java,
              Spring Boot, React, and SQL. I enjoy solving real-world
              problems and continuously improving my Data Structures &
              Algorithms skills.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                Java
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Spring Boot
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                MySQL
              </span>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="#projects"
                className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
font-semibold
shadow-lg
hover:shadow-xl
hover:scale-105
hover:bg-blue-700
transition-all
duration-300
"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download className="border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
              >
                Download  Resume
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src="/profile.png"
              alt="Sunny Raj"
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
            />

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Hero;