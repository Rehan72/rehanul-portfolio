import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      label: "Years Experience",
      value: 6,
      suffix: "+",
      icon: "⚡",
      color: "from-accent to-accent2"
    },
    {
      label: "Projects Completed",
      value: 25,
      suffix: "+",
      icon: "🚀",
      color: "from-accent2 to-accent"
    },
    {
      label: "Happy Clients",
      value: 15,
      suffix: "+",
      icon: "😊",
      color: "from-green-500 to-accent"
    },
    {
      label: "Technologies",
      value: 20,
      suffix: "+",
      icon: "🛠️",
      color: "from-purple-500 to-accent2"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-card/50 to-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-4">
            By the Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key metrics that showcase my journey and impact in the tech industry
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{stat.icon}</span>
              </motion.div>

              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {isInView ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.span>
                ) : (
                  `0${stat.suffix}`
                )}
              </motion.div>

              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-xl bg-card/50 border border-white/10">
            <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Reliability</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-white/10">
            <div className="text-2xl font-bold text-accent2 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Availability</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-white/10">
            <div className="text-2xl font-bold text-green-500 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Code Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}