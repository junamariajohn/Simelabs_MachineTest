import React from "react";
import { Bar } from "react-chartjs-2";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";

const BarChart = (props) => {
	return (
		<Card>
			<CardBody>
				<Bar
					data={{
						labels: props.labels,
						datasets: [
							{
								label: "# pollution",
								data: props.datasets,
								backgroundColor: "#563d7c",
							},
						],
					}}
					width={100}
					height={40}
					options={{ maintainAspectRatio: true }}
				/>
			</CardBody>
		</Card>
	);
};

export default BarChart;
