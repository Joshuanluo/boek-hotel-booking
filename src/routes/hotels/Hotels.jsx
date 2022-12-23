import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import firestoreCrud from "../../utils/firebase/firebase.crud";

const Hotels = () => {
	const params = useParams();
	const [hotels, setHotels] = useState([]);


	useEffect(() => {
		firestoreCrud.getHotelsByLocation(params.location).then((data) => setHotels(data));
	}, []);
	return (
		<div>
			<h1>Hotels</h1>
			{hotels.map((hotel) => {
				return (
					<div key={hotel.name}>
						{" "}
						<h1>Name:{hotel.name}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default Hotels;
