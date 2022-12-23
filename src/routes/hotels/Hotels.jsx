import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

const Hotels = () => {
	const q = query(collection(db, "hotels"), where("city", "==", true));
	const querySnapshot = getDocs(q);
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
	});
	return <div>Hotels</div>;
};

export default Hotels;
