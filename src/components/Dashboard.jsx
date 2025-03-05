import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import WidgetToggle from "./WidgetToggle";

const Dashboard = () => {
  const { widgetVisibility } = useContext(DashboardContext);

  return (
    <div className="dashboard">
      <WidgetToggle /> {/* Widget toggle options */}

      {widgetVisibility.showWeather && <div className="widget">🌤 Weather Widget</div>}
      {widgetVisibility.showTasks && <div className="widget">✅ Task Tracker</div>}
      {widgetVisibility.showQuotes && <div className="widget">💬 Motivational Quote</div>}
    </div>
  );
};

export default Dashboard;
