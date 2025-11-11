import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePerformance } from "../hooks/usePerformance.js";

const PerformanceMonitor = memo(() => {
  const { metrics, performanceScore, performanceGrade, isMonitoring } = usePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show in development or when explicitly enabled
  useEffect(() => {
    const showMonitor = localStorage.getItem('show-performance-monitor') === 'true' ||
                        import.meta.env.DEV;

    if (showMonitor) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (score) => {
    if (!score) return 'text-muted-foreground';
    if (score >= 90) return 'text-green-500';
    if (score >= 75) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const formatTime = (ms) => {
    if (!ms) return 'N/A';
    return `${ms.toFixed(1)}ms`;
  };

  const formatBytes = (bytes) => {
    if (!bytes) return 'N/A';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(1)}${units[unitIndex]}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 right-4 z-50 max-w-sm"
      >
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-card/50 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm font-medium">Performance Monitor</span>
            </div>
            <div className="flex items-center gap-2">
              {performanceScore && (
                <span className={`text-sm font-bold ${getScoreColor(performanceScore)}`}>
                  {performanceScore}
                </span>
              )}
              <motion.svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border"
              >
                <div className="p-3 space-y-3 max-h-96 overflow-y-auto">
                  {/* Performance Grade */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Grade</span>
                    <span className={`text-sm font-medium ${getScoreColor(performanceScore)}`}>
                      {performanceGrade}
                    </span>
                  </div>

                  {/* Core Web Vitals */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Core Web Vitals
                    </h4>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">LCP</span>
                        <span className={metrics.lcp && metrics.lcp > 2500 ? 'text-red-500' : 'text-green-500'}>
                          {formatTime(metrics.lcp)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">FID</span>
                        <span className={metrics.fid && metrics.fid > 100 ? 'text-red-500' : 'text-green-500'}>
                          {formatTime(metrics.fid)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CLS</span>
                        <span className={metrics.cls && metrics.cls > 0.1 ? 'text-red-500' : 'text-green-500'}>
                          {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">FCP</span>
                        <span className={metrics.fcp && metrics.fcp > 1800 ? 'text-red-500' : 'text-green-500'}>
                          {formatTime(metrics.fcp)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Additional Metrics
                    </h4>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">TTFB</span>
                        <span>{formatTime(metrics.ttfb)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Load Time</span>
                        <span>{formatTime(metrics.loadTime)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">FPS</span>
                        <span className={metrics.fps && metrics.fps < 30 ? 'text-red-500' : 'text-green-500'}>
                          {metrics.fps || 'N/A'}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memory</span>
                        <span>
                          {metrics.memoryUsage ? formatBytes(metrics.memoryUsage.used) : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Memory Details */}
                  {metrics.memoryUsage && (
                    <div className="space-y-1">
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Memory Usage
                      </h4>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(metrics.memoryUsage.used / metrics.memoryUsage.limit) * 100}%`
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{formatBytes(metrics.memoryUsage.used)}</span>
                        <span>{formatBytes(metrics.memoryUsage.limit)}</span>
                      </div>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex gap-2 pt-2 border-t border-border">
                    <button
                      onClick={() => window.location.reload()}
                      className="flex-1 px-3 py-1 text-xs bg-accent text-accent-foreground rounded hover:bg-accent/80 transition-colors"
                    >
                      Refresh
                    </button>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded hover:bg-muted/80 transition-colors"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;