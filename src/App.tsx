import { Toaster } from "sonner";
import "./App.css";
import AnimatedSection from "./components/animated_section";
import NavigationNavbar from "./components/navegation/navigation";
import { Space } from "./components/space-generator";
import { SECTIONS } from "./utils/sections";

function App() {
  return (
    <main className="font-[Pixelify_Sans] transition-colors duration-300 ease-in-out">
      <Space />
      <NavigationNavbar />
      {SECTIONS.map((section) => (
        <AnimatedSection
          key={section.id}
          id={section.id}
          className={section.style}
        >
          <section.component />
        </AnimatedSection>
      ))}
      <Toaster richColors position="bottom-right" />
    </main>
  );
}

export default App;
