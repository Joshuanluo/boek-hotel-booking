import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./signInForm.scss"
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);
			// console.log(response);

			resetFormFields();
			
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="signinform_container">
			<h1>Sign in </h1>
			{/* <span></span>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input type="email" required onChange={handleChange} name="email" value={email} />

				<label>Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<button type="submit">Sign In</button>
					<button type="button" buttontype="google" onClick={signInWithGoogle}>
						Google sign in
					</button>
				</div>
			</form> */}
			<Form onSubmit={handleSubmit}>

				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						required
						onChange={handleChange}
						name="email"
						value={email}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						required
						onChange={handleChange}
						name="password"
						value={password}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Sign up
				</Button>
				<Button variant="primary" type="button" buttontype="google" onClick={signInWithGoogle}>
						Google sign in
				</Button>
			</Form>
			
		</div>
	);
};

export default SignInForm;
