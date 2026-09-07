import SectionWrapper from "./SectionWrapper";
import { FaCode } from "react-icons/fa";

const DSA = () => {
  return (
    <SectionWrapper>
      <section id="dsa" className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            DSA Journey
          </h2>

          <p className="text-center text-gray-500 mt-4 mb-14">
            Continuously improving my problem-solving skills.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <FaCode className="text-5xl text-blue-600 mx-auto mb-4" />

              <h2 className="text-5xl font-bold">
                70+
              </h2>

              <p className="mt-3">
                LeetCode Problems Solved
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="font-bold text-xl mb-5">
                Current Topics
              </h3>

              <ul className="space-y-3">

                <li>✅ Arrays</li>

                <li>✅ Two Pointers</li>

                <li>🟡 Sliding Window</li>

                <li>🟡 Binary Search</li>

              </ul>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="font-bold text-xl mb-5">
                Programming Language
              </h3>

              <h1 className="text-5xl">
                ☕
              </h1>

              <p className="mt-5">
                Java
              </p>

            </div>

          </div>

        </div>

      </section>
    </SectionWrapper>
  );
};

export default DSA;