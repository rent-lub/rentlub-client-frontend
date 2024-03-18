import React, { useState } from "react";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";
import { DateTime } from "luxon";
import { start } from "repl";

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
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [error, setError] = useState<boolean>(false);

  const reserveItemsList: Array<ReservationItem> = [
    {
      item: "first item",
      startDate: "3/22/2024",
      endDate: "3/24/2024",
      label: CalendarLabelEnum.Unavailable,
    },
    {
      item: "second item",
      startDate: "3/11/2024",
      endDate: "3/13/2024",
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

  const handleDateClick = (selectedDate: Date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(selectedDate);
    } else if (!selectedEndDate && selectedDate > selectedStartDate) {
      // Check if any dates between the selected start and end dates are unavailable
      let isError = false;
      for (const item of reserveItemsList) {
        if (
          item.label === CalendarLabelEnum.Unavailable &&
          selectedStartDate &&
          selectedDate
        ) {
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.endDate);

          if (startDate <= selectedDate && endDate >= selectedStartDate) {
            isError = true;
            break;
          }
        }
      }

      if (isError) {
        setError(true); // Set error state to true if there's an error
        setSelectedStartDate(null); // Reset start date
      } else {
        setError(false);
        if (!selectedStartDate) {
          setSelectedStartDate(selectedDate);
        } else if (!selectedEndDate && selectedDate > selectedStartDate) {
          setSelectedEndDate(selectedDate);
        } else {
          setSelectedStartDate(selectedDate);
          setSelectedEndDate(null);
        }
      }
    } else {
      setSelectedStartDate(selectedDate);
      setSelectedEndDate(null);
    }
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

      let isUnavailableStart = false;
      let isUnavailableEnd = false;
      let isUnavailable = false;

      for (const item of reserveItemsList) {
        if (item.label == CalendarLabelEnum.Unavailable) {
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.endDate);

          if (currentDate.getTime() === startDate.getTime())
            isUnavailableStart = true;

          if (currentDate.getTime() === endDate.getTime())
            isUnavailableEnd = true;

          if (currentDate >= startDate && currentDate <= endDate) {
            isUnavailable = true;
            break;
          }
        }
      }

      currentWeek.push(
        <td
          key={day}
          className={`calendar-day text-center h-7 
          ${
            isUnavailable
              ? `${
                  currentDate.toLocaleDateString() ==
                  DateTime.now().toFormat("M/d/yyyy")
                    ? "bg-[#ABDCFF]"
                    : "bg-[#C5D6E3]"
                }  ${
                  isUnavailableStart
                    ? `rounded-l-xl `
                    : isUnavailableEnd
                    ? "rounded-r-xl"
                    : ""
                } `
              : currentDate.toLocaleDateString() ==
                DateTime.now().toFormat("M/d/yyyy")
              ? "bg-[#ABDCFF] rounded-full w-4 h-2"
              : null
          } ${` ${
            selectedStartDate &&
            selectedStartDate.toLocaleDateString() ==
              currentDate.toLocaleDateString() &&
            !selectedEndDate
              ? "bg-[#40C090] rounded-full"
              : selectedEndDate &&
                selectedEndDate.toLocaleDateString() ==
                  currentDate.toLocaleDateString()
              ? "bg-[#40C090] rounded-r-xl"
              : selectedStartDate &&
                selectedStartDate.toLocaleDateString() ==
                  currentDate.toLocaleDateString()
              ? "bg-[#40C090] rounded-l-xl"
              : ""
          }
          ${
            selectedStartDate &&
            selectedEndDate &&
            currentDate >= selectedStartDate &&
            currentDate <= selectedEndDate
              ? "bg-[#40C090]"
              : ""
          }`}`}
          onClick={() => (isUnavailable ? null : handleDateClick(currentDate))}
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
      {error ? (
        <p className="text-sm text-red-600">
          Some dates between the selected start and end dates are unavailable.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomCalendar;
