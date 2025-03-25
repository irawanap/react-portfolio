/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const ShinyText = ({
  text,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  disabled = false,
  speed = 5,
  className = "",
  withBorder = false,
  borderClass = "p-3 border-2 border-white rounded-full",
  animationDelay = 0, // New prop for animation delay
}) => {
  const animationDuration = `${speed}s`;

  return (
    <motion.a
      href={disabled ? undefined : href}
      target={disabled ? undefined : target}
      rel={target === "_blank" ? rel : undefined}
      className={`inline-block ${disabled ? "opacity-50" : "cursor-pointer hover:opacity-90"} ${
        withBorder ? borderClass : ""
      } ${!disabled && withBorder ? "animate-shine" : ""}`}
      style={{
        backgroundImage: withBorder
          ? "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)"
          : "none",
        backgroundSize: "200% 100%",
        backgroundClip: withBorder ? "padding-box, text" : "text",
        animationDuration: withBorder ? animationDuration : "0s",
      }}
      aria-disabled={disabled}
      variants={container(animationDelay)} // Added animation
      initial="hidden"
      animate="visible"
    >
      <span
        className={`text-[#b5b5b5a4] bg-clip-text ${
          !withBorder && !disabled ? "animate-shine" : ""
        } ${className}`}
        style={{
          backgroundImage: !withBorder
            ? "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)"
            : "none",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </span>
    </motion.a>
  );
};

export default ShinyText;