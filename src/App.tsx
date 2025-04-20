import "./App.css";
import NavigationNavbar from "./components/navegation/navigation";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Home from "./components/sections/home";
import Project from "./components/sections/project";
import Skills from "./components/sections/skills";
import { Space } from "./components/space-generator";

function App() {
  return (
    <main className="font-[Pixelify_Sans] transition-colors duration-300 ease-in-out  ">
      <Space />
      <NavigationNavbar />
      <Home />
      <Project />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

export default App;
