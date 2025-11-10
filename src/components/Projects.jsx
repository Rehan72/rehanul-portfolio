import { useState, useEffect, useCallback, memo, useTransition } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";
import ProjectModal from "./ProjectModal.jsx";
import OptimizedImage from "./OptimizedImage.jsx";
import { projects } from "../data/projects.js";
import { useMemo } from "react";

const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  const handleClick = useCallback(() => onClick(project), [project, onClick]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  }, [project, onClick]);

  return (
    <motion.div
      className="group card overflow-hidden cursor-pointer h-full flex flex-col"
      onClick={handleClick}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title} project. Technologies used: ${project.tags.join(', ')}`}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
        <OptimizedImage
          src={project.img}
          alt={`${project.title} - ${project.desc}`}
          className="h-full w-full object-cover transition-transform duration-500"
          width={400}
          height={250}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        <motion.div
          className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform transition-transform duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <motion.h3
            className="text-lg font-semibold text-foreground mb-3 leading-tight line-clamp-2"
            whileHover={{ color: "rgba(var(--accent), 1)" }}
          >
            {project.title}
          </motion.h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {project.desc}
          </p>
        </div>
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <motion.span
                key={tag}
                className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground hover:border-accent/50 hover:text-accent transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--accent), 0.1)" }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default memo(function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  // React 19.2: Using useTransition for non-urgent state updates
  const [isPending, startTransition] = useTransition();

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(['All']);
    projects.forEach(project => {
      project.tags.forEach(tag => cats.add(tag));
    });
    return Array.from(cats);
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    // React 19.2: Using startTransition for non-urgent updates
    startTransition(() => {
      setCurrentIndex(index);
    });
  };

  const getVisibleProjects = () => {
    // Show 3 projects starting from current index, filtered by active filter
    const visible = [];
    const sourceProjects = filteredProjects.length > 0 ? filteredProjects : projects;
    for (let i = 0; i < Math.min(3, sourceProjects.length); i++) {
      visible.push(sourceProjects[(currentIndex + i) % sourceProjects.length]);
    }
    return visible;
  };

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Selected work across EV charging operations, network engineering, and modern web development.
        </p>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6" role="group" aria-label="Project category filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent text-black shadow-lg'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeFilter === category}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Auto-sliding Carousel */}
        <div className="mt-8 relative">
          <div className="flex justify-center items-stretch gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4" role="region" aria-label="Featured projects carousel" aria-live="polite">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={`${project.title}-${currentIndex}`}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          {filteredProjects.length > 3 && (
            <div className="flex flex-col items-center gap-6 mt-8">
              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-3">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 h-3 bg-accent shadow-lg"
                        : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? (
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m-7 1V6a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                  )}
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          )}
        </div>

        {/* Project Counter */}
        <motion.div
          className="text-center mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {filteredProjects.length > 0
            ? `${currentIndex + 1}-${Math.min(currentIndex + 3, filteredProjects.length)} of ${filteredProjects.length} projects`
            : 'No projects found for this filter'
          }
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
});