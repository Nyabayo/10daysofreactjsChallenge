import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import Weather from "./components/Weather";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle

const App = () => {
  return (
    <div className="min-h-screen p-4 transition-all duration-300 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="container mx-auto">
        <ThemeToggle /> {/* Theme Switch Button */}
        <TodoList />
        <PomodoroTimer />
        <Weather />
        <Quote />
      </div>
    </div>
  );
};

export default App;
