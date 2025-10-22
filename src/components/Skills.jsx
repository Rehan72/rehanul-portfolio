import Section from "./Section.jsx";
import { motion } from "framer-motion";
import AnimatedProgressBar from "./AnimatedProgressBar.jsx";
import AnimatedCounter from "./AnimatedCounter.jsx";

const core = ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"];
const tooling = ["Vite", "Webpack", "ESLint", "Jest", "Testing Library"];
const networking = ["REST", "WebSockets", "Caching", "CDN", "TCP/IP Basics", "DNS", "Latency & QoS"];

const skillLevels = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "CSS/Tailwind", level: 88 },
  { name: "Performance Optimization", level: 85 },
  { name: "API Integration", level: 90 },
  { name: "Network Protocols", level: 80 },
  { name: "Testing", level: 75 }
];

function Pill({ text, i }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.03, duration: 0.35 }}
      className="cursor-default rounded-full border border-white/10 bg-card px-4 py-2 text-sm text-subtext hover:border-accent/50 hover:text-text transition-all duration-300 hover:scale-105"
    >
      {text}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl">Skills & Tech</h2>
        <p className="mt-2 text-subtext">Expertise across frontend development and network systems</p>
      </motion.div>

      <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6"
        >
          <h3 className="font-medium mb-6 flex items-center gap-2">
            Technical Proficiency
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              ⚡
            </motion.div>
          </h3>
          <div className="space-y-4">
            {skillLevels.map((skill, index) => (
              <AnimatedProgressBar
                key={skill.name}
                label={skill.name}
                percentage={skill.level}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card p-6"
        >
          <h3 className="font-medium mb-6">Experience Overview</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                <AnimatedCounter endValue={3.5} suffix="+" />
              </div>
              <div className="text-sm text-subtext">Years Frontend</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                <AnimatedCounter endValue={2.5} suffix="+" />
              </div>
              <div className="text-sm text-subtext">Years Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                <AnimatedCounter endValue={15} suffix="+" />
              </div>
              <div className="text-sm text-subtext">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                <AnimatedCounter endValue={99} suffix="%" />
              </div>
              <div className="text-sm text-subtext">Uptime Focus</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="card p-6">
          <h3 className="font-medium">Core Frontend</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {core.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Tooling</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tooling.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-medium">Networking & Systems</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {networking.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}