import React from "react";

const MonthCalendar = (props) => {
	// const { currentDate } = props;
	const currentDate = new Date();
	// 获取当月第一天是星期几
	const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
	// 获取当月总天数
	const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
	// 获取上月总天数
	const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

	let dates = [];
	let count = 1;

	// 填充上月的日期
	for (let i = firstDayOfMonth - 1; i >= 0; i--) {
		dates.push(
			<div className="calendar-date" key={`last-month-${i}`}>
				{daysInLastMonth - i}
			</div>
		);
	}

	// 填充当月的日期
	for (let i = firstDayOfMonth; i < firstDayOfMonth + daysInMonth; i++) {
		dates.push(
			<div className="calendar-date" key={`current-month-${i}`}>
				{count}
			</div>
		);
		count++;
	}

	// 填充下月的日期
	for (let i = firstDayOfMonth + daysInMonth; i < 7; i++) {
		dates.push(
			<div className="calendar-date" key={`next-month-${i}`}>
				{i - firstDayOfMonth - daysInMonth + 1}
			</div>
		);
	}

	return (
		<div className="calendar-container">
			<div className="calendar">
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
