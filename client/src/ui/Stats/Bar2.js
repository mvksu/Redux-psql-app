import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export function Bar2({ data }) {
  const labels = data.map((x) => x.director ? x.director.last_name : x.director);
  const values = data.map((x) => x.numbersOfMovies)

  const properdata = {
    labels: labels,
    datasets: [
      {
        label: "Liczba filmów",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={properdata} />;

}
