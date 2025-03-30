"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";

const skillCategories = {
  Languages: [
    { name: "Python", icon: "/skillslogos/python.png" },
    { name: "C", icon: "/skillslogos/c.png" },
    { name: "C++", icon: "/skillslogos/c++.png" },
    { name: "JavaScript (ES6)", icon: "/skillslogos/js.png" },
    { name: "MATLAB", icon: "/skillslogos/matlab.png" },
  ],
  Frameworks: [
    { name: "Pandas", icon: "/skillslogos/panda.png" },
    { name: "Matplotlib", icon: "/skillslogos/matplotlib.png" },
    { name: "Scikit-learn", icon: "/skillslogos/scikitlearn.jpg" },
    { name: "Plotly", icon: "/skillslogos/plotly.png" },
    { name: "Flask", icon: "/skillslogos/flask.jpg" },
    { name: "Streamlit", icon: "/skillslogos/streamlit.png" },
  ],
  WebTech: [
    { name: "HTML5", icon: "/skillslogos/html.png" },
    { name: "CSS3", icon: "/skillslogos/css.png" },
    { name: "Web Services", icon: "/skillslogos/webservices.png" },
    { name: "Vite", icon: "/skillslogos/vite.png" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "/skillslogos/postgre.png" },
    { name: "MySQL", icon: "/skillslogos/mysql.png" },
  ],
  Tools: [
    { name: "Git", icon: "/skillslogos/git.png" },
    { name: "VS Code", icon: "/skillslogos/vscode.png" },
    { name: "GitHub", icon: "/skillslogos/github.png" },
    { name: "Netlify", icon: "/skillslogos/netlify.png" },
    { name: "Tableau", icon: "/skillslogos/tableu.png" },
    { name: "Cursor", icon: "/skillslogos/cursor.png" },
  ],
  Special: [
    { name: "Machine Learning", icon: "/skillslogos/machinelearning.jpg" },
    { name: "ChatGPT", icon: "/skillslogos/chatgpt.png" },
    { name: "Googling", icon: "/skillslogos/googling.png" },
    { name: "Game Testing", icon: "/skillslogos/gametesting.png" },
  ],
};

// Get all icons for the rotating circle
const rotatingSkills = [
  // Core Languages
  { name: "Python", icon: "/skillslogos/python.png" },
  { name: "JavaScript", icon: "/skillslogos/js.png" },
  { name: "C++", icon: "/skillslogos/c++.png" },
  // Key Frameworks
  { name: "Flask", icon: "/skillslogos/flask.jpg" },
  { name: "Pandas", icon: "/skillslogos/panda.png" },
  { name: "Scikit-learn", icon: "/skillslogos/scikitlearn.jpg" },
  // Essential Web Tech
  { name: "HTML5", icon: "/skillslogos/html.png" },
  { name: "CSS3", icon: "/skillslogos/css.png" },
  // Core Tools
  { name: "Git", icon: "/skillslogos/git.png" },
  { name: "VS Code", icon: "/skillslogos/vscode.png" },
  // Specialized
  { name: "Machine Learning", icon: "/skillslogos/machinelearning.jpg" },
  { name: "ChatGPT", icon: "/skillslogos/chatgpt.png" }
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(skillCategories)[0]);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="py-10">
      <motion.h2
         initial={{ opacity: 0, y: 50 }} 
         whileInView={{ opacity: 1, y: 0 }} 
         transition={{ duration: 0.5 }} 
        viewport={{ once: true }}
        className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left p-2 flex justify-center text-gray-900 dark:text-[#3B82F6]"
      >
    Technical Skills & Tools
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-2">
        {/* Left Side - Rotating Skills */}
        <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[400px]">
          <div className="relative w-[400px] h-[400px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {rotatingSkills.map((skill, index) => {
                const angle = (index * (360 / rotatingSkills.length));
                const radian = (angle * Math.PI) / 180;
                const radius = 160;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-white dark:bg-[#1A2333]/40 rounded-xl border border-gray-200 dark:border-gray-700/20 shadow-lg hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="text-[10px] mt-1 font-medium text-gray-900 dark:text-gray-100">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
  </motion.div> 
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white dark:bg-[#1A2333]/40 rounded-full border-2 border-gray-200 dark:border-gray-700/20 shadow-lg flex items-center justify-center">
                <FaLaptopCode className="w-12 h-12 text-gray-900 dark:text-[#3B82F6]" />
              </div>
            </div>
          </div>
      </div>

        {/* Right Side - Skills Grid */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-20">
          {/* Desktop tabs */}
          <div className="hidden lg:flex flex-wrap justify-start mb-6 gap-2 sm:gap-3">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 text-sm sm:text-base rounded-lg transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-[#1A2333]/80 text-white dark:text-white'
                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1A2333]/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="lg:hidden mb-6">
        <select 
              className="select w-full text-sm rounded-lg bg-white dark:bg-[#1A2333]/80 text-gray-900 dark:text-white py-2 px-3 border border-gray-200 dark:border-gray-700/20"
          value={activeTab} 
          onChange={(e) => setActiveTab(e.target.value)}
        >
              {Object.keys(skillCategories).map((category) => (
                <option key={category} value={category} className="text-gray-900 dark:text-white">
                  {category}
                </option>
              ))}
        </select>
      </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#1A2333]/20"
          >
            {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-[#1A2333]/40 p-2 sm:p-3 hover:scale-110 transition-all duration-300">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="object-contain"
                    style={{
                      filter: 'brightness(1.2) contrast(1.1)'
                    }}
                  />
      </div>
                <span className="text-xs sm:text-sm text-center text-gray-400">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
            </div>
      </div>
    </section>
  );
};

export default Skills;

