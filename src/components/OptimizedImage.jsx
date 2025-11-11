import { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OptimizedImage = memo(({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholder = "blur",
  blurDataURL,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => observerRef.current?.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive image sources
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';

    // For external URLs (like Unsplash), use the existing optimized parameters
    if (baseSrc.includes('unsplash.com') || baseSrc.startsWith('http')) {
      // Unsplash already provides optimized images, just use different sizes
      const sizes = [480, 768, 1024, 1280, 1920];
      return sizes
        .map(size => {
          const url = new URL(baseSrc);
          url.searchParams.set('w', size);
          url.searchParams.set('h', Math.round(size * 0.6)); // Maintain aspect ratio
          return `${url.toString()} ${size}w`;
        })
        .join(', ');
    }

    // For local images, use the original logic
    const sizes = [480, 768, 1024, 1280, 1920];

    return sizes
      .map(size => {
        const webpSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, `-${size}w.webp`);
        const fallbackSrc = baseSrc.replace(/\.(jpg|jpeg|png)$/i, `-${size}w.jpg`);
        return `${webpSrc} ${size}w, ${fallbackSrc} ${size}w`;
      })
      .join(', ');
  };

  // Generate placeholder
  const getPlaceholder = () => {
    if (placeholder === "blur" && blurDataURL) {
      return (
        <img
          src={blurDataURL}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover scale-110 blur-sm ${className}`}
          aria-hidden="true"
        />
      );
    }

    return (
      <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />
    );
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : '16/10',
        minHeight: width && height ? undefined : '250px' // Fallback for external images
      }}
    >
      {/* Placeholder */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {getPlaceholder()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-center text-muted-foreground">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Main Image */}
      {isInView && (
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* WebP sources for modern browsers */}
          <source
            srcSet={generateSrcSet(src)}
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
            type="image/webp"
          />

          {/* Fallback sources */}
          {src.includes('unsplash.com') || src.startsWith('http') ? (
            <source
              srcSet={generateSrcSet(src)}
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
            />
          ) : (
            <source
              srcSet={`${src}-480w.jpg 480w, ${src}-768w.jpg 768w, ${src}-1024w.jpg 1024w, ${src}-1280w.jpg 1280w`}
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1280px"
            />
          )}

          <motion.img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </motion.picture>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;