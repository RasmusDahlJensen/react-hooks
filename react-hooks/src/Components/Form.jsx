import { useState } from "react";

export const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	const [message, setMessage] = useState("");

	const submit = (event) => {
		event.preventDefault();

		setMessage(`Hej ${firstName} ${lastName}, dit telefonnummer er "${phoneNumber}"
		 din email er "${email}" og du har valgt at skrive "${comment}" i kommentarfeltet`);
	};

	return (
		<form onSubmit={submit}>
			<input
				type="text"
				id="firstName"
				name="firstName"
				placeholder="Fornavn"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<br></br>
			<input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Efternavn"
				onChange={(e) => {
					setLastName(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="number"
				id="phoneNumber"
				name="phoneNumber"
				placeholder="Telefonnummer"
				onChange={(e) => {
					setPhoneNumber(e.target.value);
				}}
			/>
			<br></br>
			<input
				type="mail"
				id="email"
				name="email"
				placeholder="Email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<br></br>
			<textarea
				id="comment"
				name="comment"
				placeholder="Indtast kommentar"
				onChange={(e) => {
					setComment(e.target.value);
				}}
			/>
			<br></br>
			<button type="submit">Submit</button>
			<button type="reset">Reset</button>
			<br></br>
			<p>{message}</p>
		</form>
	);
};
