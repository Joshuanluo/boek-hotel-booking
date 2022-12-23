import React from "react";

const Calendar = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const weeks = [];
    let week = [];
  
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = new Date(year, month, i);
  
      if (currentDay.getDay() === 0 && week.length > 0) {
        weeks.push(week);
        week = [];
      }
  
      week.push(currentDay);
  
      if (currentDay.getDay() === 6 && i !== daysInMonth) {
        weeks.push(week);
        week = [];
      }
    }
  
    return (
      <div className="calendar">
        {weeks.map((week, index) => (
          <div key={index} className="week">
            {week.map((day) => {
              const year = day.getFullYear();
              const month = day.getMonth();
              const date = day.getDate();
              const className =
                month === currentMonth ? 'day' : 'day other-month';
  
              return (
                <div key={`${year}-${month}-${date}`} className={className}>
                  {date}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
};

export default Calendar;
