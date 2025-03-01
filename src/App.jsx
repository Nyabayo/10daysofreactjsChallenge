import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import Weather from "./components/Weather"; // Import Weather Component

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <TodoList />
        <PomodoroTimer />
        <Weather /> {/* Display Weather Component */}
      </div>
    </div>
  );
};

export default App;
