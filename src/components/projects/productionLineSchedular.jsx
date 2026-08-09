import { FaJava, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import projectImage from "../../assets/production-line.PNG";

const ProductionLine = () => {
    return (
        <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition">

            {/* Image */}
            <img
                src={projectImage}
                alt="Production Line Scheduler System"
                className="w-full h-64 object-cover"
            />

            <div className="p-7">

                {/* Title */}
                <div className="flex items-center gap-3 mb-4">

                    <FaJava className="text-orange-500 text-3xl" />

                    <h3 className="text-2xl font-bold text-gray-900">
                        Production Line Scheduler
                    </h3>

                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 mb-5">
                    A Java-based production scheduling system that simulates
                    machine allocation, task scheduling, and production
                    workflows using object-oriented programming and core
                    Java concepts.
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm">
                        Java
                    </span>

                    <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm">
                        OOP
                    </span>

                    <span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm">
                        Multithreading
                    </span>

                    <span className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-sm">
                        Collections
                    </span>

                    <span className="bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-sm">
                        File Handling
                    </span>

                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-7">

                    <p>✓ Machine Allocation</p>
                    <p>✓ Task Scheduling</p>
                    <p>✓ Priority Queue</p>
                    <p>✓ Production Reports</p>
                    <p>✓ Exception Handling</p>
                    <p>✓ OOP Design</p>

                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-5">

                    <a
                        href="https://github.com/thakur-sunnyking/Java-OOPs-Project"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <Link
                        to="/projects/production-line-scheduler"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                        View Case Study
                        <FiArrowRight />
                    </Link>

                </div>

            </div>
        </article>
    );
};

export default ProductionLine;