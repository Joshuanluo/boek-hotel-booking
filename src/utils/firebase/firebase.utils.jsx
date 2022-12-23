// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_API_DOMAIN,
	projectId: "boek-hotel-booking",
	storageBucket: "boek-hotel-booking.appspot.com",
	messagingSenderId: "187133620691",
	appId: "1:187133620691:web:28eaf05c4a34ff879bff26",
	measurementId: "G-2T0X9ZSC3D",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

