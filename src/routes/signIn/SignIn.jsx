import React from "react";
import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/signUp-form/SignUpForm";
import SignInForm from "../../components/signIn-form/SignInForm";

const SignIn = () => {
	// useEffect(async () => {
	// 	const response = await getRedirectResult(auth);
	// 	if(response){
  //     const userDocRef=await createUserDocumentFromAuth(response.user);
  //   }
	// }, []);
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	// const logGoogleRedirectUser = async () => {
	// 	const {user} = await signInWithGoogleRedirect();
	// 	console.log(user);
	// };
	return (
		<div>
			<h1>SignIn Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			{/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
      <SignInForm />
		</div>
	);
};

export default SignIn;
