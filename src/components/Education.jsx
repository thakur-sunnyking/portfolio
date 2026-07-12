import SectionWrapper from "./SectionWrapper";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <SectionWrapper>
      <section id="education" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            Education
          </h2>

          <p className="text-center text-gray-500 mb-14">
            My academic journey.
          </p>

          <div className="bg-slate-50 rounded-3xl shadow-lg p-8 hover:shadow-xl transition">

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-5 rounded-full">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Bachelor of Computer Applications (BCA)
                </h3>

                <p className="text-gray-600">
                  Maulana Mazharul Haque Arabic and Persian University (MMHAPU)
                </p>

                <p className="text-blue-600 mt-2">
                  2021 - 2024
                </p>

              </div>

            </div>

          </div>

          <div className="bg-slate-50 rounded-3xl shadow-lg p-8 hover:shadow-xl transition">

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-5 rounded-full">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Master of Computer Applications (MCA)
                </h3>

                <p className="text-gray-600">
                  Noida Institute of Engineering & Technology (NIET)
                </p>

                <p className="text-blue-600 mt-2">
                  2025 - 2027
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Education;