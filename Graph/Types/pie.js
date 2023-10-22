import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieGraph({ data = [], width, height, className = "", animation = true }) {

	return (
		<>
			<PieChart width={width} height={height} className={className}>
				<Tooltip />
				<Legend />
				<Pie startAngle={180} cy={120} endAngle={0} innerRadius={70} outerRadius={100} isAnimationActive={animation} data={data} labelLine={false} fill="#8884d8" dataKey="value">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
					))}
				</Pie>
			</PieChart>
		</>
	);
}

export default PieGraph;
