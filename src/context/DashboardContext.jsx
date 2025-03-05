import React, { createContext, useState, useEffect } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // Load saved widget preferences from localStorage
  const storedPreferences = JSON.parse(localStorage.getItem("dashboardPrefs")) || {
    showWeather: true,
    showTasks: true,
    showQuotes: true,
  };

  const [widgetVisibility, setWidgetVisibility] = useState(storedPreferences);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("dashboardPrefs", JSON.stringify(widgetVisibility));
  }, [widgetVisibility]);

  // Toggle widget visibility
  const toggleWidget = (widget) => {
    setWidgetVisibility((prev) => ({
      ...prev,
      [widget]: !prev[widget],
    }));
  };

  return (
    <DashboardContext.Provider value={{ widgetVisibility, toggleWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};
