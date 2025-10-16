import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}