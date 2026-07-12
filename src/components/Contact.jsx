import SectionWrapper from "./SectionWrapper";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope size={35} />,
    title: "Email",
    value: "sunnysharmaraj2001@gmail.com",
    link: "mailto:sunnysharmaraj2001@gmail.com",
  },
  {
    icon: <FaGithub size={35} />,
    title: "GitHub",
    value: "github.com/thakur-sunnyking",
    link: "https://github.com/thakur-sunnyking",
  },
  {
    icon: <FaLinkedin size={35} />,
    title: "LinkedIn",
    value: "linkedin.com/in/sunny14raj",
    link: "https://linkedin.com/in/sunny14raj",
  },
  {
    icon: <FaPhone size={35} />,
    title: "Phone",
    value: "+91 9905 239473",
    link: "tel:+919905239473",
  },
];

const Contact = () => {
  return (
    <SectionWrapper>
      <section id="contact" className="py-24 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Contact Me
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-14">
            Let's connect and build something amazing together.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {contacts.map((item) => (

              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
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

                <div className="text-blue-600 flex justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 break-all">
                  {item.value}
                </p>

              </a>

            ))}

          </div>

        </div>

      </section>
    </SectionWrapper>
  );
};

export default Contact;