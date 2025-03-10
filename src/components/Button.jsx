import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Click Me
    </motion.button>
  );
};

export default Button;
