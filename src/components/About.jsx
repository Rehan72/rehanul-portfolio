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
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold">Frontend Expertise</h3>
              </div>
              <p className="text-subtext">
                3.5+ years crafting responsive, accessible, and performant web applications using modern React, JavaScript, and CSS frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mr-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 002 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold">Network Engineering</h3>
              </div>
              <p className="text-subtext">
                2.5+ years as Network Engineer developing deep understanding of system reliability, performance tuning, and API architectures.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="card p-8 mb-12"
          >
            <div className="text-center mb-6">
              <motion.h3
                className="text-2xl font-semibold mb-2"
                whileHover={{ scale: 1.05 }}
              >
                Domain Expertise
              </motion.h3>
              <motion.div
                className="w-16 h-0.5 bg-accent mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-4 rounded-lg bg-accent/5"
              >
                <motion.div
                  className="text-2xl font-bold text-accent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  EV Charging
                </motion.div>
                <p className="text-sm text-subtext">Management Systems</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-4 rounded-lg bg-cyan-500/5"
              >
                <motion.div
                  className="text-2xl font-bold text-cyan-500 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Real-time
                </motion.div>
                <p className="text-sm text-subtext">Status Monitoring</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-4 rounded-lg bg-green-500/5"
              >
                <motion.div
                  className="text-2xl font-bold text-green-500 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Performance
                </motion.div>
                <p className="text-sm text-subtext">Optimization</p>
              </motion.div>
            </div>
            <p className="text-subtext text-center mt-6">
              Specialized in EV Charging Management Systems at <a href="#" className="text-accent hover:underline">saminTekmind.com</a>
            </p>
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