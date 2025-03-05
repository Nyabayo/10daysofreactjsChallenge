import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle";
import StreakTracker from "./components/StreakTracker";
import Login from "./components/Login"; // Import Login

const App = () => {
  return (
    <div className="min-h-screen p-4 transition-all duration-300 dark:bg-gray-900 dark:text-white">
      {/* Animated Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      <div className="container mx-auto">
        {/* Animated Login */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Login />
        </motion.div>

        {/* Theme Toggle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ThemeToggle />
        </motion.div>

        {/* Other Components with animations */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TodoList />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <PomodoroTimer />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Weather />
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Quote />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <StreakTracker />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
