import { memo, useState } from "react";
import Section from "./Section.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "../data/timeline.js";
import { useAccessibility } from "../hooks/useAccessibility.js";

const TimelineItem = memo(({ item, index, isExpanded, onToggle }) => {
  const { prefersReducedMotion } = useAccessibility();

  const getTypeIcon = (type) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8" />
          </svg>
        );
      case 'project':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'skill':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work': return 'from-blue-500 to-blue-600';
      case 'project': return 'from-green-500 to-green-600';
      case 'skill': return 'from-purple-500 to-purple-600';
      case 'education': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.15
      }}
      className="relative mb-8 last:mb-0"
    >
      {/* Timeline line with gradient */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-transparent" />

      {/* Timeline dot with enhanced design */}
      <motion.div
        className="absolute left-6 w-5 h-5 bg-background border-4 border-accent rounded-full z-10 flex items-center justify-center shadow-lg"
        whileHover={{ scale: prefersReducedMotion ? 1 : 1.2 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      >
        <motion.div
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${getTypeColor(item.type)}`}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Content Card with enhanced design */}
      <motion.div
        className="ml-20"
        whileHover={{ scale: prefersReducedMotion ? 1 : 1.02, x: prefersReducedMotion ? 0 : 5 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      >
        <div className="card p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-accent/30 hover:border-accent">
          {/* Enhanced Year Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 text-accent text-sm font-semibold rounded-full mb-4 border border-accent/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2,
              duration: prefersReducedMotion ? 0 : 0.4
            }}
          >
            {getTypeIcon(item.type)}
            {item.year}
          </motion.div>

          {/* Enhanced Title and Company */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : index * 0.15 + 0.3,
              duration: prefersReducedMotion ? 0 : 0.4
            }}
          >
            <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
              {item.title}
              <motion.span
                className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white font-medium`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : index * 0.15 + 0.4,
                  duration: prefersReducedMotion ? 0 : 0.3
                }}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </motion.span>
            </h3>
            <p className="text-accent font-medium mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {item.company}
            </p>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            className="text-subtext text-sm leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: prefersReducedMotion ? 0 : index * 0.15 + 0.4,
              duration: prefersReducedMotion ? 0 : 0.4
            }}
          >
            {item.description}
          </motion.p>

          {/* Enhanced Technologies with better layout */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : index * 0.15 + 0.5,
              duration: prefersReducedMotion ? 0 : 0.4
            }}
          >
            {item.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : (index * 0.15) + (techIndex * 0.05) + 0.5,
                  duration: prefersReducedMotion ? 0 : 0.3
                }}
                className="px-3 py-1 bg-gradient-to-r from-accent/10 to-accent/5 text-accent text-xs rounded-full border border-accent/20 hover:from-accent/20 hover:to-accent/10 transition-all cursor-default font-medium"
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => onToggle(index)}
            className="mt-4 text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.6 }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            <motion.svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                className="mt-4 pt-4 border-t border-border/50"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="text-sm text-subtext space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Delivered high-performance solutions with optimized code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Collaborated with cross-functional teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Implemented best practices and modern technologies</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default memo(function Timeline() {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'cards'
  const { prefersReducedMotion } = useAccessibility();

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const toggleViewMode = () => {
    const newMode = viewMode === 'timeline' ? 'cards' : 'timeline';
    setViewMode(newMode);
  };

  return (
    <Section id="timeline">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        className="text-center"
      >
        {/* Enhanced Section Header with View Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.2
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            My professional evolution from network engineering to modern web development,
            showcasing the skills and experiences that shaped my career path.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={toggleViewMode}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                viewMode === 'timeline'
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50'
              }`}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
              aria-label={`Switch to ${viewMode === 'timeline' ? 'card' : 'timeline'} view`}
            >
              {viewMode === 'timeline' ? '📊 Timeline View' : '🎴 Card View'}
            </motion.button>
          </div>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.5
            }}
          />
        </motion.div>

        {/* Dynamic Container based on View Mode */}
        <AnimatePresence mode="wait">
          {viewMode === 'timeline' ? (
            <motion.div
              key="timeline-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Enhanced Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-transparent shadow-sm" />

              {/* Timeline Items with Expandable Logic */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={`${item.year}-${item.title}`}
                    item={item}
                    index={index}
                    isExpanded={expandedItems.has(index)}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cards-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              className="max-w-6xl mx-auto"
            >
              {/* Cards Grid View */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}-card`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                      duration: prefersReducedMotion ? 0 : 0.4
                    }}
                    className="card p-6 hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${item.type === 'work' ? 'from-blue-500 to-blue-600' : item.type === 'project' ? 'from-green-500 to-green-600' : item.type === 'skill' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'} text-white`}>
                          {item.type === 'work' ? '💼' : item.type === 'project' ? '🚀' : item.type === 'skill' ? '⚡' : '🎓'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-accent">{item.year}</div>
                          <div className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.type === 'work' ? 'from-blue-500/10 to-blue-600/10 text-blue-600' : item.type === 'project' ? 'from-green-500/10 to-green-600/10 text-green-600' : item.type === 'skill' ? 'from-purple-500/10 to-purple-600/10 text-purple-600' : 'from-orange-500/10 to-orange-600/10 text-orange-600'}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium mb-3 flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {item.company}
                    </p>
                    <p className="text-subtext text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{item.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Expand Button */}
                    <motion.button
                      onClick={() => toggleItem(index)}
                      className="w-full text-xs text-accent hover:text-accent/80 transition-colors flex items-center justify-center gap-1 py-2 border border-accent/20 rounded-lg hover:bg-accent/5"
                      whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                      whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                    >
                      {expandedItems.has(index) ? 'Show Less' : 'Show More'}
                      <motion.svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedItems.has(index) ? 180 : 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedItems.has(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                          className="mt-4 pt-4 border-t border-border/50"
                        >
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="text-sm text-subtext space-y-1">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Delivered high-performance solutions with optimized code</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Collaborated with cross-functional teams</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>Implemented best practices and modern technologies</span>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.8
          }}
          className="mt-16 text-center"
        >
          <p className="text-subtext mb-6">
            Interested in my journey? Let's connect and discuss how we can work together.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent2 font-medium rounded-full hover:shadow-xl transition-all duration-300 text-white"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
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
});