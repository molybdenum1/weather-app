import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    backgroundColor: "#7b946b",
    title: {
      display: true,
      text: "Forecast for 5 days",
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar: FC<{ labels: number[]; data: string[] }> = ({
  labels,
  data,
}): JSX.Element => {
  const datas = {
    labels: data,
    datasets: [
      {
        label: "Temperature",
        data: labels,
        backgroundColor: "#9c27b0",
      },
    ],
    color: '#570C63'
  };
  return <div className="chart-bar">
    <Bar data={datas} options={options} />
  </div>
  ;
};

export default ChartBar;
