import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Forside</NavLink>
					<NavLink to="/form">Form</NavLink>
					<NavLink to="/counter">Counter</NavLink>
					<NavLink to="/greeting">greeting</NavLink>
					<NavLink to="/goals">goals</NavLink>
				</li>
			</ul>
		</nav>
	);
};
