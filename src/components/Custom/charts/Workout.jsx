import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Adjusted data representing activities with decreasing values on weekdays
const data = [
  {
    name: "Monday",
    running: 5000,
    cycling: 3000,
    swimming: 3500,
  },
  {
    name: "Tuesday",
    running: 4800,
    cycling: 2800,
    swimming: 3400,
  },
  {
    name: "Wednesday",
    running: 4600,
    cycling: 2700,
    swimming: 3300,
  },
  {
    name: "Thursday",
    running: 4400,
    cycling: 2600,
    swimming: 3200,
  },
  {
    name: "Friday",
    running: 4200,
    cycling: 2500,
    swimming: 3100,
  },
  {
    name: "Saturday",
    running: 4600,
    cycling: 2900,
    swimming: 3400,
  },
  {
    name: "Sunday",
    running: 5000,
    cycling: 3200,
    swimming: 3600,
  },
];

const Workout = () => (
  <ResponsiveContainer width="100%" height={265}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="running"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
        name="Running"
      />
      <Area
        type="monotone"
        dataKey="cycling"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        name="Cycling"
      />
      <Area
        type="monotone"
        dataKey="swimming"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        name="Swimming"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Workout;
