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

// Adjusted data representing diet with carbs, fats, and protein values on each day of the week
const data = [
  {
    name: "Monday",
    carbs: 200,
    fats: 60,
    protein: 90,
  },
  {
    name: "Tuesday",
    carbs: 210,
    fats: 55,
    protein: 85,
  },
  {
    name: "Wednesday",
    carbs: 220,
    fats: 50,
    protein: 80,
  },
  {
    name: "Thursday",
    carbs: 230,
    fats: 45,
    protein: 95,
  },
  {
    name: "Friday",
    carbs: 240,
    fats: 50,
    protein: 100,
  },
  {
    name: "Saturday",
    carbs: 250,
    fats: 55,
    protein: 105,
  },
  {
    name: "Sunday",
    carbs: 260,
    fats: 60,
    protein: 110,
  },
];

const Diet = () => (
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
        dataKey="carbs"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
        name="Carbs"
      />
      <Area
        type="monotone"
        dataKey="fats"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        name="Fats"
      />
      <Area
        type="monotone"
        dataKey="protein"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        name="Protein"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Diet;
