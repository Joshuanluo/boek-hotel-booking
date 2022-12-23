import React from "react";
import "./monthCalendar.scss";

const Calendar = () => {
	const date = new Date();
	const currentMonth = date.getMonth();
	const currentYear = date.getFullYear();
	console.log(date, currentMonth, currentYear);

	// 获取当前月份的日期数组
	const datesInCurrentMonth = [];
	for (let i = 1; i <= new Date(currentYear, currentMonth + 1, 0).getDate(); i++) {
		datesInCurrentMonth.push(i);
	}

	return (
		<div className="calendar-container">
			<div className="calendar">
				{datesInCurrentMonth.map((date) => (
					<div className="calendar-date" key={date}>
						{date}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
