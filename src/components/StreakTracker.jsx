import React, { useState, useEffect } from "react";

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [lastCompletedDate, setLastCompletedDate] = useState(null);

  useEffect(() => {
    const storedStreak = localStorage.getItem("streak") || 0;
    const storedLongestStreak = localStorage.getItem("longestStreak") || 0;
    const storedLastCompleted = localStorage.getItem("lastCompletedDate");

    setStreak(Number(storedStreak));
    setLongestStreak(Number(storedLongestStreak));
    setLastCompletedDate(storedLastCompleted);
  }, []);

  const completeTask = () => {
    const today = new Date().toISOString().split("T")[0]; // Get YYYY-MM-DD format

    if (lastCompletedDate === today) {
      alert("You have already completed a task today!");
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let newStreak = lastCompletedDate === yesterdayStr ? streak + 1 : 1;
    let newLongestStreak = Math.max(newStreak, longestStreak);

    setStreak(newStreak);
    setLongestStreak(newLongestStreak);
    setLastCompletedDate(today);

    localStorage.setItem("streak", newStreak);
    localStorage.setItem("longestStreak", newLongestStreak);
    localStorage.setItem("lastCompletedDate", today);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md text-center bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold">🔥 Streak Tracker</h2>
      <p>Current Streak: <strong>{streak} days</strong></p>
      <p>Longest Streak: <strong>{longestStreak} days</strong></p>
      <button
        onClick={completeTask}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        ✅ Mark Task as Completed
      </button>
    </div>
  );
};

export default StreakTracker;
