import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./index.css"; // Ensure Tailwind is applied

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Section */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Safaricom Dashboard</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="M-Pesa" description="Send and receive money easily" />
          <Card title="Safaricom Internet" description="Fast and reliable data packages" />
          <Card title="Customer Support" description="Get help anytime, anywhere" />
        </div>
      </div>
    </div>
  );
}

export default App;
