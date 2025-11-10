// Custom hook for accessibility enhancements
import { useEffect, useState } from 'react';

export const useAccessibility = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isScreenReader, setIsScreenReader] = useState(false);

  useEffect(() => {
    // Check for high contrast mode
    const checkHighContrast = () => {
      const testEl = document.createElement('div');
      testEl.style.color = 'rgb(31, 41, 55)';
      testEl.style.backgroundColor = 'rgb(255, 255, 255)';
      document.body.appendChild(testEl);

      const computedColor = window.getComputedStyle(testEl).color;
      const computedBg = window.getComputedStyle(testEl).backgroundColor;

      // If colors are the same, high contrast mode might be active
      const isHighContrastMode = computedColor === computedBg;
      setIsHighContrast(isHighContrastMode);

      document.body.removeChild(testEl);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    };

    // Check for screen reader usage (rough detection)
    const checkScreenReader = () => {
      // Check if user is navigating with keyboard
      let keyboardNavigation = false;
      const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          keyboardNavigation = true;
        }
      };

      const handleMouseMove = () => {
        keyboardNavigation = false;
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousemove', handleMouseMove);

      // Check for screen reader indicators
      const hasScreenReader = window.navigator.userAgent.includes('NVDA') ||
                             window.navigator.userAgent.includes('JAWS') ||
                             window.navigator.userAgent.includes('VoiceOver') ||
                             document.querySelector('[aria-live]') !== null;

      setIsScreenReader(hasScreenReader || keyboardNavigation);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    };

    checkHighContrast();
    const cleanupReducedMotion = checkReducedMotion();
    const cleanupScreenReader = checkScreenReader();

    return () => {
      cleanupReducedMotion?.();
      cleanupScreenReader?.();
    };
  }, []);

  return {
    isHighContrast,
    prefersReducedMotion,
    isScreenReader
  };
};

// Hook for managing focus and keyboard navigation
export const useKeyboardNavigation = (items, onSelect) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0 && onSelect) {
          onSelect(items[focusedIndex], focusedIndex);
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
    }
  };

  return {
    focusedIndex,
    setFocusedIndex,
    handleKeyDown
  };
};

// Hook for managing ARIA live regions
export const useLiveRegion = (priority = 'polite') => {
  const [message, setMessage] = useState('');

  const announce = (text) => {
    setMessage(text);
    // Clear the message after it's been announced
    setTimeout(() => setMessage(''), 1000);
  };

  return {
    message,
    announce,
    liveRegionProps: {
      'aria-live': priority,
      'aria-atomic': 'true',
      role: 'status'
    }
  };
};