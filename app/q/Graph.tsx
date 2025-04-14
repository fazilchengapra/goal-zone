"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "0m", portugal: 20, belgium: 22 },
  { time: "10m", portugal: 24, belgium: 23 },
  { time: "20m", portugal: 21, belgium: 25 },
  { time: "30m", portugal: 23, belgium: 21 },
  { time: "45m", portugal: 30, belgium: 26 },
  { time: "60m", portugal: 42, belgium: 25 },
  { time: "75m", portugal: 45, belgium: 30 },
  { time: "90m", portugal: 52, belgium: 32 },
];

const CustomLegend = () => {
  return (
    <div className="flex gap-6 my-5 mx-3">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
        <span className="text-sm">Portugal</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-900 inline-block"></span>
        <span className="text-sm">Belgium</span>
      </div>
    </div>
  );
};

const PerformanceChart = () => {
  return (
    <div className="w-full h-auto lg:max-h-[480px] bg-white rounded-xl shadow">
      <div className="mx-4 mt-2 flex flex-row items-center justify-between">
        <h2 className="text-lg mb-4">Graphic Performance</h2>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPortugal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBelgium" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#581c1c" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#581c1c" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            stroke="#ccc"
            width={30}
            tickFormatter={(value) => `${value}`}
            domain={["auto", "auto"]}
            tickCount={6}
            allowDecimals={false}
            style={{ fontSize: "12px" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="portugal"
            stroke="#16a34a"
            fillOpacity={1}
            fill="url(#colorPortugal)"
            name="Portugal"
          />
          <Area
            type="monotone"
            dataKey="belgium"
            stroke="#581c1c"
            fillOpacity={1}
            fill="url(#colorBelgium)"
            name="Belgium"
          />
        </AreaChart>
      </ResponsiveContainer>
      <CustomLegend />
    </div>
  );
};

export default PerformanceChart;
