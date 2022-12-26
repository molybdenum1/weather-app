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
  } from 'chart.js';


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      backgroundColor: '#7b946b',
      title: {
        display: true,
        text: 'Forecast for 5 days',
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

const ChartBar: FC<{labels: number[], data: string[]}>= ({labels, data}): JSX.Element => {
    const datas = {
        labels: data,
            datasets: [{
                label: 'Temps',
                data: labels,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }]
    }
    return (
            <Bar data={datas} options={options}/>
     );
}
 
export default ChartBar;