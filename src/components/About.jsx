import Section from "./Section.jsx";
import { motion } from "framer-motion";
export default function About() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-16 h-16 bg-cyan-500/10 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/10 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-accent to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 border border-white/5 hover:border-accent/20"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-accent to-accent2/80 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Frontend Expertise</h3>
                  <p className="text-accent font-medium">React & Angular Development</p>
                </div>
              </div>
              <p className="text-subtext leading-relaxed">
                3.5+ years building enterprise-grade web applications using React and Angular. Specialized in scalable frontend architectures, state management with Redux, and creating exceptional user experiences with Material-UI and custom designs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl hover:shadow-accent2/10 transition-all duration-300 border border-white/5 hover:border-accent2/20"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-accent2 to-accent/80 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 002 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Enterprise Solutions</h3>
                  <p className="text-accent2 font-medium">Full-Stack Capabilities</p>
                </div>
              </div>
              <p className="text-subtext leading-relaxed">
                Experience building 6+ enterprise projects including EV Charging Management Systems, ERP solutions, and Smart Card Management systems. Proficient in Docker, CI/CD pipelines, and delivering production-ready applications with 99.9% uptime.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="card p-8 mb-12 bg-gradient-to-br from-card to-card/80 border border-white/10"
          >
            <div className="text-center mb-8">
              <motion.h3
                className="text-2xl font-bold mb-3 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Domain Expertise
              </motion.h3>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  EV Charging
                </motion.div>
                <p className="text-sm text-subtext font-medium">Management Systems</p>
                <div className="mt-3 w-12 h-1 bg-accent/30 mx-auto rounded-full"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="p-6 rounded-xl bg-gradient-to-br from-accent2/10 to-accent2/5 border border-accent2/20 hover:border-accent2/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent2 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  ERP Systems
                </motion.div>
                <p className="text-sm text-subtext font-medium">Tour Management</p>
                <div className="mt-3 w-12 h-1 bg-accent2/30 mx-auto rounded-full"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-green-500 mb-3 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  Smart Card
                </motion.div>
                <p className="text-sm text-subtext font-medium">Management Systems</p>
                <div className="mt-3 w-12 h-1 bg-green-500/30 mx-auto rounded-full"></div>
              </motion.div>
            </div>
            <motion.div
              className="text-center mt-8 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-accent2/5 border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <p className="text-subtext">
                Developing enterprise solutions at{" "}
                <motion.a
                  href="#"
                  className="text-accent font-semibold hover:text-accent2 transition-colors duration-300 underline decoration-accent/50 hover:decoration-accent2/50"
                  whileHover={{ scale: 1.05 }}
                >
                  saminTekmind.com
                </motion.a>
              </p>
            </motion.div>
          </motion.div>

          {/* Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="text-center p-6">
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              >
                6+
              </motion.div>
              <p className="text-subtext">Enterprise Projects Delivered</p>
            </div>
            <div className="text-center p-6">
              <motion.div
                className="text-3xl font-bold text-cyan-500 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
              >
                3.5+
              </motion.div>
              <p className="text-subtext">Years Frontend Development</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-accent/5 to-accent2/5 border border-white/10"
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">Get In Touch</h3>
            <p className="text-subtext mb-6 max-w-md mx-auto">
              Interested in collaboration or have questions about my work?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:syed.rehanhaque1994@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 transition-all duration-300 text-accent hover:text-accent font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="tel:+917277826285"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent2/10 hover:bg-accent2/20 border border-accent2/20 hover:border-accent2/40 transition-all duration-300 text-accent2 hover:text-accent2 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
