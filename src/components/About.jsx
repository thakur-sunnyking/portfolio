import SectionWrapper from "./SectionWrapper";

const About = () => {
    return (
        <SectionWrapper>
            <section
                id="about"
                className="py-24 bg-white"
            >
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-blue-600 font-semibold mb-2">
                            👋 Get to Know Me
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            About Me
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">

                        <p className="text-lg text-gray-700 leading-8">

                            Hello! I'm{" "}
                            <span className="font-semibold text-blue-600">
                                Sunny Raj
                            </span>
                            , an aspiring{" "}
                            <span className="font-semibold">
                                Java Full Stack Developer
                            </span>{" "}
                            with a strong foundation in Java, Object-Oriented
                            Programming, SQL, and modern frontend development
                            using React.js.

                            <br />
                            <br />

                            I enjoy building practical, real-world applications
                            and learning how different parts of a software
                            system work together. My current focus is on
                            developing full-stack applications using{" "}
                            <span className="font-semibold text-blue-600">
                                Spring Boot, React.js, PostgreSQL, and REST APIs
                            </span>
                            .

                            <br />
                            <br />

                            One of my main projects is{" "}
                            <span className="font-semibold text-blue-600">
                                Devine Kart
                            </span>
                            , a full-stack e-commerce application built with
                            Java Spring Boot, React.js, PostgreSQL, and
                            Tailwind CSS. The project helped me gain practical
                            experience with RESTful APIs, database relationships,
                            authentication, order management, responsive UI
                            development, and cloud deployment.

                            <br />
                            <br />

                            I also built a{" "}
                            <span className="font-semibold text-blue-600">
                                Production Line Scheduling System
                            </span>{" "}
                            in Java, which strengthened my understanding of
                            Object-Oriented Programming, Collections,
                            Multithreading, Exception Handling, and File
                            Handling.

                            <br />
                            <br />

                            Alongside development, I'm continuously improving my{" "}
                            <span className="font-semibold">
                                Data Structures and Algorithms
                            </span>{" "}
                            and problem-solving skills. My goal is to keep
                            building meaningful projects while developing a
                            strong foundation in software engineering and
                            full-stack development.

                        </p>

                    </div>

                </div>
            </section>
        </SectionWrapper>
    );
};

export default About;