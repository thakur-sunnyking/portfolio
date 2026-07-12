import { Link } from "react-router-dom";
import { FaJava, FaGithub } from "react-icons/fa";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import screenshot4 from "../assets/screenshot4.png";
import screenshot5 from "../assets/screenshot5.png";
import screenshot6 from "../assets/screenshot6.png";
import screenshot8 from "../assets/screenshot8.png";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            to="/"
            className="text-blue-100 hover:text-white"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-5xl font-bold mt-8">
            Production Line Scheduler System
          </h1>

          <p className="text-xl mt-6 opacity-90">
            Java • OOP • Collections • Multithreading • File Handling
          </p>

          <a
            href="https://github.com/thakur-sunnyking"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            <FaGithub />
            View Source Code
          </a>

        </div>
      </section>

      {/* Overview */}

      {/* Project Objectives */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Project Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Learn OOP
              </h3>

              <p className="text-gray-600">
                Apply encapsulation, inheritance, polymorphism and abstraction
                in a real Java application.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Simulate Production
              </h3>

              <p className="text-gray-600">
                Allocate machines and execute production tasks using scheduling logic.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Practice Java
              </h3>

              <p className="text-gray-600">
                Strengthen Java skills through collections, multithreading,
                exception handling and file handling.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Technology Stack */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {
              [
                "Java",
                "OOP",
                "Collections",
                "Multithreading",
                "File Handling",
                "Exception Handling"
              ].map((tech) => (

                <div
                  key={tech}
                  className="bg-white rounded-2xl shadow p-6 text-center font-semibold hover:shadow-xl transition"
                >

                  {tech}

                </div>

              ))
            }

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>✅ Machine Allocation</div>

            <div>✅ Task Scheduling</div>

            <div>✅ Priority Queue</div>

            <div>✅ Production Reports</div>

            <div>✅ Collections Framework</div>

            <div>✅ File Storage</div>

            <div>✅ Exception Handling</div>

            <div>✅ Console Menu System</div>

          </div>

        </div>

      </section>

      {/* OOP Concepts */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            OOP Concepts Applied
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-50 rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                Encapsulation
              </h3>

              <p className="text-gray-600 leading-7">
                Machine information such as machine ID, status, and assigned
                tasks is encapsulated inside dedicated classes using private
                fields with getter and setter methods.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                Inheritance
              </h3>

              <p className="text-gray-600 leading-7">
                Different machine types inherit common properties and behaviors
                from a base Machine class, reducing code duplication.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                Polymorphism
              </h3>

              <p className="text-gray-600 leading-7">
                Multiple machine types can execute production tasks using their
                own implementations while sharing a common interface.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 shadow">
              <h3 className="text-2xl font-semibold mb-3">
                Abstraction
              </h3>

              <p className="text-gray-600 leading-7">
                The scheduling system exposes only the required operations while
                hiding internal implementation details from users.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Application Gallery */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Application Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, screenshot8].map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full"
                />

                <div className="p-5">
                  <h3 className="font-semibold">
                    Screenshot {index + 1}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Demonstrates different functionalities of the Production
                    Line Scheduler System.
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Challenges */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Challenges Faced
          </h2>

          <ul className="space-y-5 text-lg">

            <li>✔ Designing reusable object-oriented classes.</li>

            <li>✔ Managing concurrent machine execution using multithreading.</li>

            <li>✔ Organizing production tasks efficiently using Java Collections.</li>

            <li>✔ Implementing file handling for production report generation.</li>

            <li>✔ Handling invalid user input using exception handling.</li>

          </ul>

        </div>

      </section>

      {/* Future Improvements */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Future Improvements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">Spring Boot Backend</h3>
              <p>Convert the console application into a RESTful backend.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">MySQL Database</h3>
              <p>Store machine and production data persistently using MySQL.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold mb-3">React Dashboard</h3>
              <p>Create a web-based dashboard for production monitoring and management.</p>
            </div>

          </div>

        </div>

      </section>
      {/* Project Architecture */}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Project Architecture
          </h2>

          <div className="bg-slate-100 rounded-3xl p-10 shadow-lg">

            <div className="space-y-6 text-center">

              <div className="bg-blue-600 text-white p-4 rounded-xl font-semibold">
                User
              </div>

              <div className="text-3xl">↓</div>

              <div className="bg-green-600 text-white p-4 rounded-xl font-semibold">
                Console Menu
              </div>

              <div className="text-3xl">↓</div>

              <div className="bg-purple-600 text-white p-4 rounded-xl font-semibold">
                Scheduler Engine
              </div>

              <div className="text-3xl">↓</div>

              <div className="grid md:grid-cols-3 gap-5">

                <div className="bg-white rounded-xl p-6 shadow">
                  Machine Manager
                </div>

                <div className="bg-white rounded-xl p-6 shadow">
                  Task Manager
                </div>

                <div className="bg-white rounded-xl p-6 shadow">
                  Report Generator
                </div>

              </div>

              <div className="text-3xl">↓</div>

              <div className="bg-orange-500 text-white p-4 rounded-xl font-semibold">
                File Storage
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Project Statistics */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Project Statistics
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">10+</h3>
              <p className="mt-3">Java Classes</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-5xl font-bold text-green-600">6</h3>
              <p className="mt-3">Major Features</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-5xl font-bold text-orange-600">4</h3>
              <p className="mt-3">OOP Concepts</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h3 className="text-5xl font-bold text-purple-600">100%</h3>
              <p className="mt-3">Java Based</p>
            </div>

          </div>

        </div>
      </section>
      {/* Lessons Learned */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Lessons Learned
          </h2>

          <div className="bg-slate-50 rounded-3xl p-10 shadow">

            <ul className="space-y-5 text-lg">

              <li>✔ Strengthened Java Object-Oriented Programming skills.</li>

              <li>✔ Gained hands-on experience with Collections Framework.</li>

              <li>✔ Learned multithreading for concurrent task execution.</li>

              <li>✔ Improved exception handling and debugging techniques.</li>

              <li>✔ Practiced file handling for persistent report generation.</li>

            </ul>

          </div>

        </div>

      </section>
      {/* Final CTA */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Interested in this Project?
          </h2>

          <p className="text-gray-600 text-lg mb-10">

            Feel free to explore the source code and learn more
            about the implementation.

          </p>

          <a

            href="https://github.com/thakur-sunnyking"

            target="_blank"

            rel="noreferrer"

            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"

          >

            View on GitHub

          </a>

        </div>

      </section>

    </div>
  );
};

export default ProjectDetails;