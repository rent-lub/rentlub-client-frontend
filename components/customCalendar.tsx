import React, { useState } from "react";

interface CalendarProps {
  onDateSelect: (selectedDate: Date) => void;
}

const CustomCalendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const currentDate: Date = new Date();
  const [date, setDate] = useState<Date>(currentDate);

  const getDaysInMonth = (date: Date): number => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarWeeks = (): JSX.Element[] => {
    const daysInMonth: number = getDaysInMonth(date);
    const firstDay: number = getFirstDayOfMonth(date);
    const weeks: JSX.Element[] = [];
    let currentWeek: JSX.Element[] = [];

    for (let i = 0; i < firstDay; i++) {
      currentWeek.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
      currentWeek.push(
        <td
          key={day}
          className="calendar-day text-right"
          onClick={() => {
            console.log(currentDate);
          }}
        >
          {day}
        </td>
      );

      if (
        currentWeek.length === 7 ||
        (day === daysInMonth && currentWeek.length > 0)
      ) {
        weeks.push(<tr key={weeks.length}>{currentWeek}</tr>);
        currentWeek = [];
      }
    }

    return weeks;
  };

  return (
    <div>
      <div className="flex justify-between px-5">
        <button
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
          }
        >
          {"<"}
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">
            {date.toLocaleDateString("default", {
              month: "long",
            })}
          </h2>
          <h2 className="text-sm ">
            {date.toLocaleDateString("default", {
              year: "numeric",
            })}
          </h2>
        </div>
        <button
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
          }
        >
          {">"}
        </button>
      </div>
      <table className="border-separate border-spacing-y-4 border-spacing-x-4">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderCalendarWeeks()}</tbody>
      </table>
    </div>
  );
};

export default CustomCalendar;
