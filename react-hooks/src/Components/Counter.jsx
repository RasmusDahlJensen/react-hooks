import { useState } from "react";

export const Counter = () => {
	let [value, setValue] = useState(0);
	return (
		<>
			<button onClick={(e) => setValue(value + 1)}>
				Klik for at inkrementere
			</button>
			<p>Du har inkrementeret {value} gange</p>
		</>
	);
};
