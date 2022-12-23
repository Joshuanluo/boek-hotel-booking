import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./signUpForm.scss";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	// console.log(formFields);
	const navigate = useNavigate();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}
		try {
			// createAuthUserWithEmailAndPassword(email, password).then(({user}) => {
			// 	createUserDocumentFromAuth(user, { displayName });
			// 	updateProfile(user,{
			// 		displayName: displayName,
			// 	});
			// });
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			// const response = await createAuthUserWithEmailAndPassword(email, password);
			// console.log(response);
			await createUserDocumentFromAuth(user, { displayName });
			await updateProfile(user,{
				displayName: displayName,
			});
			// console.log(user);
			resetFormFields();
			navigate("/");
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("user creation encounted an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="signupform_container">
			 <h1>Sign up</h1>
			{/*<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

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

				<label>Confirm Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>

				<button type="submit">Sign up</button>
			</form> */}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Display name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter display name"
						required
						onChange={handleChange}
						name="displayName"
						value={displayName}
					/>
				</Form.Group>

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

				<Form.Group className="mb-3">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						required
						onChange={handleChange}
						name="confirmPassword"
						value={confirmPassword}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Sign up
				</Button>
			</Form>
		</div>
	);
};

export default SignUpForm;
