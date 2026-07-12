import SectionWrapper from "./SectionWrapper";
const About = () => {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <p className="text-lg text-gray-700 leading-8">
              Hello! I'm <span className="font-semibold text-blue-600">Sunny Raj</span>,
              an aspiring Java Full Stack Developer with a strong foundation in Java,
              Object-Oriented Programming, SQL, and frontend development using React.

              <br /><br />

              I enjoy building practical software solutions and continuously improving
              my problem-solving skills through Data Structures and Algorithms.

              <br /><br />

              One of my key projects is a <span className="font-semibold text-blue-600">
                Production Line Scheduling Simulator            </span>, developed in Java using OOP concepts and file handling to
              simulate machine scheduling and task management.

              <br /><br />

              I'm currently focused on mastering Spring Boot, React, SQL, and DSA
              while building projects that strengthen my software development skills.
            </p>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default About;