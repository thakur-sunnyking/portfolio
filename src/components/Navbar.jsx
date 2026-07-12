import React from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
          Sunny Raj
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="dsa"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              DSA
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-blue-600"
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;