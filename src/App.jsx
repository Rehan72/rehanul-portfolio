import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Timeline from "./components/Timeline.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import WhatsAppChat from "./components/WhatsAppChat.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import StatsCounter from "./components/StatsCounter.jsx";
import PWAInstallPrompt from "./components/PWAInstallPrompt.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import PerformanceMonitor from "./components/PerformanceMonitor.jsx";

export default function App() {
  return (
    <ErrorBoundary>
      <PageTransition>
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <StatsCounter />
        <Experience />
        <Timeline />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-12 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                Rehanul Haque
              </h3>
              <p className="text-subtext text-sm leading-relaxed">
                Frontend Developer specializing in EV charging systems and modern web technologies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-subtext hover:text-accent transition-colors">About</a>
                <a href="#skills" className="block text-subtext hover:text-accent transition-colors">Skills</a>
                <a href="#projects" className="block text-subtext hover:text-accent transition-colors">Projects</a>
                <a href="#contact" className="block text-subtext hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://github.com/Rehan72" target="_blank" rel="noopener noreferrer" className="block text-subtext hover:text-accent transition-colors">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="block text-subtext hover:text-accent transition-colors">LinkedIn</a>
                <a href="/Rehanul_Resume.pdf" download className="block text-subtext hover:text-accent transition-colors">Resume</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-subtext">
              © {new Date().getFullYear()} Rehanul Haque. Built with React & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <PWAInstallPrompt />
      <PerformanceMonitor />
      <WhatsAppChat />
    </PageTransition>
    </ErrorBoundary>
  );
}