import Timeline from "../components/Timeline.jsx";
import { motion } from "framer-motion";
import Header from "../components/Header.jsx";
import PageTransition from "../components/PageTransition.jsx";
import WhatsAppChat from "../components/WhatsAppChat.jsx";
import { useState } from "react";

export default function Career() {
  const [currentPage, setCurrentPage] = useState('career');

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header onPageChange={(page) => {
          if (page === 'home') {
            window.location.reload();
          } else if (page === 'career') {
            // Stay on career page
            return;
          }
        }} />

        {/* Hero Section for Career Page */}
        <section className="relative isolate min-h-[60vh] overflow-hidden flex items-center">
          {/* Animated background grid */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Animated gradient orbs */}
          <motion.div className="absolute -inset-40 -z-10">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse_at_top,_rgba(122,224,255,0.1),_transparent_60%)",
                  "radial-gradient(ellipse_at_top,_rgba(87,255,167,0.08),_transparent_60%)",
                  "radial-gradient(ellipse_at_top,_rgba(122,224,255,0.1),_transparent_60%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My Career Journey
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-subtext leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From network engineering to modern web development, explore the path that shaped my expertise
                in creating exceptional digital experiences and solving complex technical challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#timeline"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Explore Journey
                </motion.a>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Connect
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <Timeline />

        {/* Stats Section */}
        <section className="py-16 bg-card/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-12">Career Highlights</h2>

              <div className="grid md:grid-cols-4 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-subtext">Years Experience</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-subtext">Projects Completed</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-subtext">Technologies Mastered</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-subtext">Dedication</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8">
          <div className="container text-center text-sm text-subtext">
            © {new Date().getFullYear()} Rehanul Haque. All rights reserved.
          </div>
        </footer>

        <WhatsAppChat />
      </div>
    </PageTransition>
  );
}