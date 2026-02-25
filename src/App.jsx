import { lazy, Suspense } from "react";
import useLenis from "./hooks/useLenis";

// Critical components loaded immediately
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Lazy load non-critical components
const About = lazy(() => import("./components/About.jsx"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Timeline = lazy(() => import("./components/Timeline.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const WhatsAppChat = lazy(() => import("./components/WhatsAppChat.jsx"));
const PageTransition = lazy(() => import("./components/PageTransition.jsx"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop.jsx"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground.jsx"));
const StatsCounter = lazy(() => import("./components/StatsCounter.jsx"));
const PWAInstallPrompt = lazy(() => import("./components/PWAInstallPrompt.jsx"));

export default function App() {
  // Initialize Lenis smooth scrolling globally
  useLenis();
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <PageTransition>
          <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
            <ParticleBackground />
          </Suspense>
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<div className="section-placeholder" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <StatsCounter />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Timeline />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<div className="section-placeholder" />}>
              <Contact />
            </Suspense>
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
                    <a href="mailto:syed.rehanhaque1994@gmail.com" className="block text-subtext hover:text-accent transition-colors">Email</a>
                    <a href="tel:+917277826285" className="block text-subtext hover:text-accent transition-colors">Phone</a>
                    <a href="https://github.com/Rehan72" target="_blank" rel="noopener noreferrer" className="block text-subtext hover:text-accent transition-colors">GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block text-subtext hover:text-accent transition-colors">LinkedIn</a>
                    <a href="/Rehanul_Haque_Feb-25_Resume.pdf" download className="block text-subtext hover:text-accent transition-colors">Resume</a>
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
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <Suspense fallback={null}>
            <PWAInstallPrompt />
          </Suspense>
          <Suspense fallback={null}>
            <WhatsAppChat />
          </Suspense>
        </PageTransition>
      </Suspense>
    </ErrorBoundary>
  );
}
