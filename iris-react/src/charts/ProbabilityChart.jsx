import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "../constants/iris";

export default function ProbabilityChart({ probabilities }) {
  const chartData = Object.entries(probabilities).map(([name, p]) => ({
    name,
    percent: Math.round(p * 1000) / 10,
  }));

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 20, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} unit="%" />
          <Tooltip formatter={(v) => `${v}%`} />
          <Bar dataKey="percent" radius={[4, 4, 0, 0]}>
            {chartData.map((d) => (
              <Cell key={d.name} fill={COLORS[d.name] ?? "#888"} />
            ))}
            <LabelList dataKey="percent" position="top" formatter={(v) => `${v}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
