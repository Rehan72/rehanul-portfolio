import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const driftY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    // Smooth typewriter effect for job title with elegant timing
    const animatedText = useTypewriter(
      [
        "Frontend Engneer",
        "React Developer",
        "JavaScript developer"
      //   "Full Stack Developer",
      //   "UI/UX Engineer"
      ],
      {
        typingSpeed: 80,
        deletingSpeed: 40,
        delayBetweenTexts: 2500,
        loop: true
      }
    );

   return (
     <section ref={ref} className="relative isolate min-h-[85vh] overflow-hidden">
       {/* Animated background grid */}
       <motion.div
         className="absolute inset-0 opacity-40"
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
           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
           backgroundSize: '50px 50px'
         }}
       />

       {/* Animated gradient orbs */}
       <motion.div style={{ y: driftY }} className="absolute -inset-40 -z-10" aria-hidden>
         <motion.div
           className="absolute inset-0"
           animate={{
             background: [
               "radial-gradient(ellipse_at_top,_rgba(122,224,255,0.14),_transparent_60%)",
               "radial-gradient(ellipse_at_top,_rgba(87,255,167,0.12),_transparent_60%)",
               "radial-gradient(ellipse_at_top,_rgba(122,224,255,0.14),_transparent_60%)"
             ]
           }}
           transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut"
           }}
         />
         <motion.div
           className="absolute inset-0"
           animate={{
             background: [
               "radial-gradient(ellipse_at_bottom,_rgba(87,255,167,0.12),_transparent_60%)",
               "radial-gradient(ellipse_at_bottom,_rgba(122,224,255,0.14),_transparent_60%)",
               "radial-gradient(ellipse_at_bottom,_rgba(87,255,167,0.12),_transparent_60%)"
             ]
           }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "easeInOut"
           }}
         />
       </motion.div>

       {/* Floating particles */}
       <div className="absolute inset-0 overflow-hidden">
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-2 h-2 bg-accent/30 rounded-full"
             style={{
               left: `${20 + i * 15}%`,
               top: `${10 + i * 10}%`,
             }}
             animate={{
               y: [0, -30, 0],
               opacity: [0.3, 1, 0.3],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 3 + i * 0.5,
               repeat: Infinity,
               delay: i * 0.2,
               ease: "easeInOut"
             }}
           />
         ))}
       </div>

       <div className="container flex min-h-[85vh] flex-col items-start justify-center">
         {/* Profile Image */}
         <motion.div
           className="mb-8"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           <motion.div
             className="relative"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
           >
             <motion.div
               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent/30 shadow-2xl overflow-hidden"
               animate={{
                 boxShadow: [
                   "0 0 0 rgba(124, 58, 237, 0.3)",
                   "0 0 30px rgba(124, 58, 237, 0.4)",
                   "0 0 0 rgba(124, 58, 237, 0.3)"
                 ]
               }}
               transition={{
                 duration: 3,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             >
               <img
                 src="/profile.jpg"
                 alt="Rehanul Haque"
                 className="w-full h-full object-cover"
               />
             </motion.div>
             <motion.div
               className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"
               animate={{
                 opacity: [0.3, 0.6, 0.3]
               }}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             />
           </motion.div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         >
           <motion.h1 className="text-3xl font-semibold md:text-6xl">
             <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
             >
               Rehanul Haque
             </motion.span>
             <motion.span
               className="block text-accent relative"
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
               <motion.span
                 className="inline-block w-0.5 h-[1em] bg-accent ml-1"
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{
                   duration: 1.2,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               />
             </motion.span>
             <motion.span
               className="block text-subtext text-xl md:text-2xl mt-2"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.6 }}
             >
               EV Charging Domain Expert
             </motion.span>
           </motion.h1>
         </motion.div>

         <motion.p
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
           className="mt-6 max-w-2xl text-subtext text-lg"
         >
           Building fast, reliable, and maintainable interfaces with a strong foundation in networking.
           <motion.span
             className="text-accent"
             animate={{ opacity: [0.7, 1, 0.7] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             3.5 years in frontend
           </motion.span>{" "}
           plus{" "}
           <motion.span
             className="text-accent"
             animate={{ opacity: [0.7, 1, 0.7] }}
             transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
           >
             2.5 years as a Network Engineer
           </motion.span>{" "}
           ensures robust UI architecture, performance optimization, and resilient API communication.
         </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 16 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
           className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap justify-center sm:justify-start"
         >
           <motion.a
             href="#projects"
             className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-black shadow-lg hover:shadow-xl transition-all duration-300"
             whileHover={{
               scale: 1.05,
               boxShadow: "0 10px 30px rgba(124, 58, 237, 0.4)"
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
             className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white hover:bg-white/5 transition-all duration-300"
             whileHover={{
               scale: 1.05,
               borderColor: "rgba(124, 58, 237, 0.5)",
               backgroundColor: "rgba(124, 58, 237, 0.1)"
             }}
             whileTap={{ scale: 0.95 }}
             aria-label="Visit my GitHub profile"
           >
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
             </svg>
             GitHub Profile
           </motion.a>

           <motion.a
             href="/Rehanul_Resume.pdf"
             download="Rehanul_Resume.pdf"
             className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white hover:bg-white/5 transition-all duration-300"
             whileHover={{
               scale: 1.05,
               borderColor: "rgba(124, 58, 237, 0.5)",
               backgroundColor: "rgba(124, 58, 237, 0.1)"
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
             className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white hover:bg-white/5 transition-all duration-300"
             whileHover={{
               scale: 1.05,
               borderColor: "rgba(124, 58, 237, 0.5)",
               backgroundColor: "rgba(124, 58, 237, 0.1)"
             }}
             whileTap={{ scale: 0.95 }}
             aria-label="Navigate to contact section"
           >
             Get In Touch
           </motion.a>
         </motion.div>
       </div>
     </section>
   );
 }