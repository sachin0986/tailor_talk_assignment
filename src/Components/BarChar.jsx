import { Bar } from 'react-chartjs-2';
import { barData } from '../Utils/DummyData';


const BarChart = () => {
    return(
      <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Product Sales Comparison</h2>
      <Bar data={barData} />
    </div>
    );
};


export default BarChart;