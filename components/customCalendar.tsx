import React, { useState } from "react";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";
import { DateTime } from "luxon";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import {
  setSelectStartDate,
  setSelectEndDate,
} from "~/lib/features/calendarSlice";
import { CustomIcon } from "./shoppingCatIcon";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import CalendarLabel from "./shoppingDetail/calendarLabel";
import { useSelector } from "react-redux";
import { RootState } from "~/lib/store";
import { Product } from "~/types/productModel";

interface ReservationItem {
  label?: CalendarLabelEnum;
  startDate: string;
  endDate: string;
}

interface CalendarProps {
  reserveList: Array<ReservationItem>;
  disable?: boolean;
  showLabel?: boolean;
  onDateSelect: (
    selectStartDate: Date | null,
    selectEndDate: Date | null
  ) => void;
}

const CustomCalendar: React.FC<CalendarProps> = ({
  onDateSelect,
  disable,
  showLabel,
  reserveList,
  ...props
}) => {
  const currentDate: Date = new Date();
  const [date, setDate] = useState<Date>(currentDate);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [invalidSelect, setInvalidSelect] = useState<boolean>(false);
  const { shop, product, error, loading } = useSelector(
    (state: RootState) => state.shop
  );
  const openBottomSheet: { isOpen: boolean; currentProduct: Product | null } =
    useAppSelector((selector) => selector.bottomSheet);
  const dispatch = useAppDispatch();

  const getLeadTime = (): DateTime => {
    return DateTime.now().plus({
      days:
        openBottomSheet.currentProduct?.preparation.value ??
        shop?.setting.preparationTime ??
        0,
    });
  };

  reserveList = [
    ...reserveList,
    {
      startDate: DateTime.now().toFormat("M/dd/yyyy"),
      endDate: getLeadTime().toFormat("M/dd/yyyy"),
      label: CalendarLabelEnum.Unavailable,
    },
  ];

  const handlSetSelectStartDate = (date: Date | null) => {
    dispatch(
      setSelectStartDate({
        selectStartDate: date,
      })
    );
  };

  const handlSetSelectEndDate = (date: Date | null) => {
    dispatch(
      setSelectEndDate({
        selectEndDate: date,
      })
    );
  };

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
      handlSetSelectStartDate(selectedDate ?? "");
      setSelectedStartDate(selectedDate);
    } else if (!selectedEndDate && selectedDate > selectedStartDate) {
      let isError = false;
      for (const item of reserveList) {
        if (
          item.label === CalendarLabelEnum.Unavailable &&
          selectedStartDate &&
          selectedDate
        ) {
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.endDate);

          if (startDate <= selectedDate && endDate >= selectedStartDate) {
            isError = true;
            handlSetSelectStartDate(null);
            handlSetSelectEndDate(null);
            break;
          }
        }
      }

      if (isError) {
        setInvalidSelect(true);
        setSelectedStartDate(null);
      } else {
        setInvalidSelect(false);
        if (!selectedStartDate) {
          setSelectedStartDate(selectedDate);
          handlSetSelectStartDate(selectedDate ?? "");
        } else if (!selectedEndDate && selectedDate > selectedStartDate) {
          var startDate = DateTime.fromJSDate(selectedStartDate);
          var endDate = DateTime.fromJSDate(selectedDate);
          var diffDate = endDate
            .diff(startDate, ["years", "months", "days", "hours"])
            .toObject().days;
          diffDate! + 1;
          handlSetSelectEndDate(
            diffDate! > 13
              ? startDate.plus({ days: 13 }).toJSDate()
              : selectedDate ?? ""
          );
          setSelectedEndDate(
            diffDate! > 13
              ? startDate.plus({ days: 13 }).toJSDate()
              : selectedDate ?? ""
          );
        } else {
          setSelectedStartDate(selectedDate);
          handlSetSelectStartDate(selectedDate ?? "");
          setSelectedEndDate(null);
        }
      }
    } else {
      setSelectedStartDate(selectedDate);
      handlSetSelectStartDate(selectedDate ?? "");
      setSelectedEndDate(null);
      handlSetSelectEndDate(null);
    }
    onDateSelect(selectedStartDate ?? null, selectedEndDate ?? null);
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
      const today = new Date(Date.now());

      let isUnavailableStart = false;
      let isUnavailableEnd = false;
      let isUnavailable = false;

      for (const item of reserveList) {
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
            currentDate.getDate() < today.getDate() &&
            currentDate.getMonth() == today.getMonth()
              ? " text-gray-400"
              : "text-black"
          }
          ${
            isUnavailable
              ? `${
                  today.toLocaleDateString() == currentDate.toLocaleDateString()
                    ? "bg-[#ABDCFF]"
                    : "bg-[#C5D6E3]"
                }  ${
                  isUnavailableStart
                    ? `rounded-l-xl `
                    : isUnavailableEnd
                    ? "rounded-r-xl"
                    : ""
                } `
              : today.toLocaleDateString() == currentDate.toLocaleDateString()
              ? `bg-[#ABDCFF] ${
                  currentDate <= selectedEndDate! &&
                  currentDate >= selectedStartDate!
                    ? null
                    : "rounded-full"
                }   w-4 h-2`
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
              ? `bg-[#40C090] ${
                  selectedEndDate == selectedStartDate
                    ? "rounded-full"
                    : "rounded-r-xl"
                }`
              : selectedStartDate &&
                selectedStartDate.toLocaleDateString() ==
                  currentDate.toLocaleDateString()
              ? `bg-[#40C090] rounded-l-xl`
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
          onClick={
            disable
              ? () => {}
              : currentDate.getDate() < today.getDate() &&
                currentDate.getMonth() == today.getMonth()
              ? () => {}
              : () => (isUnavailable ? null : handleDateClick(currentDate))
          }
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
          <CustomIcon icon={<CaretLeft size={20} color="black" />} />
        </button>
        <div className="flex flex-col items-center text-black">
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
          <CustomIcon icon={<CaretRight size={20} color="black" />} />
        </button>
      </div>
      <table className="border-separate border-spacing-y-2 text-center">
        <thead>
          <tr className="text-black">
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
      {showLabel ? (
        <div className="flex items-center justify-center">
          <CalendarLabel />
        </div>
      ) : null}
    </div>
  );
};

export default CustomCalendar;
