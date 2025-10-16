import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} border-2 border-accent/20 border-t-accent rounded-full`}
          animate={{
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        <motion.div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'} bg-accent rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
    </div>
  );
}