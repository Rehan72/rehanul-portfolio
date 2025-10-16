import { motion } from "framer-motion";
import { useRef } from "react";

export default function AnimatedProgressBar({
  label,
  percentage,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);

  return (
    <div ref={ref} className={`mb-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-subtext">{percentage}%</span>
      </div>
      <div className="h-2 bg-card/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.5,
            delay,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
      </div>
    </div>
  );
}