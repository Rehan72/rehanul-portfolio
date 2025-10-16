export default function SkeletonScreen({ className = "" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        <div className="h-4 bg-card/50 rounded-lg animate-pulse" />
        <div className="h-4 bg-card/50 rounded-lg w-3/4 animate-pulse" />
        <div className="h-4 bg-card/50 rounded-lg w-1/2 animate-pulse" />
      </div>
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="aspect-[16/10] bg-card/50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="p-6 space-y-4">
        <motion.div
          className="h-6 bg-card/50 rounded-lg w-3/4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="space-y-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        >
          <div className="h-4 bg-card/50 rounded" />
          <div className="h-4 bg-card/50 rounded w-5/6" />
        </motion.div>
        <motion.div
          className="flex gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        >
          <div className="h-6 bg-card/50 rounded-full w-16" />
          <div className="h-6 bg-card/50 rounded-full w-20" />
          <div className="h-6 bg-card/50 rounded-full w-14" />
        </motion.div>
      </div>
    </motion.div>
  );
}