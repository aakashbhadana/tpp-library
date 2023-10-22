import React from "react";
import { XAxis, YAxis, Tooltip, Legend, BarChart, CartesianGrid, Bar } from "recharts";

function StackedBar({ data, xLabelKey, yLabelKey, legends = [], width, height, className = "", animation=true }) {
	return (
		<BarChart width={width} height={height} data={data} className={className}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey={xLabelKey} />
			<YAxis dataKey={yLabelKey} />
			<Tooltip />
			<Legend />
			{legends.map((bar, i) => {
				return <Bar isAnimationActive={animation} key={i} barSize={bar.size} dataKey={bar.dataKey} stackId="a" fill={bar.color} radius={i === legends.length - 1 && [8, 8, 0, 0]} />;
			})}
		</BarChart>
	);
}

export default StackedBar;
