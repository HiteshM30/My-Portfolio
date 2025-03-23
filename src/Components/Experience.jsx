import React from "react";

const Experience = ({ isDarkMode }) => {
    const experiences = [
                {
            year: "Mar 2024 - Apr 2024",
            role: "Data Analyst Intern",
            company: "Cognifyz Technologies",
            description: `During my internship at Cognifyz Technologies as a Data Analytics Intern, I gained hands-on experience in analyzing and interpreting large datasets to drive actionable insights. I worked on real-world projects involving data cleaning, visualization, and statistical analysis, strengthening my proficiency in tools like Python, Excel, and Power BI. My role involved collaborating with cross-functional teams to present data-driven solutions and support decision-making processes. This experience enhanced my analytical thinking, problem-solving abilities, and reinforced my capability to communicate complex data findings effectively.`,
            technologies: ["Python", "Pandas", "NumPy", "Power BI", "MS-Excel", "Scikit-learn"],
        },
        {
            year: "2023 - Present",
            role: "Public Relation Head",
            company: "UPES-CSA",
            description: `As the Public Relations Head at CSA, I have led the planning and execution of major events, honing my leadership and strategic communication skills. I’ve fostered strong industry connections through effective networking, partnerships, and event collaborations. My role involves developing and overseeing PR strategies to maximize outreach, brand presence, and community engagement. This experience has strengthened my ability to manage high-level communications, drive impactful initiatives, and collaborate seamlessly with diverse teams.`,
            technologies: ["Communications", "Leadership", "Teamwork", "Networking"],
        }
    ];

    return (
        <div id="experience" className="mt-12 mb-12 px-6 lg:px-12 transition-all duration-500">
            <h2 className={`text-3xl my-20 font-bold mb-8 text-center transition-all ${
                isDarkMode ? "text-white" : "text-black"
            }`}>
                Experience
            </h2>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 text-center lg:text-left">
                            <p className={`mb-2 text-sm transition-all ${
                                isDarkMode ? "text-stone-400" : "text-gray-700"
                            }`}>
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className={`mb-2 font-semibold transition-all ${
                                isDarkMode ? "text-white" : "text-black"
                            }`}>
                                {experience.role} - <span className={`text-sm transition-all ${
                                    isDarkMode ? "text-stone-500" : "text-gray-700"
                                }`}>
                                    {experience.company}
                                </span>
                            </h3>
                            <p className={`mb-4 transition-all ${
                                isDarkMode ? "text-stone-300" : "text-gray-700"
                            }`}>
                                {experience.description}
                            </p>
                            <div>
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`mr-2 mt-4 rounded px-2 py-1 text-sm font-medium transition-all ${
                                            isDarkMode ? "bg-stone-900 text-stone-300" : "bg-gray-200 text-gray-900"
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
