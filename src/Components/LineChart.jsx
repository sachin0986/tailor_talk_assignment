import { Line } from 'react-chartjs-2';
import { lineData } from '../Utils/DummyData';


const LineChart = () => {
  return(
    <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Monthly Sales Revenue</h2>
    <Line data={lineData} />
  </div>
  );
};


export default LineChart;