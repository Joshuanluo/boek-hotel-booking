import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const Rooms = () => {
	const params = useParams();
	const location = useLocation();
	const avil_rooms = location.state.avil_rooms;
	const navigate = useNavigate();
	const handleClick = (room) => {
		navigate(`${room}`);
	};

	return (
		<div>
			<h1>Rooms</h1>
			<p>{params.hotel}</p>
			<p>{params.date}</p>
			{avil_rooms.map((room) => (
				<div key={room}>
					{room}
					<button onClick={() => handleClick(room)}>order</button>
				</div>
			))}
		</div>
	);
};

export default Rooms;
