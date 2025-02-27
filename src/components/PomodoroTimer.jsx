// src/components/PomodoroTimer.jsx
import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const WORK_TIME = 25 * 60; // 25 minutes in seconds
  const BREAK_TIME = 5 * 60; // 5 minutes in seconds

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak((prev) => !prev);
      setTimeLeft(isBreak ? WORK_TIME : BREAK_TIME);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-xl font-bold">{isBreak ? "Break Time" : "Work Time"}</h2>
      <p className="text-4xl font-mono my-4">{formatTime(timeLeft)}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(WORK_TIME);
            setIsBreak(false);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;

