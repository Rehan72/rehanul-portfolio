import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
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
    const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
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

           {/* Mobile menu button */}
           <motion.button
             className="md:hidden p-2 rounded-lg border border-border hover:bg-card/50 transition-colors"
             whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--card), 0.5)" }}
             whileTap={{ scale: 0.95 }}
           >
             <motion.div
               className="w-5 h-0.5 bg-foreground mb-1"
               animate={{ rotate: [0, 90] }}
               transition={{ duration: 0.2 }}
             />
             <div className="w-5 h-0.5 bg-foreground mb-1" />
             <div className="w-5 h-0.5 bg-foreground" />
           </motion.button>
         </div>
       </div>
     </motion.header>
   );
 }