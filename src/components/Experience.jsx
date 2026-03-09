import Section from "./Section.jsx";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "AssetWorks - EV Charging Management",
      period: "Jun 2022 – Feb 2023",
      projects: ["AssetWorks"],
      description: "Leading development of enterprise-level EV Charging Management platforms with multi-tenant SaaS architecture.",
      highlights: [
        "Led development of AssetWorks - EV Charging Management Portal with Angular 13, implementing role-based authentication for Super Admins, Admins, and Operators",
        "Developed Sparke EV Charging Portal with React 17, Redux-Saga, and Material-UI supporting 7+ user roles",
        "Built LevelUp - Multi-tenant SaaS platform supporting 5+ brands (LevelUp, Sparke, Fleete, Roame, Flexe) with Razorpay payment integration",
        "Implemented ECharts dashboards for real-time analytics and monitoring",
        "Achieved comprehensive test coverage with Jest and maintained 99.9% uptime"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "saminTekmind.com",
      period: "2023 - 2024",
      projects: ["ITS Smart Card Management"],
      description: "Developed enterprise applications for smart card management systems.",
      highlights: [
        "Built ITS Smart Card Management System using React 18 and Vite with complete card lifecycle workflow (15+ stages)",
        "Created 40+ reusable UI components using Radix UI / Shadcn UI",
        "Implemented multi-environment CI/CD pipeline using GitLab with Docker containerization",
        "Integrated security scanning with SonarQube and Trivy",
        "Developed comprehensive card workflow: Initiate → Acknowledge → Download → Receive → Check → Print → QC → Dispatch → Delivery → Complete"
      ]
    },
    {
      title: "Angular Developer",
      company: "saminTekmind.com",
      period: "2021 - 2022",
      projects: ["Elaam - Islamic Religious Management"],
      description: "Built comprehensive religious management system with 20+ feature modules.",
      highlights: [
        "Developed Elaam - Islamic Religious Management System using Angular 12",
        "Implemented JWT authentication with role-based access for 10+ user roles",
        "Created modules for Niyat tracking, Quran Hifz, Khidmat Ramadaniyah, and Qardan Hasanah",
        "Integrated ECharts and Leaflet Maps for data visualization",
        "Implemented file export capabilities (PDF, Excel, CSV)"
      ]
    }
  ];

  return (
    <Section id="experience">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Career Journey
        </motion.h2>
        <p className="mt-3 text-subtext text-lg max-w-2xl mx-auto">
          My professional evolution from network engineering to modern web development, showcasing the skills and experiences that shaped my career path.
        </p>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 shadow-lg shadow-accent/50 z-10" />
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card p-6 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 border border-white/5 hover:border-accent/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-accent px-3 py-1 bg-accent/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-accent2 font-medium mb-3">
                    {exp.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.projects.map((project, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-card border border-white/10 rounded-full text-subtext"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-subtext mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-subtext flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
