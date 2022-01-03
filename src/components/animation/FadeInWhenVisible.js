import { animate, motion } from "framer-motion";

const FadeInWhenVisible = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: .4, staggerChildren: 0.5, staggerDirection: 1 }}
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeInWhenVisible;