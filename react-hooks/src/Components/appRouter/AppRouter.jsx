import { Route, Routes } from "react-router";
import { Form } from "../Form";
import { Counter } from "../Counter";
import { Greeting } from "../Greeting";
import { TimedCounter } from "../TimedCounter";
import { ApiCall } from "../ApiCall";
import { NotFound } from "../404";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<TimedCounter />} />
			<Route path="/goals" element={<ApiCall />}></Route>
			<Route path="/form" element={<Form />}></Route>
			<Route path="/counter" element={<Counter />}></Route>
			<Route path="/greeting" element={<Greeting />}></Route>
			<Route path="/timedCounter" element={<TimedCounter />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
};
