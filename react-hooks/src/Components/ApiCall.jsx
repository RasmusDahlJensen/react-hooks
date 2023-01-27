import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApiCall = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const url = "https://api.mediehuset.net/sdg/goals";
			const result = await axios.get(url);
			console.log(result.data.items);
			setApiData(result.data.items);
		};
		getData();
	}, [setApiData]);

	return (
		<div>
			{apiData.map((value) => {
				return (
					<li key={value.id}>
						<Link to={`/goals/${value.id}`}>{value.title}</Link>
					</li>
				);
			})}
		</div>
	);
};

export { ApiCall };
