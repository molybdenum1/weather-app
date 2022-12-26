import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as Chartjs} from 'chart.js/auto';

interface iDataset {
    label: string;
    data: number[];
}

interface ChartData {
    labels: number[];
    datasets: iDataset[];
}
export interface iChartData {
    chartData: ChartData
}

const ChartBar: FC<iChartData>= ({chartData}): JSX.Element => {
    console.log(chartData);
    
    return ( 
        <>a</>
        //<Bar data={chartData}/>
     );
}
 
export default ChartBar;