import "./App.css";
import { Greeting } from "./Components/Greeting";
import { Counter } from "./Components/Counter";
import { Form } from "./Components/Form";
import { TimedCounter } from "./Components/timedCounter";

function App() {
	return (
		<div className="App">
			{/* <Greeting />
			<Counter />
			<Form /> */}
			<TimedCounter />
		</div>
	);
}

export default App;
