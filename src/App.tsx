import { Toaster } from "sonner";
import "./App.css";
import AnimatedSection from "./components/animated_section";
import NavigationNavbar from "./components/navegation/navigation";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Experience from "./components/sections/experience";
import Home from "./components/sections/home";
import Project from "./components/sections/project";
import Skills from "./components/sections/skills";
import { Space } from "./components/space-generator";

function App() {
  return (
    <main className="font-[Pixelify_Sans] transition-colors duration-300 ease-in-out  ">
      <Space />
      <NavigationNavbar />
      <AnimatedSection
        id="home"
        className="h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <Home />
      </AnimatedSection>
      <AnimatedSection
        id="project"
        className="h-screen flex flex-col items-center justify-center px-4 bg-gray-100 dark:bg-zinc-900 text-center"
      >
        <Project />
      </AnimatedSection>
      <AnimatedSection
        id="experience"
        className="h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-black text-center"
      >
        <Experience />
      </AnimatedSection>
      <AnimatedSection
        id="skills"
        className="h-screen flex flex-col items-center justify-center px-4 bg-zinc-200 dark:bg-zinc-950 text-center"
      >
        <Skills />
      </AnimatedSection>
      <AnimatedSection
        id="about"
        className="h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-black text-center"
      >
        <About />
      </AnimatedSection>
      <AnimatedSection
        id="contact"
        className="h-screen flex flex-col items-center justify-center px-4 bg-zinc-200 dark:bg-zinc-950 text-center"
      >
        <Contact />
      </AnimatedSection>
      <Toaster richColors position="bottom-right" />
    </main>
  );
}

export default App;
