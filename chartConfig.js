// src/chartConfig.js
export const chartData = {
    labels: ["5 Jul", "6 Jul", "7 Jul", "8 Jul", "9 Jul", "10 Jul", "11 Jul"],
    datasets: [
      {
        label: "Spend",
        data: [100, 300, 700, 500, 300, 200, 400],
        borderColor: "#F97316", // orange
        backgroundColor: "rgba(249, 115, 22, 0.1)", // light orange fill
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  export const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
  };
  