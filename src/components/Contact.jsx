import Section from "./Section.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      setSubmitStatus('sending');

      // Simulate API call - replace with actual email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <Section id="contact">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl">Contact</h2>
          <p className="mt-3 text-subtext">
            Let’s collaborate on reliable, performant frontends.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">GitHub</a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card p-6">
          <div className="grid gap-4">
            <div>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" }
                })}
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60 transition-colors"
                aria-label="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Email"
                type="email"
                className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60 transition-colors"
                aria-label="Email address"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" }
                })}
                placeholder="Message"
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60 transition-colors resize-none"
                aria-label="Your message"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-accent px-6 py-3 font-medium text-black shadow-glow hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-sm text-center bg-green-400/10 rounded-lg py-2 px-4">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2 px-4">
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}