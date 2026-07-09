import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", hours: 1200 },
  { day: "Tue", hours: 1800 },
  { day: "Wed", hours: 1600 },
  { day: "Thu", hours: 2200 },
  { day: "Fri", hours: 2600 },
  { day: "Sat", hours: 3400 },
  { day: "Sun", hours: 2900 },
];

function WatchChart() {
  return (
    <div className="chart-card">
      <h2>Weekly Watch Time</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#3B82F6"
            strokeWidth={4}
            dot={{ r:5 }}
            activeDot={{ r:8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WatchChart;