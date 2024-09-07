import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChar";
import Aditional from "./Aditional";
import { statsData } from '../Utils/DummyData';
import Card from "./Card";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);


const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Performance Overview.</p>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statsData.map((stat) => (
          <Card
            key={stat.id}
            title={stat.title}
            stat={stat.stat}
            change={stat.change}
            bgColor={stat.bgColor}
          />
        ))}
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Pie Chart */}
        <PieChart />

        {/* Line Chart */}
       <LineChart />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <BarChart />

        {/* Additional Stats or Activity Log */}
        <Aditional />
      </section>
    </div>
  );
};

export default DashBoard;