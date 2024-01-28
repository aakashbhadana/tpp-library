import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function LineGraph({ data, xLabelKey, yLabelKey, legends = [], width, height, className = "", animation = true }) {
	return (
		<LineChart className={className} width={width} height={height} data={data}>
			<XAxis dataKey={xLabelKey} />
			<YAxis dataKey={yLabelKey} />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey={legends[0].title} stroke={legends[0].color} activeDot={{ r: 8 }} strokeWidth={2} />
		</LineChart>
	);
}

export default LineGraph;
