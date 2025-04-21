import BubbleText from "../bubble_text";

const About = () => {
  return (
    <>
      <BubbleText
        text="Sobre mí"
        style="text-5xl sm:text-6xl font-bold tracking-wide cursor-default"
      />
      <p className="mt-4 text-lg max-w-xl">
        Soy un apasionado del desarrollo web con experiencia en frontend y
        backend. Me gusta crear experiencias digitales atractivas y funcionales.
      </p>
    </>
  );
};

export default About;
