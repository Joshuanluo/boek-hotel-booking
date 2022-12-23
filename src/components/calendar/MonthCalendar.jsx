
import React from "react";



const MonthCalendar = (props) => {
	// console.log(props.reser_info);
	if (!props.reser_info) {
		return <div>Loading...</div>;
	}

	// const { currentDate } = props;
	const currentDate = new Date();
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

	const isAvailable = (date) => {
		const results = props.reser_info.map((reservation) =>
			date >= reservation.start.toDate() && date <= reservation.end.toDate() ? false : true
		);
		console.log(results);
		if (results.indexOf(true) === -1) {
			return false;
		}
		return true;
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

	return (
		<div className="calendar-container">
			<h1>{month[currentDate.getMonth()]}</h1>
			<div className="calendar">
				<div className="calendar-date">Sunday</div>
				<div className="calendar-date">Monday</div>
				<div className="calendar-date">Tuesday</div>
				<div className="calendar-date">Wednesday</div>
				<div className="calendar-date">Thursday</div>
				<div className="calendar-date">Friday</div>
				<div className="calendar-date">Saturday</div>

				{dates.map((date) => (
					(isAvailable(date) && date >= currentDate) ? (
						<div className="calendar-date" key={`${date.getMonth()}_${date.getDate()}`}>
							{date.getDate()}
						</div>
					) : (
						<div
							className="calendar-date date-cannot-choose"
							key={`${date.getMonth()}_${date.getDate()}`}
						>
							{date.getDate()}
						</div>
					)
				))}
			</div>
		</div>
	);
};

export default MonthCalendar;
