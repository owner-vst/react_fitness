// import React, { useState, useEffect } from "react";
// import ApexCharts from "react-apexcharts";

// const CalorieChart = () => {
//   const [optionsTimeline, setOptionsTimeline] = useState({
//     chart: {
//       type: "bar",
//       height: 320,
//       stacked: true,
//       toolbar: {
//         show: false,
//       },
//       sparkline: {
//         // enabled: true
//       },
//       backgroundBarRadius: 5,
//       offsetX: -10,
//     },
//     series: [
//       {
//         name: "Intake",
//         data: [
//           70, 20, 75, 20, 50, 40, 65, 15, 40, 55, 60, 20, 75, 40, 25, 70, 20,
//           40, 65, 50,
//         ],
//       },
//       {
//         name: "Burned",
//         data: [
//           -60, -10, -50, -25, -30, -65, -22, -10, -50, -20, -70, -35, -60, -20,
//           -30, -45, -70, -50, -45, -10,
//         ],
//       },
//     ],
//     plotOptions: {
//       bar: {
//         columnWidth: "20%",
//         endingShape: "rounded",
//         colors: {
//           backgroundBarColors: [
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//             "rgba(0,0,0,0)",
//           ],
//           backgroundBarOpacity: 1,
//           backgroundBarRadius: 5,
//           opacity: 0,
//         },
//       },
//       distributed: true,
//     },
//     colors: ["#6EC51E", "#FF285C"],
//     grid: {
//       show: true,
//     },
//     legend: {
//       show: false,
//     },
//     fill: {
//       opacity: 1,
//     },
//     dataLabels: {
//       enabled: false,
//       colors: ["#6EC51E", "#FF285C"],
//       dropShadow: {
//         enabled: true,
//         top: 1,
//         left: 1,
//         blur: 1,
//         opacity: 1,
//       },
//     },
//     xaxis: {
//       categories: [
//         "01",
//         "02",
//         "03",
//         "04",
//         "05",
//         "06",
//         "07",
//         "08",
//         "09",
//         "10",
//         "11",
//         "12",
//         "13",
//         "14",
//         "15",
//         "16",
//         "17",
//         "18",
//         "19",
//         "20",
//       ],
//       labels: {
//         style: {
//           colors: "#787878",
//           fontSize: "13px",
//           fontFamily: "Poppins",
//           fontWeight: 400,
//         },
//       },
//       crosshairs: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: "#787878",
//           fontSize: "13px",
//           fontFamily: "Poppins",
//           fontWeight: 400,
//         },
//       },
//     },
//     tooltip: {
//       x: {
//         show: true,
//       },
//     },
//   });

//   useEffect(() => {
//     // Force chart re-render after initial load
//     const chart = document.querySelector("#chartTimeline11");
//     if (chart) {
//       // You can use ApexCharts API to render again
//       chart.innerHTML = ""; // Reset the chart
//       const chartTimelineRender = new ApexCharts(chart, optionsTimeline);
//       chartTimelineRender.render();
//     }
//   }, [optionsTimeline]);

//   return (
//     <div id="chartTimeline">
//       <ApexCharts
//         options={optionsTimeline}
//         series={optionsTimeline.series}
//         type="bar"
//         height={320}
//       />
//     </div>
//   );
// };

// export default CalorieChart;
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CalorieChart = () => {
  // Data for the chart
  const data = [
    { month: "01", Intake: 70, Burned: -60 },
    { month: "02", Intake: 20, Burned: -10 },
    { month: "03", Intake: 75, Burned: -50 },
    { month: "04", Intake: 20, Burned: -25 },
    { month: "05", Intake: 50, Burned: -30 },
    { month: "06", Intake: 40, Burned: -65 },
    { month: "07", Intake: 65, Burned: -22 },
    { month: "08", Intake: 15, Burned: -10 },
    { month: "09", Intake: 40, Burned: -50 },
    { month: "10", Intake: 55, Burned: -20 },
    { month: "11", Intake: 60, Burned: -70 },
    { month: "12", Intake: 20, Burned: -35 },
    { month: "13", Intake: 75, Burned: -60 },
    { month: "14", Intake: 40, Burned: -20 },
    { month: "15", Intake: 25, Burned: -30 },
    { month: "16", Intake: 70, Burned: -45 },
    { month: "17", Intake: 20, Burned: -70 },
    { month: "18", Intake: 40, Burned: -50 },
    { month: "19", Intake: 65, Burned: -45 },
    { month: "20", Intake: 50, Burned: -10 },
  ];

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Intake"
            stroke="#6EC51E"
            fill="#6EC51E"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Burned"
            stroke="#FF285C"
            fill="#FF285C"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CalorieChart;
