// import React, { useState, useEffect } from "react";
// import ApexCharts from "react-apexcharts";

// const DashboardAdminCharts = () => {
//   const [optionsArea, setOptionsArea] = useState({
//     series: [
//       {
//         name: "Yoga",
//         data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120],
//       },
//       {
//         name: "Cycling",
//         data: [50, 100, 35, 35, 0, 0, 80, 20, 40, 40, 40, 40],
//       },
//       {
//         name: "Running",
//         data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60],
//       },
//     ],
//     chart: {
//       height: 350,
//       type: "area",
//       group: "social",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       width: [4, 4, 4],
//       colors: ["#C046D3", "#1EA7C5", "#FF9432"],
//       curve: "straight",
//     },
//     legend: {
//       show: false,
//       tooltipHoverFormatter: function (val, opts) {
//         return (
//           val +
//           " - " +
//           opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
//           ""
//         );
//       },
//       markers: {
//         fillColors: ["#C046D3", "#1EA7C5", "#FF9432"],
//         width: 19,
//         height: 19,
//         strokeWidth: 0,
//         radius: 19,
//       },
//     },
//     markers: {
//       size: [8, 8, 6],
//       strokeWidth: [0, 0, 4],
//       strokeColors: ["#C046D3", "#1EA7C5", "#FF9432"],
//       border: 0,
//       colors: ["#C046D3", "#1EA7C5", "#fff"],
//       hover: {
//         size: 10,
//       },
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       labels: {
//         style: {
//           colors: "#3E4954",
//           fontSize: "14px",
//           fontFamily: "Poppins",
//           fontWeight: 100,
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         offsetX: -16,
//         style: {
//           colors: "#3E4954",
//           fontSize: "14px",
//           fontFamily: "Poppins",
//           fontWeight: 100,
//         },
//       },
//     },
//     fill: {
//       colors: ["#C046D3", "#1EA7C5", "#FF9432"],
//       type: "solid",
//       opacity: 0,
//     },
//     colors: ["#C046D3", "#1EA7C5", "#FF9432"],
//     grid: {
//       borderColor: "#f1f1f1",
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 575,
//         options: {
//           markers: {
//             size: [6, 6, 4],
//             hover: {
//               size: 7,
//             },
//           },
//         },
//       },
//     ],
//   });

//   useEffect(() => {
//     // Force chart re-render after initial load
//     const chart = document.querySelector("#chartBar30");
//     if (chart) {
//       // You can use ApexCharts API to render again
//       chart.innerHTML = ""; // Reset the chart
//       const chartAreaRender = new ApexCharts(chart, optionsArea);
//       chartAreaRender.render();
//     }
//   }, [optionsArea]);

//   return (
//     <div id="chartBar">
//       <ApexCharts
//         options={optionsArea}
//         series={optionsArea.series}
//         type="area"
//         height={350}
//       />
//     </div>
//   );
// };

// export default DashboardAdminCharts;
import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardAdminCharts = () => {
  const [data, setData] = useState([
    { month: "Jan", Yoga: 65, Cycling: 50, Running: 20 },
    { month: "Feb", Yoga: 65, Cycling: 100, Running: 40 },
    { month: "Mar", Yoga: 65, Cycling: 35, Running: 20 },
    { month: "Apr", Yoga: 120, Cycling: 35, Running: 80 },
    { month: "May", Yoga: 120, Cycling: 0, Running: 40 },
    { month: "Jun", Yoga: 80, Cycling: 0, Running: 40 },
    { month: "Jul", Yoga: 120, Cycling: 80, Running: 20 },
    { month: "Aug", Yoga: 100, Cycling: 20, Running: 60 },
    { month: "Sep", Yoga: 100, Cycling: 40, Running: 60 },
    { month: "Oct", Yoga: 120, Cycling: 40, Running: 20 },
    { month: "Nov", Yoga: 120, Cycling: 40, Running: 110 },
    { month: "Dec", Yoga: 120, Cycling: 40, Running: 60 },
  ]);

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Yoga"
            stroke="#C046D3"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Cycling"
            stroke="#1EA7C5"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Running"
            stroke="#FF9432"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardAdminCharts;
