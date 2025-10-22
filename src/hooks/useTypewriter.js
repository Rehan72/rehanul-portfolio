import { useState, useEffect } from 'react';

export const useTypewriter = (texts, options = {}) => {
  const {
    typingSpeed = 80,
    deletingSpeed = 40,
    delayBetweenTexts = 2500,
    loop = true
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[currentTextIndex];
    const shouldDelete = isDeleting;

    const timeout = setTimeout(() => {
      if (shouldDelete) {
        // Smooth character-by-character deletion
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setIsPaused(true);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            setIsPaused(false);
          }, delayBetweenTexts / 3);
        }
      } else {
        // Smooth character-by-character typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start deleting after short delay
          if (loop || currentTextIndex < texts.length - 1) {
            setIsPaused(true);
            setTimeout(() => {
              setIsDeleting(true);
              setIsPaused(false);
            }, delayBetweenTexts);
          }
        }
      }
    }, shouldDelete ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    loop,
    isPaused
  ]);

  return displayText;
};