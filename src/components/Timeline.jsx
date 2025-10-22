import Section from "./Section.jsx";
import { motion } from "framer-motion";
import { timelineData } from "../data/timeline.js";

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative mb-12 last:mb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

      {/* Timeline dot with icon */}
      <motion.div
        className="absolute left-6 w-4 h-4 bg-background border-4 border-accent rounded-full z-10 flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`w-2 h-2 rounded-full ${
            item.type === 'work' ? 'bg-accent' :
            item.type === 'project' ? 'bg-green-500' :
            item.type === 'skill' ? 'bg-blue-500' : 'bg-purple-500'
          }`}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="ml-20"
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="card p-6 hover:shadow-xl transition-all duration-300">
          {/* Year Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {item.year}
          </motion.div>

          {/* Title and Company */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
            <p className="text-accent font-medium mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {item.company}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-subtext text-sm leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            {item.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            {item.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.15) + (techIndex * 0.05) + 0.5 }}
                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <Section id="timeline">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            My professional evolution from network engineering to modern web development,
            showcasing the skills and experiences that shaped my career path.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line Background */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-subtext mb-6">
            Interested in my journey? Let's connect and discuss how we can work together.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-medium rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </Section>
  );
}