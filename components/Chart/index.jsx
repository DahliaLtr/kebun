import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bagus",
        backgroundColor: "rgba(6, 70, 53)",
        data: [0, 0, 0 ,0 , 0, 0, 30, 10, 40, 50, 70, 80, 60],
      },
      {
        label: "Kurang Bagus",
        backgroundColor: "rgba(254, 84, 24)",
        data: [0, 0, 0 ,0 , 0, 0, 30, 80, 90, 50, 40, 20, 10],
      },
    ],
  };

  return(
    <div>
      <Bar data={data}/>
    </div>
  )
};

export default BarChart;