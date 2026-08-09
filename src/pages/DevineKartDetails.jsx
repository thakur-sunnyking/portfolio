import { Link } from "react-router-dom";
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

import { FiExternalLink } from "react-icons/fi";

import projectImage from "../assets/devine-kart.png";

const DevineKartDetails = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <Link
                        to="/"
                        className="text-blue-100 hover:text-white transition"
                    >
                        ← Back to Portfolio
                    </Link>

                    <div className="mt-10 max-w-4xl">

                        <p className="text-blue-100 font-semibold mb-4">
                            ⭐ Featured Full-Stack Project
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold">
                            Devine Kart
                        </h1>

                        <p className="text-2xl mt-6">
                            Full-Stack E-Commerce Web Application
                        </p>

                        <p className="text-lg mt-5 text-blue-100 leading-8">
                            A production-ready e-commerce platform built with
                            Java Spring Boot, React.js, PostgreSQL, and Tailwind
                            CSS.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">

                            <a
                                href="https://ecommerce-frontend-seven-chi.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
                            >
                                <FiExternalLink />
                                Live Demo
                            </a>

                            <a
                                href="https://github.com/thakur-sunnyking/ecommerce-frontend"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
                            >
                                <FaGithub />
                                Frontend
                            </a>

                            <a
                                href="https://github.com/thakur-sunnyking/ecommerce-backend"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
                            >
                                <FaGithub />
                                Backend
                            </a>

                        </div>

                    </div>
                </div>
            </section>


            {/* Overview */}
            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-8">
                        Project Overview
                    </h2>

                    <p className="text-gray-600 text-lg leading-8 max-w-4xl">
                        Devine Kart is a full-stack e-commerce application
                        designed to provide a complete online shopping
                        workflow. The system connects a React frontend with
                        RESTful Spring Boot APIs and a PostgreSQL database.
                    </p>

                </div>

            </section>


            {/* Main Screenshot */}
            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Application
                    </h2>

                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={projectImage}
                            alt="Devine Kart application"
                            className="w-full"
                        />
                    </div>

                </div>

            </section>


            {/* Technology */}
            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-12">
                        Technology Stack
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <TechCard
                            icon={<FaJava />}
                            title="Java 17"
                            description="Core backend language."
                        />

                        <TechCard
                            icon={<SiSpringboot />}
                            title="Spring Boot"
                            description="RESTful backend APIs."
                        />

                        <TechCard
                            icon={<FaReact />}
                            title="React.js"
                            description="Interactive frontend."
                        />

                        <TechCard
                            icon={<SiTailwindcss />}
                            title="Tailwind CSS v4"
                            description="Responsive UI styling."
                        />

                        <TechCard
                            icon={<SiVite />}
                            title="Vite"
                            description="Frontend development tooling."
                        />

                        <TechCard
                            icon={<FaDatabase />}
                            title="PostgreSQL"
                            description="Relational database."
                        />

                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5 text-lg text-gray-600">

                        <p>✅ User registration and authentication</p>
                        <p>✅ Product catalog</p>
                        <p>✅ Product browsing</p>
                        <p>✅ Shipping information</p>
                        <p>✅ Order placement</p>
                        <p>✅ Order history</p>
                        <p>✅ RESTful backend APIs</p>
                        <p>✅ Responsive frontend</p>
                        <p>✅ Relational order management</p>
                        <p>✅ Cloud deployment</p>

                    </div>

                </div>

            </section>


            {/* Architecture */}
            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-12">
                        System Architecture
                    </h2>

                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow">

                        <div className="grid md:grid-cols-3 gap-6 text-center">

                            <ArchitectureCard
                                icon={<FaReact />}
                                title="Frontend"
                                description="React.js + Tailwind CSS + Vite"
                            />

                            <ArchitectureCard
                                icon={<FaJava />}
                                title="Backend"
                                description="Java + Spring Boot + Spring Data JPA"
                            />

                            <ArchitectureCard
                                icon={<FaDatabase />}
                                title="Database"
                                description="PostgreSQL hosted on Neon"
                            />

                        </div>

                        <div className="text-center text-3xl my-8">
                            ↓
                        </div>

                        <div className="bg-blue-600 text-white rounded-2xl p-6 text-center">

                            <FaCloud className="text-3xl mx-auto mb-3" />

                            <h3 className="text-xl font-bold">
                                Cloud Deployment
                            </h3>

                            <p className="mt-2 text-blue-100">
                                Frontend on Vercel • Backend on Render
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Database */}
            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Database Design
                    </h2>

                    <div className="bg-white rounded-3xl shadow p-8 md:p-10">

                        <h3 className="text-2xl font-bold mb-5">
                            Orders & OrderItems Relationship
                        </h3>

                        <p className="text-gray-600 leading-8">
                            The application uses a relational PostgreSQL
                            structure where an order is associated with its
                            individual order items. Spring Data JPA is used
                            to map and manage these relationships between
                            application entities and database tables.
                        </p>

                    </div>

                </div>

            </section>


            {/* Technical Challenges */}
            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Technical Challenges
                    </h2>

                    <div className="space-y-5 text-lg text-gray-600">

                        <p>
                            ✔ Configuring frontend and backend communication
                            across different deployment environments.
                        </p>

                        <p>
                            ✔ Handling CORS configuration for production.
                        </p>

                        <p>
                            ✔ Managing PostgreSQL connection configuration
                            and environment variables.
                        </p>

                        <p>
                            ✔ Designing relational order and order-item
                            mappings.
                        </p>

                        <p>
                            ✔ Maintaining a responsive user interface across
                            different screen sizes.
                        </p>

                    </div>

                </div>

            </section>


            {/* Deployment */}
            <section className="py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Deployment
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <DeploymentCard
                            title="Frontend"
                            value="Vercel"
                        />

                        <DeploymentCard
                            title="Backend"
                            value="Render"
                        />

                        <DeploymentCard
                            title="Database"
                            value="Neon PostgreSQL"
                        />

                    </div>

                </div>

            </section>


            {/* Lessons */}
            <section className="py-20 bg-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold mb-10">
                        Lessons Learned
                    </h2>

                    <div className="bg-slate-50 rounded-3xl p-8 md:p-10">

                        <ul className="space-y-5 text-lg text-gray-600">

                            <li>
                                ✔ Improved understanding of full-stack
                                application architecture.
                            </li>

                            <li>
                                ✔ Gained practical experience with Spring Boot
                                REST APIs.
                            </li>

                            <li>
                                ✔ Strengthened PostgreSQL and JPA relationship
                                mapping skills.
                            </li>

                            <li>
                                ✔ Learned production deployment using Vercel,
                                Render, and Neon.
                            </li>

                            <li>
                                ✔ Improved experience with CORS and environment
                                configuration.
                            </li>

                        </ul>

                    </div>

                </div>

            </section>


            {/* Final CTA */}
            <section className="py-24">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Explore Devine Kart
                    </h2>

                    <p className="text-gray-600 text-lg mb-10">
                        Explore the live application or view the source code
                        to learn more about the implementation.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <a
                            href="https://ecommerce-frontend-seven-chi.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/thakur-sunnyking/ecommerce-frontend"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
                        >
                            Frontend GitHub
                        </a>

                        <a
                            href="https://github.com/thakur-sunnyking/ecommerce-backend"
                            target="_blank"
                            rel="noreferrer"
                            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition"
                        >
                            Backend GitHub
                        </a>

                    </div>

                </div>

            </section>

        </div>
    );
};


/* Reusable local components */

const TechCard = ({ icon, title, description }) => {
    return (
        <div className="bg-slate-50 rounded-2xl p-6 shadow hover:shadow-xl transition">

            <div className="text-3xl text-blue-600 mb-4">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
                {title}
            </h3>

            <p className="text-gray-600">
                {description}
            </p>

        </div>
    );
};


const ArchitectureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white rounded-2xl p-7 shadow">

            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
                {title}
            </h3>

            <p className="text-gray-600">
                {description}
            </p>

        </div>
    );
};


const DeploymentCard = ({ title, value }) => {
    return (
        <div className="bg-white rounded-2xl shadow p-8 text-center">

            <h3 className="text-lg text-gray-500 mb-2">
                {title}
            </h3>

            <p className="text-2xl font-bold text-gray-900">
                {value}
            </p>

        </div>
    );
};


export default DevineKartDetails;