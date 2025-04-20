import useGenerateText from "@/hooks/text-generator";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Home = () => {
  const { displayedText } = useGenerateText();

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <picture>
        <motion.img
          src="/js.svg"
          className="max-h-32 bg-amber-50 rounded-md border-2"
          alt="js.svg logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </picture>
      <h1 className="text-5xl font-bold mt-4">Bienvenidos a mi portafolio</h1>
      <p className="text-lg mt-2">
        Soy Jefferson Garcia,{" "}
        <span className="text-amber-500 dark:text-amber-300">
          {displayedText}
          <span className="animate-blink">|</span>
        </span>
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://drive.google.com/uc?export=download&id=1aldI9RoSiDJlZyqcrDUUd0hJdBA6gKB0"
          target="_blank"
          rel="noopener noreferrer"
          download="Jefferson-Garcia-CV.pdf"
        >
          <Button className="cursor-pointer lg:text-xl">Descargar CV</Button>
        </a>
        <a href="#contact">
          <Button variant="outline" className="lg:text-xl cursor-pointer">
            Contácteme
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Home;
