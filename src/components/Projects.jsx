import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";
import ProjectModal from "./ProjectModal.jsx";

const projects = [
  {
    title: "EV ChargeOps Dashboard",
    desc: "Operator dashboard with real-time station status, session analytics, and incident triage.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React", "Framer Motion", "WebSockets", "Tailwind"],
    longDesc: "A comprehensive dashboard for EV charging station operators featuring real-time monitoring, session analytics, incident management, and performance optimization. Built with modern React patterns and optimized for real-time data visualization.",
    features: ["Real-time WebSocket connections", "Interactive data visualizations", "Incident triage system", "Performance analytics", "Multi-station management"],
    tech: ["React 18", "Framer Motion", "WebSockets", "Chart.js", "Node.js", "MongoDB"]
  },
  {
    title: "UI Component Library",
    desc: "Reusable, accessible components optimized for performance and DX.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React", "TypeScript", "Storybook", "Jest"],
    longDesc: "A comprehensive design system and component library built for scalability and accessibility. Features a complete set of reusable components with full TypeScript support and extensive documentation.",
    features: ["100+ reusable components", "Full TypeScript support", "Accessibility compliant", "Performance optimized", "Comprehensive documentation"],
    tech: ["React", "TypeScript", "Storybook", "Jest", "Rollup", "CSS-in-JS"]
  },
  {
    title: "Charging Session Explorer",
    desc: "Explore and filter charging sessions with advanced client-side caching.",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React", "TanStack Query", "Virtualization"],
    longDesc: "Advanced charging session analysis tool with intelligent caching, filtering, and visualization capabilities. Handles large datasets efficiently with virtual scrolling and smart data management.",
    features: ["Advanced filtering system", "Virtual scrolling for large datasets", "Intelligent caching strategy", "Real-time data updates", "Export capabilities"],
    tech: ["React", "TanStack Query", "React Virtual", "Local Storage API", "Chart.js"]
  },
  {
    title: "Network Monitoring System",
    desc: "Real-time network performance monitoring and alerting system.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React", "D3.js", "Node.js", "WebRTC"],
    longDesc: "Comprehensive network monitoring solution with real-time performance tracking, alerting, and visualization. Built during my network engineering days to monitor EV charging infrastructure performance.",
    features: ["Real-time performance metrics", "Custom alerting rules", "Historical data analysis", "Network topology visualization", "Automated reporting"],
    tech: ["React", "D3.js", "Node.js", "WebRTC", "InfluxDB", "Grafana"]
  },
  {
    title: "E-commerce Platform",
    desc: "Full-stack e-commerce solution with advanced product management.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    longDesc: "Modern e-commerce platform with seamless payment integration, inventory management, and admin dashboard. Features advanced product filtering, cart management, and order tracking.",
    features: ["Stripe payment integration", "Advanced product filtering", "Inventory management", "Order tracking system", "Admin dashboard"],
    tech: ["Next.js", "Stripe API", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Task Management App",
    desc: "Collaborative task management with real-time updates and team features.",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "#",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    longDesc: "Real-time collaborative task management application with team features, progress tracking, and deadline management. Supports multiple projects and team collaboration.",
    features: ["Real-time collaboration", "Team management", "Progress tracking", "Deadline notifications", "File attachments"],
    tech: ["React", "Socket.io", "Express.js", "MongoDB", "JWT Auth", "Cloudinary"]
  },
  {
    title: "AssetWork",
    desc: "Asset management system built with React.js for tracking and organizing resources.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    longDesc: "A comprehensive asset management application built with React.js for efficient tracking, organization, and management of various types of assets with modern UI/UX design.",
    features: ["Asset tracking", "Real-time updates", "Search and filtering", "Responsive design", "Data visualization"],
    tech: ["React", "JavaScript", "CSS3", "HTML5", "Local Storage"]
  },
  {
    title: "Sparkle",
    desc: "Interactive React.js application with modern animations and effects.",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "Framer Motion", "CSS", "JavaScript"],
    longDesc: "A visually appealing React.js application featuring smooth animations, interactive elements, and modern design patterns with engaging user experience.",
    features: ["Smooth animations", "Interactive UI", "Responsive layout", "Modern design", "Performance optimized"],
    tech: ["React", "Framer Motion", "CSS3", "JavaScript", "HTML5"]
  },
  {
    title: "Kitu",
    desc: "React.js web application with clean architecture and user-friendly interface.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "JavaScript", "Tailwind", "HTML"],
    longDesc: "A well-structured React.js application focusing on clean code architecture, component reusability, and providing an intuitive user experience.",
    features: ["Clean architecture", "Reusable components", "Responsive design", "Fast loading", "SEO friendly"],
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "RFID Card System",
    desc: "React.js application for RFID card management and tracking system.",
    img: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "JavaScript", "API", "Database"],
    longDesc: "A comprehensive RFID card management system built with React.js for tracking, managing, and monitoring RFID cards with real-time data synchronization.",
    features: ["Card tracking", "Real-time sync", "User management", "Activity logs", "Search functionality"],
    tech: ["React", "JavaScript", "REST API", "Database", "Authentication"]
  },
  {
    title: "Climate1",
    desc: "TypeScript React application for climate data visualization and analysis.",
    img: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e2?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "TypeScript", "Charts", "API"],
    longDesc: "A sophisticated climate monitoring application built with React and TypeScript, featuring data visualization, analysis tools, and interactive charts for climate data.",
    features: ["Data visualization", "Interactive charts", "TypeScript", "API integration", "Responsive design"],
    tech: ["React", "TypeScript", "Chart.js", "REST API", "Tailwind CSS"]
  },
  {
    title: "Survey Template",
    desc: "Dynamic survey creation and management system built with React.js.",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "JavaScript", "Forms", "Validation"],
    longDesc: "A flexible survey template system that allows users to create, distribute, and analyze surveys with various question types and response collection.",
    features: ["Dynamic forms", "Multiple question types", "Response analysis", "Export data", "User management"],
    tech: ["React", "JavaScript", "Form Validation", "Data Export", "Local Storage"]
  },
  {
    title: "E-Library Dashboard",
    desc: "Digital library management system with admin dashboard and user interface.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "Dashboard", "Admin", "Database"],
    longDesc: "A comprehensive e-library management system featuring both admin and user interfaces for book management, user administration, and content organization.",
    features: ["Book management", "User administration", "Search system", "Admin dashboard", "User profiles"],
    tech: ["React", "JavaScript", "Database", "Authentication", "File Upload"]
  },
  {
    title: "Marriage Management System",
    desc: "Event management system for wedding planning and coordination.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop&crop=center",
    live: "#",
    code: "https://github.com/Rehan72",
    tags: ["React", "Management", "Events", "Database"],
    longDesc: "A comprehensive marriage management system for planning, organizing, and coordinating wedding events with guest management and vendor coordination features.",
    features: ["Event planning", "Guest management", "Vendor coordination", "Timeline tracking", "Budget management"],
    tech: ["React", "JavaScript", "Database", "Calendar API", "Email Integration"]
  }
];

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="group card overflow-hidden cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
        <motion.img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
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
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    setCurrentIndex(index);
  };

  const getVisibleProjects = () => {
    // Show 3 projects starting from current index
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
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
        <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-muted-foreground">
          Selected work across EV charging operations, network engineering, and modern web development.
        </p>

        {/* Auto-sliding Carousel */}
        <div className="mt-8 relative">
          <div className="flex justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={`${project.title}-${currentIndex}`}
                className="w-full max-w-sm"
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
          {projects.length > 3 && (
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
          {currentIndex + 1}-{Math.min(currentIndex + 3, projects.length)} of {projects.length} projects
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
}