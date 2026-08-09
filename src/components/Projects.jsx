import SectionWrapper from "./SectionWrapper";
import DevineKart from "./projects/DevineKart";
import ProductionLineSchedular from "./projects/ProductionLineSchedular";

const Projects = () => {
    return (
        <SectionWrapper>
            <section id="projects" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <p className="text-blue-600 font-semibold mb-2">
                            ⭐ Featured Work
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Projects
                        </h2>

                        <p className="text-gray-500 max-w-2xl mx-auto leading-7">
                            A selection of projects I've built while developing
                            my software engineering and full-stack development skills.
                        </p>
                    </div>

                    {/* Featured Project */}
                    <DevineKart />

                    {/* Other Projects */}
                    <div className="mt-20">
                        <div className="mb-8">
                            <p className="text-gray-500 font-medium">
                                Other Work
                            </p>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Other Projects
                            </h3>
                        </div>

                        <ProductionLineSchedular />
                    </div>

                </div>
            </section>
        </SectionWrapper>
    );
};

export default Projects;