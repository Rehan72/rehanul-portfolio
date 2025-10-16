import Section from "./Section.jsx";
import { useForm } from "react-hook-form";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("Contact form:", data);
    reset();
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
            <input
              {...register("name", { required: true })}
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              className="rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              rows={5}
              className="rounded-lg border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-accent/60"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="rounded-full bg-accent px-6 py-3 font-medium text-black shadow-glow"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </Section>
  );
}