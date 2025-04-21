import BubbleText from "../bubble_text";

const Contact = () => {
  return (
    <>
      <BubbleText
        text="Contácteme"
        style="text-6xl font-bold tracking-wide cursor-default"
      />
      <p className="mt-4 text-lg max-w-xl">
        ¿Te interesa trabajar conmigo o tienes alguna pregunta? ¡No dudes en
        escribirme!
      </p>
    </>
  );
};

export default Contact;
