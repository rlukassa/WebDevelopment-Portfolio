import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.svg>
      <motion.path
        d="M10 10 H 90 V 90 H 10 Z" // Ensure the 'd' attribute is defined
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }} // Explicitly set initial opacity
      />
    </motion.svg>
  );
};

export default MyComponent;
