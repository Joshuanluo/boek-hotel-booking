import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import SignIn from "../signIn/SignIn";
import firestoreCrud from "../../utils/firebase/firebase.crud";
import { Timestamp } from "firebase/firestore";

const Order = () => {
	const { currentUser } = useContext(UserContext);
	const params = useParams();
	const date = new Date(params.date);
	// console.log(date, typeof date);
	const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
	// console.log(tomorrow, typeof tomorrow)
	const [hotelId, setHotelId] = useState("");
	// const [res, setRes] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		firestoreCrud.getDocByHotel(params.hotel).then((data) => {
			setHotelId(data[0].id);
		});
	}, []);
	if (!currentUser) return <SignIn />;
	const handleClick = async() => {
		// console.log(res);
		// console.log(currentUser.uid, params.hotel, params.room, params.date);
		const res = {
			start: Timestamp.fromDate(date),
			user_id: currentUser.uid,
			end: Timestamp.fromDate(tomorrow),
			room_no: params.room,
		};
        const orderId= await firestoreCrud.addOrderbyHotel(hotelId, res);
        const user_res = {
			start: Timestamp.fromDate(date),
            hotel:params.hotel,
			order_id: orderId,
			end: Timestamp.fromDate(tomorrow),
			room_no: params.room,
		};
        // setRes(res); //async
        firestoreCrud.addOrderForUser(currentUser.uid,user_res)
		navigate(`/Orders/${currentUser.uid}`);
	};

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
