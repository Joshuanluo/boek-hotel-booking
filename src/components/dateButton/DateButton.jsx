import React from "react";
import { useNavigate } from "react-router";
import "./dateButton.scss"

const DateButton = ({ date, hotel, avil_rooms }) => {
	const navigate = useNavigate();
	const handle_click = (date) => {
		navigate(`${date}`, {
			state: {
				avil_rooms: avil_rooms,
			},
		});
	};
	return (
		<div className="calendar-date date-can-choose" onClick={() => handle_click(date)}>
			{date.getDate()}
		</div>
	);
};

export default DateButton;
