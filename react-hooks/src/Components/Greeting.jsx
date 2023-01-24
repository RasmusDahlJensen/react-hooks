import { useState } from "react";

export const Greeting = () => {
	const [name, setName] = useState("");

	return (
		<div>
			<p>Hej. Mit navn er {name}</p>

			<input type="text" onInput={(e) => setName(e.target.value)} />
		</div>
	);
};
