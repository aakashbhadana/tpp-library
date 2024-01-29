import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function LineGraph({ data, xLabelKey, yLabelKey, legends = [], width, height, className = "", animation = true }) {
	return (
		<LineChart className={className} width={width} height={height} data={data}>
			<XAxis dataKey={xLabelKey} />
			<YAxis dataKey={yLabelKey} />
			<Tooltip />
			<Legend />
			{legends.map((line, i) => {
				return <Line key={i} type="monotone" dataKey={line.title} stroke={line.color} activeDot={{ r: 4 }} strokeWidth={2} />;
			})}
		</LineChart>
	);
}

export default LineGraph;
