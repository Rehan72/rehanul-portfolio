import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { testimonials } from "../data/testimonials.js";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <blockquote className="text-subtext mb-6 flex-grow leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
        />
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-accent">{testimonial.role}</p>
          <p className="text-xs text-subtext">{testimonial.company}</p>
        </div>
      </div>

      {/* Project */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Project: <span className="text-accent font-medium">{testimonial.project}</span>
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">Client Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          What clients and colleagues say about working with me on their projects.
        </p>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-accent to-accent2 rounded-full mx-auto mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}`}
              className="transform transition-all duration-500 ease-out"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {totalSlides > 1 && (
          <div className="flex flex-col items-center gap-6">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-3 bg-accent shadow-lg"
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
              >
                {isAutoPlaying ? (
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m-7 1V6a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                )}
              </button>

              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-card rounded-full border border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{testimonials.length}</div>
            <div className="text-xs text-muted-foreground">Happy Clients</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              {(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)}
            </div>
            <div className="text-xs text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </Section>
  );
}