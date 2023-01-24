import "./App.css";
import { Greeting } from "./Components/Greeting";
import { Counter } from "./Components/Counter";
import { Form } from "./Components/Form";

function App() {
	return (
		<div className="App">
			<Greeting />
			<Counter />
			<Form />
		</div>
	);
}

export default App;
