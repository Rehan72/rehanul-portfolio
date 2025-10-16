import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import PageTransition from "./components/PageTransition.jsx";

export default function App() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8">
        <div className="container text-sm text-subtext">
          © {new Date().getFullYear()} Rehanul Haque. All rights reserved.
        </div>
      </footer>
    </PageTransition>
  );
}