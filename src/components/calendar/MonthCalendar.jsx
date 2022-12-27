import React from "react";
import DateButton from "../dateButton/DateButton";
import _ from "underscore";
import "./monthCalendar.scss";


const MonthCalendar = (props) => {
	// console.log(props.reser_info);
	if (!props.reser_info) {
		return <div>Loading...</div>;
	}

	// const { currentDate } = props;
	const currentDate = new Date();

	// currentDate.setHours(24);
	// currentDate.setMinutes(0);
	// currentDate.setSeconds(0);
	// currentDate.setMilliseconds(0);
	const totalRooms = props.rooms;
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	// console.log(currentDate.getTime());
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// get what day is the first day in this month
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

	const daysInMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	).getDate();

	const lastDayOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		daysInMonth
	).getDay();

	const daysInLastMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		0
	).getDate();

	let dates = [];

	const yesterDate = (date) => {
		return date.setDate(date.getDate() - 1);
	};

	

	const availableRoom = (date) => {
		const orderedRooms = props.reser_info.map((reservation) =>
			date >= yesterDate(reservation.start.toDate()) &&
			date <= yesterDate(reservation.end.toDate())
				? reservation.room_no
				: null
		);

		const result = _(totalRooms).difference(_(orderedRooms).uniq());
		return result;
	};

	// console.log(isAvailable(currentDate));

	// dates of last month
	for (let i = firstDayOfMonth - 1; i >= 0; i--) {
		dates.push(new Date(currentYear, currentMonth - 1, daysInLastMonth - i));
	}

	// dates of this month

	for (let i = 1; i < daysInMonth + 1; i++) {
		dates.push(new Date(currentYear, currentMonth, i));
	}

	// dates of next month
	if (lastDayOfMonth < 7) {
		for (let i = 0; i < 6 - lastDayOfMonth; i++) {
			dates.push(new Date(currentYear, currentMonth + 1, i));
		}
	}
	// console.log(dates);
	// console.log(props.reser_info);

	return (
		<div className="calendar-container">
			<h1>{month[currentDate.getMonth()]}</h1>
			<div className="calendar">
				<div className="calendar-day">Sunday</div>
				<div className="calendar-day">Monday</div>
				<div className="calendar-day">Tuesday</div>
				<div className="calendar-day">Wednesday</div>
				<div className="calendar-day">Thursday</div>
				<div className="calendar-day">Friday</div>
				<div className="calendar-day">Saturday</div>

				{dates.map((date) =>
					availableRoom(date).length !== 0 && date >= currentDate ? (
						<DateButton
							date={date}
							hotel={props.hotel}
							avil_rooms={availableRoom(date)}
							key={`${date.getMonth()}_${date.getDate()}`}
						/>
					) : (
						<div
							className="calendar-date date-cannot-choose"
							key={`${date.getMonth()}_${date.getDate()}`}
						>
							{date.getDate()}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default MonthCalendar;
