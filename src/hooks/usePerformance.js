// Performance monitoring hook for Core Web Vitals and custom metrics
import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState({
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    fcp: null, // First Contentful Paint
    ttfb: null, // Time to First Byte
    fps: null, // Frames per second
    memoryUsage: null, // Memory usage
    loadTime: null, // Page load time
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    let fpsCounter = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    // Monitor FPS
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }

      if (isMonitoring) {
        requestAnimationFrame(measureFPS);
      }
    };

    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Contentful Paint
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

        } catch (error) {
          console.warn('Performance monitoring not fully supported:', error);
        }
      }

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));

        // Page load time
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memoryUsage = {
          used: performance.memory.usedJSHeapSize,
          total: performance.memory.totalJSHeapSize,
          limit: performance.memory.jsHeapSizeLimit
        };
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Start monitoring
    const startMonitoring = () => {
      setIsMonitoring(true);
      measureWebVitals();
      requestAnimationFrame(measureFPS);
    };

    // Stop monitoring
    const stopMonitoring = () => {
      setIsMonitoring(false);
    };

    // Auto-start monitoring after page load
    if (document.readyState === 'complete') {
      startMonitoring();
    } else {
      window.addEventListener('load', startMonitoring);
    }

    return () => {
      stopMonitoring();
      window.removeEventListener('load', startMonitoring);
    };
  }, [isMonitoring]);

  // Manual control functions
  const startMonitoring = () => setIsMonitoring(true);
  const stopMonitoring = () => setIsMonitoring(false);

  // Get performance score (0-100)
  const getPerformanceScore = () => {
    const { lcp, fid, cls } = metrics;
    if (!lcp || !fid || !cls) return null;

    // Score calculation based on Core Web Vitals thresholds
    const lcpScore = lcp <= 2500 ? 100 : lcp <= 4000 ? 75 : 50;
    const fidScore = fid <= 100 ? 100 : fid <= 300 ? 75 : 50;
    const clsScore = cls <= 0.1 ? 100 : cls <= 0.25 ? 75 : 50;

    return Math.round((lcpScore + fidScore + clsScore) / 3);
  };

  // Get performance grade
  const getPerformanceGrade = () => {
    const score = getPerformanceScore();
    if (!score) return 'Unknown';

    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    performanceScore: getPerformanceScore(),
    performanceGrade: getPerformanceGrade()
  };
};

// Hook for tracking component render performance
export const useRenderPerformance = (componentName) => {
  const [renderCount, setRenderCount] = useState(0);
  const [renderTimes, setRenderTimes] = useState([]);

  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      setRenderCount(prev => prev + 1);
      setRenderTimes(prev => [...prev.slice(-9), renderTime]); // Keep last 10 renders

      // Log slow renders in development
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(`${componentName} slow render: ${renderTime.toFixed(2)}ms`);
      }
    };
  });

  const averageRenderTime = renderTimes.length > 0
    ? renderTimes.reduce((a, b) => a + b, 0) / renderTimes.length
    : 0;

  return {
    renderCount,
    averageRenderTime,
    lastRenderTime: renderTimes[renderTimes.length - 1] || 0
  };
};