import "./App.css";
import { ApiCall } from "./Components/ApiCall";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Components/appRouter/AppRouter";
import { Header } from "./Components/Header";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<AppRouter />
				<ApiCall />
			</BrowserRouter>
		</div>
	);
}

export default App;
