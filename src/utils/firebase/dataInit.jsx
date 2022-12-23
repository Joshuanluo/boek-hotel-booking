import { addDoc, collection } from "firebase/firestore";
import { db1 } from "./firebase.utils";
import React from "react";


const hotels = require("./hotels.json");
const data = JSON.stringify(hotels);
console.log(data);
const hotelCollectionRef = collection(db1, "hotels");

const DataInit = () => {
	const handleClick = () => {
		hotels.map(async (hotel) => await addDoc(hotelCollectionRef, hotel));
	};
	return (
		<div>
			dataInit
			<button onClick={handleClick}>adddata</button>
		</div>
	);
};

export default DataInit;
