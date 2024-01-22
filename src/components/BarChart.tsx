"use client";
import { chartData } from "@/lib/data";
import {
  ResponsiveContainer,
  BarChart as BarGraph,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

export default function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={chartData}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={"12"}
        />
        <YAxis
          dataKey={"total"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={"12"}
          domain={[0, "dataMax + 2000"]}
          tickFormatter={(val) => `${val.toLocaleString()}`}
        />
        <Tooltip />
        <Bar dataKey={"total"} radius={[6, 6, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
