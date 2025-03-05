import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const WidgetToggle = () => {
  const { widgetVisibility, toggleWidget } = useContext(DashboardContext);

  return (
    <div className="widget-toggle">
      <h3>Customize Dashboard</h3>
      <label>
        <input
          type="checkbox"
          checked={widgetVisibility.showWeather}
          onChange={() => toggleWidget("showWeather")}
        />
        Show Weather
      </label>
      <label>
        <input
          type="checkbox"
          checked={widgetVisibility.showTasks}
          onChange={() => toggleWidget("showTasks")}
        />
        Show Tasks
      </label>
      <label>
        <input
          type="checkbox"
          checked={widgetVisibility.showQuotes}
          onChange={() => toggleWidget("showQuotes")}
        />
        Show Quotes
      </label>
    </div>
  );
};

export default WidgetToggle;
