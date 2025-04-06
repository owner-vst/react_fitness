// import React from "react";
// import {
//   RadialBarChart,
//   RadialBar,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const RadialChart = () => {
//   // Data for the Radial Bar Chart
//   const data = [
//     {
//       name: "Progress",
//       value: 81,
//       fill: "#6EC51E", // Color for the radial bar
//     },
//   ];

//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart
//           innerRadius="50%"
//           outerRadius="80%"
//           data={data}
//           startAngle={-135}
//           endAngle={135}
//         >
//           <RadialBar
//             minAngle={15}
//             clockWise={true}
//             dataKey="value"
//             fill="#6EC51E"
//             stroke="#6EC51E"
//             cornerRadius={10}
//           />
//           <Tooltip
//             content={({ active, payload }) => {
//               if (active && payload && payload.length) {
//                 return (
//                   <div
//                     style={{
//                       background: "white",
//                       padding: "10px",
//                       borderRadius: "5px",
//                       boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                     }}
//                   >
//                     <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
//                   </div>
//                 );
//               }
//               return null;
//             }}
//           />
//         </RadialBarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RadialChart;
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";

// Radial Chart (Pie) Component
const RadialChart = () => {
  const [value, setValue] = useState(70); // The value that the chart represents (0 to 100)
  const data = [
    { name: "Progress", value: value, fill: "#6EC51E" }, // Progress section color
    { name: "Remaining", value: 100 - value, fill: "#e0e0e0" }, // Remaining section color
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%" // Center of the chart
            cy="50%" // Center of the chart
            innerRadius="50%" // Inner radius to create a donut chart effect
            outerRadius="80%" // Outer radius of the pie chart
            paddingAngle={5} // Space between slices
            dataKey="value"
            startAngle={90} // Start angle for rotation (makes it look like a clock)
            endAngle={-270} // End angle (finishes the chart)
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
            {/* Labels inside the chart */}
            <Label
              value={`${value}%`} // Display the value in the center
              position="center"
              fontSize={24}
              fontWeight="bold"
              fill="#333"
            />
          </Pie>

          {/* Adding a custom legend for better context */}
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{
              paddingTop: "10px",
              fontSize: "14px",
              fontFamily: "Poppins",
              color: "#333",
            }}
          />

          {/* Tooltip (shows on hover) */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            labelStyle={{
              color: "#333",
            }}
            itemStyle={{
              color: "#333",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialChart;
