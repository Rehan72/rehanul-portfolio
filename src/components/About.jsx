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
                  <p className="text-accent font-medium">Modern Web Development</p>
                </div>
              </div>
              <p className="text-subtext leading-relaxed">
                3.5+ years crafting responsive, accessible, and performant web applications using modern React, JavaScript, and CSS frameworks. Specialized in building scalable user interfaces with exceptional user experiences.
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
                  <h3 className="text-xl font-bold text-foreground">Network Engineering</h3>
                  <p className="text-accent2 font-medium">System Infrastructure</p>
                </div>
              </div>
              <p className="text-subtext leading-relaxed">
                2.5+ years as Network Engineer developing deep understanding of system reliability, performance tuning, and API architectures. Expert in optimizing network performance and troubleshooting complex infrastructure issues.
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
                  Real-time
                </motion.div>
                <p className="text-sm text-subtext font-medium">Status Monitoring</p>
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
                  Performance
                </motion.div>
                <p className="text-sm text-subtext font-medium">Optimization</p>
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
                Specialized in EV Charging Management Systems at{" "}
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
                3.5+
              </motion.div>
              <p className="text-subtext">Years Frontend Development</p>
            </div>
            <div className="text-center p-6">
              <motion.div
                className="text-3xl font-bold text-cyan-500 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
              >
                2.5+
              </motion.div>
              <p className="text-subtext">Years Network Engineering</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}