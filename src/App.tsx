import "./App.css";
import NavigationNavbar from "./components/navegation/navigation";
import { Space } from "./components/space-generator";

function App() {
  return (
    <main className="font-[Pixelify_Sans] transition-colors duration-300 ease-in-out">
      <Space />
      <NavigationNavbar />
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <picture>
          <img
            src="/js.svg"
            className="max-h-32 bg-amber-50 rounded-md border-2"
            alt="js.svg logo"
          />
        </picture>
        <h1 className="text-5xl font-bold mt-4">Bienvenidos a mi portafolio</h1>
        <p className="text-lg mt-2">
          Soy Jefferson García, desarrollador de software.
        </p>
      </section>

      <section
        id="project"
        className="h-screen flex flex-col items-center justify-center px-4 bg-gray-100 dark:bg-zinc-900 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
        <p className="text-lg max-w-xl">
          Aquí encontrarás algunos de los proyectos que he desarrollado
          recientemente utilizando tecnologías modernas como React, Tailwind,
          Node.js y más.
        </p>
      </section>

      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-black text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg max-w-xl">
          Soy un apasionado del desarrollo web con experiencia en frontend y
          backend. Me gusta crear experiencias digitales atractivas y
          funcionales.
        </p>
      </section>

      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center px-4 bg-zinc-200 dark:bg-zinc-950 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contáctame</h2>
        <p className="text-lg max-w-xl">
          ¿Te interesa trabajar conmigo o tienes alguna pregunta? ¡No dudes en
          escribirme!
        </p>
      </section>
    </main>
  );
}

export default App;
