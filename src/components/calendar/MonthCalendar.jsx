import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";

const MonthCalendar = (props) => {
	// const { currentDate } = props;
	const currentDate = new Date();
	console.log(currentDate.getTime());
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

	// 获取当月第一天是星期几
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

	// 获取当月总天数
	const daysInMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	).getDate();
	// 获取上月总天数
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
	let count = 1;

	const isAvailable = (date) => {
		const reservations = props.reser_info;
		const results = reservations.map((reservation) =>
			date >= reservation.start.toDate() && date <= reservation.end.toDate() ? false : true
		);
		return results;
	};
	console.log(isAvailable(currentDate));

	// 填充上月的日期
	for (let i = firstDayOfMonth - 1; i >= 0; i--) {
		dates.push(
			<div className="calendar-date date-cannot-choose" key={`last-month-${i}`}>
				{daysInLastMonth - i}
			</div>
		);
	}

	// 填充当月的日期
	const dayBeforeToday = currentDate.getDate() + firstDayOfMonth - 1;
	for (let i = firstDayOfMonth; i < firstDayOfMonth + daysInMonth; i++) {
		if (i < dayBeforeToday) {
			dates.push(
				<div className="calendar-date date-cannot-choose" key={`current-month-${i}`}>
					{count}
				</div>
			);
		} else {
			dates.push(
				<div className="calendar-date" key={`current-month-${i}`}>
					{count}
				</div>
			);
		}

		count++;
	}

	// 填充下月的日期
	if (lastDayOfMonth < 7) {
		for (let i = 0; i < 6 - lastDayOfMonth; i++) {
			dates.push(
				<div className="calendar-date" key={`next-month-${i}`}>
					{i + 1}
				</div>
			);
		}
	}

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
				{dates.slice(0, 7)}
				{dates.slice(7, 14)}
				{dates.slice(14, 21)}
				{dates.slice(21, 28)}
				{dates.slice(28)}
			</div>
		</div>
	);
};

export default MonthCalendar;
