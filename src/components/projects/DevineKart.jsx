import {
    FaJava,
    FaGithub,
    FaReact,
    FaDatabase,
    FaCloud,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";

import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import projectImage from "../../assets/devine-kart.png";

const DevineKart = () => {
    return (
        <article className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

            {/* Featured Badge */}
            <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Featured Project
                </span>
            </div>

            {/* Project Image */}
            <div className="overflow-hidden">
                <img
                    src={projectImage}
                    alt="Devine Kart E-Commerce Application"
                    className="w-full h-72 md:h-105 object-cover hover:scale-105 transition duration-700"
                />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">

                {/* Title */}
                <div className="flex flex-wrap items-center gap-4 mb-4">

                    <div className="flex items-center gap-2">
                        <FaJava className="text-orange-500 text-3xl" />
                        <FaReact className="text-blue-500 text-3xl" />
                        <SiSpringboot className="text-green-600 text-3xl" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Devine Kart
                    </h3>

                </div>

                <p className="text-xl font-semibold text-gray-700 mb-5">
                    Full-Stack E-Commerce Web Application
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-8 max-w-4xl mb-8">
                    A production-ready full-stack e-commerce application built
                    with Java Spring Boot, React.js, and PostgreSQL. Devine Kart
                    provides a complete shopping workflow including user
                    authentication, product browsing, shipping details,
                    order placement, and order history.
                </p>

                {/* Tech Stack */}
                <div className="mb-9">

                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                        🛠️ Technology Stack
                    </h4>

                    <div className="flex flex-wrap gap-3">

                        <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                            <FaJava />
                            Java 17
                        </span>

                        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                            <SiSpringboot />
                            Spring Boot
                        </span>

                        <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                            <FaReact />
                            React.js
                        </span>

                        <span className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium">
                            <SiTailwindcss />
                            Tailwind CSS v4
                        </span>

                        <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                            <SiVite />
                            Vite
                        </span>

                        <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
                            <FaDatabase />
                            PostgreSQL
                        </span>

                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-8 mb-10">

                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                            ✨ Key Features
                        </h4>

                        <div className="grid sm:grid-cols-2 gap-3 text-gray-600">
                            <p>✅ User Registration</p>
                            <p>✅ User Login</p>
                            <p>✅ Product Catalog</p>
                            <p>✅ Order Management</p>
                            <p>✅ Shipping Details</p>
                            <p>✅ Order History</p>
                            <p>✅ RESTful APIs</p>
                            <p>✅ Responsive UI</p>
                        </div>
                    </div>

                    {/* Architecture */}
                    <div>

                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                            🏗️ Architecture
                        </h4>

                        <div className="space-y-3 text-gray-600">

                            <p className="flex items-center gap-3">
                                <FaReact className="text-blue-500" />
                                React + Vite frontend
                            </p>

                            <p className="flex items-center gap-3">
                                <FaJava className="text-orange-500" />
                                Spring Boot REST backend
                            </p>

                            <p className="flex items-center gap-3">
                                <FaDatabase className="text-indigo-500" />
                                PostgreSQL database on Neon
                            </p>

                            <p className="flex items-center gap-3">
                                <FaCloud className="text-purple-500" />
                                Vercel + Render deployment
                            </p>

                        </div>
                    </div>
                </div>

                {/* Technical Highlights */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10">

                    <h4 className="text-lg font-bold text-gray-900 mb-5">
                        💡 Technical Highlights
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4 text-gray-600 leading-7">

                        <p>
                            • Engineered RESTful APIs using Spring Boot
                            and Spring Data JPA.
                        </p>

                        <p>
                            • Designed relational mapping between Orders
                            and OrderItems.
                        </p>

                        <p>
                            • Built the frontend using React.js and
                            Tailwind CSS v4.
                        </p>

                        <p>
                            • Configured CORS and production environment
                            variables.
                        </p>

                        <p>
                            • Deployed the frontend on Vercel and backend
                            on Render.
                        </p>

                        <p>
                            • Hosted the PostgreSQL database using Neon.
                        </p>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                    <a
                        href="https://ecommerce-frontend-seven-chi.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        <FiExternalLink />
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/thakur-sunnyking/ecommerce-frontend"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition"
                    >
                        <FaGithub />
                        Frontend
                    </a>

                    <a
                        href="https://github.com/thakur-sunnyking/ecommerce-backend"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition"
                    >
                        <FaGithub />
                        Backend
                    </a>

                    <Link
                        to="/projects/devine-kart"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold px-3 py-3.5 hover:text-blue-800 transition"
                    >
                        View Case Study
                        <FiArrowRight />
                    </Link>

                </div>

            </div>
        </article>
    );
};

export default DevineKart;