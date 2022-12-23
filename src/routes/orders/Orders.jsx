import React, { useContext } from "react";
import { useParams } from "react-router";
import SignInForm from "../../components/signIn-form/SignInForm";
import { UserContext } from "../../contexts/UserContext";

const Orders = () => {
	const params = useParams();
    const {currentUser}=useContext(UserContext);
    const uid = currentUser.uid;



    if (!currentUser) return <SignInForm />;
	return (
		<div>
			<h1>Orders</h1>

		</div>
	);
};

export default Orders;
