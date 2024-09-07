import { Pie } from 'react-chartjs-2';
import { pieData } from '../Utils/DummyData';

const PieChart = () => {
  return(
    <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Department Spendings</h2>
    <Pie data={pieData} />
  </div>
  );
};

export default PieChart;