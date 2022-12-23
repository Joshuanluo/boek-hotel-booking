import React, { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import SignIn from "../signIn/SignIn";

const Order = () => {
	const { currentUser } = useContext(UserContext);
    const params = useParams();
	if (!currentUser) return <SignIn />;

    const handleClick=()=>{
        // console.log(currentUser.uid,params.hotel,params.room,params.date)

    }

	return (
		<div>
			<h1>Please confirm the order information</h1>
			<ul>
                <li>User Name: {currentUser.displayName}</li>
                <li>Hotel: {params.hotel}</li>
                <li>Room No: {params.room}</li>
                <li>Date : {params.date}</li>
                
            </ul>
            <button onClick={handleClick}>submit</button>
		</div>
	);
};

export default Order;