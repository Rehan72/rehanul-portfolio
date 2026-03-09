import { memo } from "react";
import Section from "./Section.jsx";
import { motion } from "framer-motion";
import AnimatedProgressBar from "./AnimatedProgressBar.jsx";
import AnimatedCounter from "./AnimatedCounter.jsx";

const core = ["React 18", "Angular 13", "TypeScript", "JavaScript", "HTML5", "CSS3"];
const frameworks = ["Redux Toolkit", "React Hook Form", "Angular Material", "Material-UI", "Tailwind CSS", "Bootstrap"];
const tools = ["Vite", "Webpack", "Docker", "Nginx", "GitLab CI/CD", "SonarQube"];
const apis = ["REST API", "JWT", "Axios", "WebSockets", "Google Maps API"];
const testing = ["Jest", "React Testing Library", "Karma", "Jasmine"];
const other = ["ECharts", "Leaflet Maps", "jsPDF", "ExcelJS", "Framer Motion", "SCSS/SASS"];

const skillLevels = [
  { name: "React.js", level: 95 },
  { name: "Angular", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Redux/Redux-Saga", level: 92 },
  { name: "Material-UI/MUI", level: 90 },
  { name: "API Integration", level: 90 },
  { name: "Docker & CI/CD", level: 80 },
  { name: "Testing (Jest)", level: 75 }
];

const Pill = memo(({ text, i }) => {
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
});

export default memo(function Skills() {

  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Skills & Tech</h2>
        <p className="mt-3 text-subtext text-lg">Expertise across frontend development and enterprise applications</p>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <div className="mt-12 grid gap-8 md:gap-10 md:grid-cols-2">
        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-accent/20 transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-lg">⚡</span>
            </motion.div>
            Technical Proficiency
          </h3>
          <div className="space-y-5">
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
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-accent2/20 transition-all duration-300"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-accent2 to-accent rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-lg">📊</span>
              </motion.div>
              Experience Overview
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-4xl font-bold text-accent mb-3">
                <AnimatedCounter endValue={6} suffix="+" />
              </div>
              <div className="text-sm text-subtext font-medium">Enterprise Projects</div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-lg bg-accent2/5 border border-accent2/20 hover:bg-accent2/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-4xl font-bold text-accent2 mb-3">
                <AnimatedCounter endValue={3.5} suffix="+" />
              </div>
              <div className="text-sm text-subtext font-medium">Years Frontend</div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-lg bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-4xl font-bold text-green-500 mb-3">
                <AnimatedCounter endValue={20} suffix="+" />
              </div>
              <div className="text-sm text-subtext font-medium">Tech Skills</div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-4xl font-bold text-purple-500 mb-3">
                <AnimatedCounter endValue={99} suffix="%" />
              </div>
              <div className="text-sm text-subtext font-medium">Project Success</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Technology Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-accent/20 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-accent to-accent2 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">⚛️</span>
            </motion.div>
            Core Frontend
          </h3>
          <div className="flex flex-wrap gap-3">
            {core.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-accent2/20 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-accent2 to-accent rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">🎨</span>
            </motion.div>
            Frameworks & UI
          </h3>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-green-500/20 transition-all duration-300 group sm:col-span-2 lg:col-span-1"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-green-500 to-accent rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">🛠️</span>
            </motion.div>
            DevOps & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-purple-500/20 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-purple-500 to-accent2 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">🔌</span>
            </motion.div>
            APIs & Integration
          </h3>
          <div className="flex flex-wrap gap-3">
            {apis.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-yellow-500/20 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-accent rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">🧪</span>
            </motion.div>
            Testing
          </h3>
          <div className="flex flex-wrap gap-3">
            {testing.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
        <motion.div
          className="card p-8 bg-gradient-to-br from-card to-card/80 border border-white/10 hover:border-cyan-500/20 transition-all duration-300 group sm:col-span-2 lg:col-span-1"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-accent rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">📊</span>
            </motion.div>
            Visualization & More
          </h3>
          <div className="flex flex-wrap gap-3">
            {other.map((s, i) => <Pill key={s} text={s} i={i} />)}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
});
