import { useState } from "react";

export const TimedCounter = () => {
	let [value, setValue] = useState(0);
    
	for (let i = value; i < 50; i++) {
		setTimeout(() => {
			setValue(value + 1);
		}, 1000);
	}
	return <p>{value}</p>;
};
