import SectionWrapper from "./SectionWrapper";
import { FaJava, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projectImage from "../assets/production-line.PNG";
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <SectionWrapper>
            <section id="projects" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <p className="text-blue-600 font-semibold mb-2">
                        ⭐ Featured Project
                    </p>

                    <h2 className="text-4xl font-bold text-center mb-4">
                        Projects
                    </h2>

                    <p className="text-center text-gray-500 mb-14">
                        Here are some projects I've built while learning software development.
                    </p>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

                        <img
                            src={projectImage}
                            alt="Production Line Scheduler"
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-8">

                            <div className="flex items-center gap-3 mb-4">
                                <FaJava className="text-orange-500 text-4xl" />
                                <h3 className="text-3xl font-bold">
                                    Production Line Scheduler System
                                </h3>
                            </div>

                            <p className="text-gray-600 leading-8 mb-6">
                                Java application that simulates production line scheduling using
                                Object-Oriented Programming, Collections Framework,
                                Multithreading, and File Handling.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">

                                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                                    Java
                                </span>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                                    OOP
                                </span>

                                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                                    Multithreading
                                </span>

                                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                                    File Handling
                                </span>

                                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
                                    Collections
                                </span>

                            </div>

                            <div className="grid md:grid-cols-2 gap-3 mb-8">

                                <p>✅ Machine Allocation</p>

                                <p>✅ Task Scheduling</p>

                                <p>✅ Production Reports</p>

                                <p>✅ Exception Handling</p>

                                <p>✅ Priority Queue</p>

                                <p>✅ OOP Design</p>

                            </div>

                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/thakur-sunnyking"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>

                                <Link
                                    to="/projects/production-line-scheduler"
                                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
                                >
                                    <FiExternalLink />
                                    View Case Study
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </SectionWrapper>
    );
};

export default Projects;