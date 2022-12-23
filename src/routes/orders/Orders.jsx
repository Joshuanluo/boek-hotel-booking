import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import SignInForm from "../../components/signIn-form/SignInForm";
import { UserContext } from "../../contexts/UserContext";
import firestoreCrud from "../../utils/firebase/firebase.crud";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db1 } from "../../utils/firebase/firebase.utils";

const Orders = () => {
	const params = useParams();
	const { currentUser } = useContext(UserContext);
	// const uid = currentUser.uid;
	// console.log(currentUser.uid);
	const [orders, setOrders] = useState({});

	// useEffect(()=>{
	//     setOrders(firestoreCrud.getOrdersByUserId(params.uid));
	// },[])
	const query = collection(db1, `users/${params.uid}/reservations`);
	const [docs, loading, error] = useCollectionData(query);
	console.log(docs);
	if (!currentUser) return <SignInForm />;

	if (!docs) return <div>Loading...</div>;

	return (
		<div>
			<h1>Orders</h1>
			{docs.map((doc) => (
				<div key={doc.order_id}>
					<ul>
						<li>order_id: {doc.order_id}</li>
						<li>hotel: {doc.hotel}</li>
						<li>start: {Date(doc.start)}</li>
						<li>end: {Date(doc.end)}</li>
						<li>room_no: {Date(doc.room_id)}</li>
					</ul>
				</div>
			))}
		</div>
	);
};

export default Orders;
