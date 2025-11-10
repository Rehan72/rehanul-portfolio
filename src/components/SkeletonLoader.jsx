import { memo } from "react";
import { motion } from "framer-motion";

const SkeletonLoader = memo(({ className = "", variant = "default" }) => {
  const baseClasses = "loading-shimmer rounded";

  const variants = {
    default: "h-4 bg-muted",
    card: "h-48 bg-muted/50",
    text: "h-4 bg-muted",
    title: "h-6 bg-muted",
    avatar: "w-12 h-12 rounded-full bg-muted",
    button: "h-10 w-24 bg-muted",
    image: "aspect-video bg-muted/30"
  };

  return (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
});

SkeletonLoader.displayName = 'SkeletonLoader';

// Project Card Skeleton
export const ProjectCardSkeleton = memo(() => (
  <div className="card overflow-hidden h-full flex flex-col">
    <SkeletonLoader variant="image" className="rounded-t-xl" />
    <div className="p-6 flex flex-col h-full">
      <div className="flex-grow">
        <SkeletonLoader variant="title" className="mb-3" />
        <div className="space-y-2 mb-4">
          <SkeletonLoader variant="text" className="w-full" />
          <SkeletonLoader variant="text" className="w-3/4" />
          <SkeletonLoader variant="text" className="w-1/2" />
        </div>
      </div>
      <div className="flex gap-2">
        <SkeletonLoader variant="button" className="flex-1" />
        <SkeletonLoader variant="button" className="flex-1" />
        <SkeletonLoader variant="button" className="flex-1" />
      </div>
    </div>
  </div>
));

ProjectCardSkeleton.displayName = 'ProjectCardSkeleton';

// Skills Section Skeleton
export const SkillsSkeleton = memo(() => (
  <div className="mt-12 grid gap-8 md:gap-10 md:grid-cols-2">
    <div className="card p-8">
      <SkeletonLoader variant="title" className="mb-8 w-48" />
      <div className="space-y-5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between">
              <SkeletonLoader variant="text" className="w-20" />
              <SkeletonLoader variant="text" className="w-8" />
            </div>
            <SkeletonLoader className="h-2 w-full bg-muted/50" />
          </div>
        ))}
      </div>
    </div>

    <div className="card p-8">
      <SkeletonLoader variant="title" className="mb-8 w-40" />
      <div className="grid grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center p-4 rounded-lg bg-muted/20">
            <SkeletonLoader variant="title" className="mb-3 w-12 mx-auto" />
            <SkeletonLoader variant="text" className="w-20 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
));

SkillsSkeleton.displayName = 'SkillsSkeleton';

// Hero Section Skeleton
export const HeroSkeleton = memo(() => (
  <section className="relative isolate min-h-[85vh] overflow-hidden">
    <div className="container flex min-h-[85vh] flex-col items-start justify-center">
      <div className="mb-8">
        <SkeletonLoader variant="avatar" className="mx-auto md:mx-0" />
      </div>

      <div className="space-y-4 mb-8">
        <SkeletonLoader variant="title" className="w-64 mx-auto md:mx-0" />
        <SkeletonLoader variant="text" className="w-48 mx-auto md:mx-0" />
        <SkeletonLoader variant="text" className="w-40 mx-auto md:mx-0" />
      </div>

      <div className="space-y-3 mb-8 max-w-2xl">
        <SkeletonLoader variant="text" className="w-full" />
        <SkeletonLoader variant="text" className="w-full" />
        <SkeletonLoader variant="text" className="w-3/4" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SkeletonLoader variant="button" className="w-32" />
        <SkeletonLoader variant="button" className="w-32" />
        <SkeletonLoader variant="button" className="w-32" />
      </div>
    </div>
  </section>
));

HeroSkeleton.displayName = 'HeroSkeleton';

// Generic Content Skeleton
export const ContentSkeleton = memo(({ lines = 3 }) => (
  <div className="space-y-3">
    {[...Array(lines)].map((_, i) => (
      <SkeletonLoader
        key={i}
        variant="text"
        className={i === lines - 1 ? "w-3/4" : "w-full"}
      />
    ))}
  </div>
));

ContentSkeleton.displayName = 'ContentSkeleton';

export default SkeletonLoader;