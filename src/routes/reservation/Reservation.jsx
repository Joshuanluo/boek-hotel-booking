import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MonthCalendar from "../../components/MonthCalendar";
import firestoreCrud from "../../utils/firebase/firebase.crud";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";
const Reservation = () => {
	const params = useParams();
	const [reservations, setReservations] = useState();
	const query = collection(db1, "hotels/CXENyYJapbDLjYTECNxT/reservations");
	const [docs, loading, error] = useCollectionData(query);
	// console.log(docs[0]);
	// console.log(docs[0].start.toDate(),docs[0].end.toDate());
	// useEffect(()=>{
	//     firestoreCrud.getReservationsByHotel(params.hotel);
	// },[])
	return (
		<div>
			<h1>Reservation</h1>
			<MonthCalendar />
		</div>
	);
};

export default Reservation;
