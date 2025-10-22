import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, "change", () => {
    const sections = ["hero", "about", "skills", "experience", "timeline", "projects", "contact"];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  });

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#timeline", label: "Career" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md"
      style={{
        background: `rgba(${isDark ? '8, 10, 12' : '248, 250, 252'}, ${Math.min(scrollY.get() / 100, 0.8)})`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
       <div className="container flex items-center justify-between py-6 md:py-8">
         <motion.a
           href="#"
           className="font-bold tracking-wide text-xl md:text-2xl"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <motion.span
             className="text-accent"
             animate={{
               textShadow: [
                 "0 0 10px rgba(124, 58, 237, 0.5)",
                 "0 0 20px rgba(124, 58, 237, 0.8)",
                 "0 0 10px rgba(124, 58, 237, 0.5)"
               ]
             }}
             transition={{
               duration: 2,
               repeat: Infinity,
               ease: "easeInOut"
             }}
           >
             RH
           </motion.span>
           <span className="text-muted-foreground"> • Portfolio</span>
         </motion.a>

         <nav className="hidden gap-10 text-base md:flex">
           {navItems.map((item, index) => (
             <motion.a
               key={item.href}
               href={item.href}
               className={`relative transition-colors duration-300 hover:text-accent ${
                 activeSection === item.href.substring(1) ? "text-accent" : "text-muted-foreground"
               }`}
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1, duration: 0.5 }}
               whileHover={{ y: -2 }}
               whileTap={{ y: 0 }}
             >
               {item.label}
               {activeSection === item.href.substring(1) && (
                 <motion.div
                   className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                   layoutId="activeSection"
                   transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                 />
               )}
             </motion.a>
           ))}
         </nav>

         <div className="flex items-center gap-4">
           <ThemeToggle />

           {/* Download Resume Button */}
           <motion.a
             href="/Rehanul_Resume.pdf"
             download="Rehanul_Resume.pdf"
             className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             title="Download Resume"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
             Resume
           </motion.a>

           {/* Mobile menu button */}
           <motion.button
             className="md:hidden p-2 rounded-lg border border-border hover:bg-card/50 transition-colors"
             whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--card), 0.5)" }}
             whileTap={{ scale: 0.95 }}
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle mobile menu"
           >
             <motion.div
               className="w-5 h-0.5 bg-foreground mb-1"
               animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
               transition={{ duration: 0.2 }}
             />
             <motion.div
               className="w-5 h-0.5 bg-foreground mb-1"
               animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
               transition={{ duration: 0.2 }}
             />
             <motion.div
               className="w-5 h-0.5 bg-foreground"
               animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
               transition={{ duration: 0.2 }}
             />
           </motion.button>
         </div>
       </div>

       {/* Mobile Navigation Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50"
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3, ease: "easeInOut" }}
           >
             <div className="container py-4">
               <nav className="flex flex-col gap-2">
                 {navItems.map((item, index) => (
                   <motion.a
                     key={item.href}
                     href={item.href}
                     className={`px-4 py-3 rounded-lg transition-colors duration-300 ${
                       activeSection === item.href.substring(1)
                         ? "bg-accent/10 text-accent"
                         : "text-muted-foreground hover:text-accent hover:bg-card/50"
                     }`}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.1, duration: 0.3 }}
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     {item.label}
                   </motion.a>
                 ))}

                 {/* Mobile Resume Button */}
                 <motion.a
                   href="/Rehanul_Resume.pdf"
                   download="Rehanul_Resume.pdf"
                   className="mt-4 mx-4 px-4 py-3 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300 text-center"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <div className="flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                     Download Resume
                   </div>
                 </motion.a>
               </nav>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.header>
   );
 }