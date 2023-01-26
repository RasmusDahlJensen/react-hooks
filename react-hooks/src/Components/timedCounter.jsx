import { useState } from "react";
import { useEffect } from "react";

export const TimedCounter = () => {
	let [count, setCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCounter(count + 1);
		}, 1000);
	}, [count]);

	return <div>{count}</div>;
};
