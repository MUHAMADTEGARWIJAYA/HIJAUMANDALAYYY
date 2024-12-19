import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
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

const StatistikDashboard = () => {
  const data = {
    labels: ["00:00", "06:00", "12:00", "18:00"],
    datasets: [
      {
        label: "Produk Toko",
        data: [5, 8, 6, 4],
        backgroundColor: "#0E7490",
      },
      {
        label: "Pesanan",
        data: [4, 5, 6, 7],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik setiap Kriteria",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-800">Statistik</h1>
          <button className="flex items-center bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md shadow transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6-6m-6 6l6 6"
              />
            </svg>
            Download Data
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center bg-teal-50 border-l-4 border-teal-700 p-6 rounded-md shadow-sm hover:shadow-md transition">
            <div className="text-teal-700 w-10 h-10 flex items-center justify-center bg-teal-200 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 4c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-teal-700 font-semibold">Penjualan</h2>
              <p className="text-2xl font-bold">Rp.-</p>
              <p className="text-gray-500 text-sm">Kemarin pada 00:00-23.00</p>
            </div>
          </div>

          <div className="flex items-center bg-blue-50 border-l-4 border-blue-700 p-6 rounded-md shadow-sm hover:shadow-md transition">
            <div className="text-blue-700 w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 4c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 4c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-blue-700 font-semibold">Produk</h2>
              <p className="text-2xl font-bold">4</p>
              <p className="text-gray-500 text-sm">Kemarin pada 00:00-23.00</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StatistikDashboard;
