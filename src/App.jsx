// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList/TodoList.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
