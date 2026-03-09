import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />

              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            <div className="p-6 md:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                {project.period && (
                  <span className="text-sm font-medium text-accent px-3 py-1 bg-accent/10 rounded-full mb-4 inline-block">
                    {project.period}
                  </span>
                )}

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.longDesc}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-accent">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-accent">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--accent), 0.15)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {project.live && project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(var(--accent), 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}

                  {project.code && project.code !== "#" && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-card/50 transition-colors"
                      whileHover={{ scale: 1.05, borderColor: "rgba(var(--accent), 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span>View Code</span>
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}