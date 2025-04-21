import BubbleText from "../bubble_text";

const Project = () => {
  return (
    <>
      <BubbleText
        text="Proyectos"
        style="text-6xl font-bold tracking-wide cursor-default"
      />
      <p className="mt-4 text-lg max-w-xl">
        Aquí encontrarás algunos de los proyectos que he desarrollado
        recientemente utilizando tecnologías modernas como React, Tailwind,
        Node.js y más.
      </p>
    </>
  );
};

export default Project;
