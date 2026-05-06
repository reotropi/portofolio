import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Vibecode from "./components/Vibecode";
import Projects from "./components/Projects";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <SoftSkills />
      <Vibecode />
      <Contact />
    </main>
  );
}
