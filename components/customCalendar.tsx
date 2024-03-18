import React, { useState } from "react";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";
import { DateTime } from "luxon";

interface ReservationItem {
  label?: CalendarLabelEnum;
  startDate: string;
  endDate: string;
  item: string;
}

interface CalendarProps {
  onDateSelect: (selectedDate: Date) => void;
}

const CustomCalendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const currentDate: Date = new Date();
  const [date, setDate] = useState<Date>(currentDate);

  const reserveItemsList: Array<ReservationItem> = [
    {
      item: "first item",
      startDate: "3/22/2024",
      endDate: "3/24/2024",
      label: CalendarLabelEnum.Unavailable,
    },
    {
      item: "second item",
      startDate: "3/17/2024",
      endDate: "3/20/2024",
      label: CalendarLabelEnum.Unavailable,
    },
  ];

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
      // console.log(currentDate.toLocaleDateString());
      let isStart = false;
      let isEnd = false;
      let isReserved = false;

      for (const item of reserveItemsList) {
        if (item.label == CalendarLabelEnum.Unavailable) {
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.endDate);

          if (currentDate.getTime() === startDate.getTime()) isStart = true;

          if (currentDate.getTime() === endDate.getTime()) isEnd = true;

          if (currentDate >= startDate && currentDate <= endDate) {
            isReserved = true;
            break;
          }
        }
      }
      console.log(
        `${currentDate.toLocaleDateString()} == ${DateTime.now().toFormat(
          "M/d/yyyy"
        )}`
      );
      currentWeek.push(
        <td
          key={day}
          className={`calendar-day text-center h-7 ${
            isReserved
              ? `${
                  currentDate.toLocaleDateString() ==
                  DateTime.now().toFormat("M/d/yyyy")
                    ? "bg-[#2995e2]"
                    : "bg-[#C5D6E3]"
                }  ${isStart ? `rounded-l-xl ` : isEnd ? "rounded-r-xl" : ""} `
              : ""
          }
          `}
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
    <div className="flex flex-col">
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
      <table className="border-separate border-spacing-y-3 text-center">
        <thead>
          <tr>
            <td className="w-12">Sun</td>
            <td className="w-12">Mon</td>
            <td className="w-12">Tue</td>
            <td className="w-12">Wed</td>
            <td className="w-12">Thu</td>
            <td className="w-12">Fri</td>
            <td className="w-12">Sat</td>
          </tr>
        </thead>
        <tbody>{renderCalendarWeeks()}</tbody>
      </table>
    </div>
  );
};

export default CustomCalendar;
