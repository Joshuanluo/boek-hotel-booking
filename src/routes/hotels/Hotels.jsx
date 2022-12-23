import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
						<Link className="" to={`/hotels/${hotel.name}/reservation`}>
							<h1>Name:{hotel.name}</h1>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Hotels;
