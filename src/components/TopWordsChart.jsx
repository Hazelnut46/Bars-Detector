import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// register chart.js parts
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TopWordsChart({ words, counts }) {
  const data = {
    labels: words,
    datasets: [
      {
        label: "Word Frequency",
        data: counts,
        backgroundColor: "rgba(176, 38, 255, 0.7)", // neon purple
        borderColor: "rgba(176, 38, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { labels: { color: "white" } },
    },
  };

  return (
    <div className="bg-white/5 p-4 rounded mt-6">
      <h2 className="text-neonPurple font-bold mb-4 text-center">
        Word Frequency Chart
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}

