import useGenerateText from "@/hooks/text-generator";
import { Button } from "../ui/button";

const Home = () => {
  const { displayedText } = useGenerateText();

  return (
    <>
      <picture>
        <img
          src="/js.svg"
          className="max-h-32 bg-white rounded-md border-2"
          alt="js.svg logo"
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
    </>
  );
};

export default Home;
