import { useState } from "react";
import { motion } from "framer-motion";
import BubbleText from "../bubble_text";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{
        borderStartStartRadius: "50%",
        borderEndEndRadius: "50%",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      animate={{
        borderStartStartRadius: isOpen ? "1rem" : "50%",
        borderEndEndRadius: isOpen ? "1rem" : "50%",
        borderStartEndRadius: isOpen ? "1rem" : "0%",
        borderEndStartRadius: isOpen ? "1rem" : "0%",
      }}
      onClick={() => setIsOpen(!isOpen)}
      className={`
        bg-gray-200/80 hover:bg-gray-200 dark:bg-muted/40 dark:hover:bg-muted overflow-hidden cursor-pointer flex items-center justify-center
        transition-all duration-500
        ${
          isOpen
            ? "sm:flex-row flex-col sm:w-[600px] sm:h-[400px] w-[300px] h-[550px] lg:w-[900px] lg:h-[500px] gap-6 sm:justify-around justify-center px-6"
            : "w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] flex-col"
        }
      `}
    >
      <motion.img
        src="./jefferson.png"
        alt="Jefferson"
        layout
        initial={{
          borderStartStartRadius: "50%",
          borderEndEndRadius: "50%",
        }}
        animate={{
          borderStartStartRadius: isOpen ? "1rem" : "50%",
          borderEndEndRadius: isOpen ? "1rem" : "50%",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`object-cover transition-all duration-500 drop-shadow-2xl ${
          isOpen
            ? "sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] "
            : "w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] hover:scale-105"
        }`}
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col justify-center items-center text-center sm:text-left gap-12"
        >
          <BubbleText
            text="Sobre mí"
            style="relative inline-block text-4xl sm:text-5xl font-bold tracking-wide cursor-default"
          >
            <span className="absolute left-1/2 -bottom-4 w-45 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full -translate-x-1/2" />
          </BubbleText>
          <div
            className="overflow-y-auto max-h-40 sm:max-h-60 pr-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "gray transparent",
            }}
          >
            <p className="text-sm md:text-base tracking-wider max-w-xs">
              Hola, soy Jefferson Garcia, desarrollador de software con (+3
              años) de experiencia, un apasionado por la tecnología y el
              desarrollo web. Mi enfoque principal es construir soluciones
              eficientes y escalables. Las herramientas que más uso son
              TypeScript, Node.js, Express, React y PostgreSQL. Mi interés en la
              tecnología me ha impulsado a profundizar en cada una de estas
              herramientas para desarrollar aplicaciones sólidas y de
              rendimiento. Me considero una persona proactiva, responsable, con
              capacidad para trabajar en equipo y bajo presión. Me gusta
              afrontar nuevos retos y aprender de ellos.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default About;
