import { useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const ref = useRef(null);

  // Optimized typewriter effect
  const animatedText = useTypewriter(
    [
      "Frontend Engineer",
      "React Developer",
      "JavaScript Developer",
      "EV Charging Specialist",
      // "UI/UX Developer"
    ],
    {
      typingSpeed: 100, // Slightly faster for better UX
      deletingSpeed: 50,
      delayBetweenTexts: 3000, // Longer delay to reduce CPU usage
      loop: true
    }
  );

  return (
    <section ref={ref} className="relative isolate min-h-[85vh] overflow-hidden">
      {/* Static background grid for better performance */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Static gradient orbs for better performance */}
      <div className="absolute -inset-40 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse_at_top,_rgba(122,224,255,0.14),_transparent_60%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse_at_bottom,_rgba(87,255,167,0.12),_transparent_60%)"
          }}
        />
      </div>

      {/* Static floating particles for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              opacity: 0.5
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16 flex min-h-[85vh] flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1 className="hero-title font-semibold md:text-6xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Rehanul Haque
              </motion.span>
              <motion.span
                className="block text-accent relative whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: [0.8, 1, 0.9],
                  x: 0,
                  scale: [1, 1.01, 1],
                  textShadow: [
                    "0 0 0px rgba(124, 58, 237, 0)",
                    "0 0 8px rgba(124, 58, 237, 0.2)",
                    "0 0 0px rgba(124, 58, 237, 0)"
                  ]
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  opacity: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  },
                  textShadow: {
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut"
                  }
                }}
              >
                {animatedText}
                <span className="inline-block w-0.5 h-[1em] bg-accent ml-1 animate-pulse" />
              </motion.span>
              <motion.span
                className="block text-subtext hero-subtitle mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                EV Charging Domain Expert
              </motion.span>
              <motion.div
                className="flex flex-wrap gap-4 mt-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <a href="mailto:syed.rehanhaque1994@gmail.com" className="text-accent hover:underline flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  syed.rehanhaque1994@gmail.com
                </a>
                <a href="tel:+917277826285" className="text-accent hover:underline flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 72778 26285
                </a>
              </motion.div>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-subtext text-lg leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web technologies and deep expertise in EV charging systems.
            <span className="text-accent font-semibold animate-pulse">
              3.5+ years in frontend development
            </span>{" "}
            combined with{" "}
            <span className="text-accent font-semibold animate-pulse" style={{ animationDelay: '0.5s' }}>
              2.5+ years as a Network Engineer
            </span>{" "}
            delivering scalable solutions, optimized performance, and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-row gap-4 overflow-x-auto pb-2 justify-start sm:justify-start w-full no-scrollbar"
          >
            <motion.a
              href="#projects"
              className="hero-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(87, 255, 167, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my featured projects section"
            >
              <motion.span
                className="text-black"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                View Projects
              </motion.span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                ↗
              </motion.span>
            </motion.a>

            <motion.a
              href="https://github.com/Rehan72"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button inline-flex items-center gap-2 rounded-full border-2 border-white/30 font-medium text-white hover:bg-white/10 hover:border-accent/60 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(87, 255, 167, 0.6)",
                backgroundColor: "rgba(87, 255, 167, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit my GitHub profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Profile
            </motion.a>

            <motion.a
              href="/Rehanul_Resume.pdf"
              download="Rehanul_Resume.pdf"
              className="hero-button inline-flex items-center gap-2 rounded-full border-2 border-white/30 font-medium text-white hover:bg-white/10 hover:border-accent2/60 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(122, 224, 255, 0.6)",
                backgroundColor: "rgba(122, 224, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="hero-button inline-flex items-center gap-2 rounded-full border-2 border-white/30 font-medium text-white hover:bg-white/10 hover:border-accent/60 transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(87, 255, 167, 0.6)",
                backgroundColor: "rgba(87, 255, 167, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Navigate to contact section"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-accent/30 shadow-2xl overflow-hidden">
            <img
              src="/IMG_20201111_145435.jpg"
              alt="Rehanul Haque - Frontend Developer and EV Charging Specialist"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              width="192"
              height="192"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded successfully')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}