import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

const Statistics = () => {
  const recharts = useLoaderData();

  return (
    <div>
        <h2 className="text-center font-bold text-4xl mt-10 mb-10">Recharts For 7 Assignmrnts Marks</h2>
        <p className="text-center text-white font-bold">Pie Chart</p>
      <PieChart className="lg:ml-96 mt-20" width={730} height={250}>
        <Tooltip></Tooltip>
        <Pie
          data={recharts}
          dataKey="mark"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={recharts}
          dataKey="mark"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
