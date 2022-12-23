import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MonthCalendar from "../../components/calendar/MonthCalendar";
import firestoreCrud from "../../utils/firebase/firebase.crud";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";
const Reservation = () => {
	const params = useParams();
	const [hotelDoc, setHotelDoc] = useState(null);
	const [rooms, setRooms] = useState(null);
	// console.log(docs[0]);
	// console.log(docs[0].start.toDate() > docs[0].end.toDate());

	useEffect(() => {
		firestoreCrud.getDocByHotel(params.hotel).then((data) => {
			setHotelDoc(data[0].id);
			setRooms(data[0].rooms_id)
		});
	}, []);
	const query = collection(db1, `hotels/${hotelDoc}/reservations`);
	const [docs, loading, error] = useCollectionData(query);
	return (
		<div>
			<h1>Reservation</h1>
			<MonthCalendar reser_info={docs} hotel={params.hotel} rooms={rooms} />
			{/* <hr /> */}
		</div>
	);
};

export default Reservation;
