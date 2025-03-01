import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import PomodoroTimer from "./components/PomodoroTimer";
import Weather from "./components/Weather";
import Quote from "./components/Quote";  // Import Quote component

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <TodoList />
        <PomodoroTimer />
        <Weather />
        <Quote />  {/* Display the Quote component */}
      </div>
    </div>
  );
};

export default App;
