import { useEffect, useRef, useCallback } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const animate = useCallback((currentTime) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Throttle animation for better performance - reduced to ~15fps
    if (animationRef.current && currentTime - animationRef.current < 67) {
      requestAnimationFrame(animate);
      return;
    }
    animationRef.current = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Simplified particle system - even fewer particles
    const particles = [];
    const particleCount = Math.min(5, Math.floor((canvas.width * canvas.height) / 150000));

    // Create fewer particles with simpler properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }

    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(87, 255, 167, ${particle.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
