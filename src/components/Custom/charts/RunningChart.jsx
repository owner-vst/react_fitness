import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const RunningChart = () => {
  const data = [
    { month: "Jan", Running: 20 },
    { month: "Feb", Running: 40 },
    { month: "Mar", Running: 20 },
    { month: "Apr", Running: 80 },
    { month: "May", Running: 40 },
    { month: "Jun", Running: 40 },
    { month: "Jul", Running: 20 },
    { month: "Aug", Running: 60 },
    { month: "Sep", Running: 60 },
    { month: "Oct", Running: 20 },
    { month: "Nov", Running: 110 },
    { month: "Dec", Running: 60 },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Running"
          stroke="#FF9432"
          strokeWidth={3}
          activeDot={{ r: 8 }}
          dot={{ fill: "#FF9432", strokeWidth: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RunningChart;
