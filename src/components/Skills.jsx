import SectionWrapper from "./SectionWrapper";
import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaFileCode
} from "react-icons/fa";
import { GrInherit } from "react-icons/gr";
import {
    SiSpringboot,
    SiJavascript,
    SiMysql,
    SiTailwindcss,
    SiPostman,
    SiPostgresql
} from "react-icons/si";

const skills = [
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "HTML5", icon: <FaHtml5 size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Postman", icon: <SiPostman size={40} /> },
    { name: "File Handling", icon: <FaFileCode size={40} /> },
    { name: "DSA", icon: <FaCode size={40} /> },
    { name: "OOP", icon: <GrInherit size={40} /> },

];

const Skills = () => {
    return (
        <SectionWrapper>
            <section
                id="skills"
                className="py-24 bg-slate-50"
            >
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Skills
                    </h2>

                    <p className="text-center text-gray-500 mb-12">
                        Technologies and tools I use to build applications.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {skills.map((skill) => (
                            <div
                                key={skill.name}
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
"
                            >

                                <div className="flex justify-center text-blue-600 mb-4">
                                    {skill.icon}
                                </div>

                                <h3 className="font-semibold">
                                    {skill.name}
                                </h3>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </SectionWrapper>
    );
};

export default Skills;