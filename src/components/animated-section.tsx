import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const AnimatedSection = ({ children, className, id }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: -50,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
