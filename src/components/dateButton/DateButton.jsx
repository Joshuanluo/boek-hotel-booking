import React from "react";
import { useNavigate } from "react-router";

const DateButton = ({date,hotel}) => {
    const navigate =useNavigate()
    const handle_click=(date)=>{
       navigate(`${date}`)
    }
	return (
		<div
			className="calendar-date"
			onClick={()=>handle_click(date)}
			
		>
			{date.getDate()}
		</div>
	);
};

export default DateButton;
