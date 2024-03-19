import React from "react";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";

const CalendarLabel = () => {
  return (
    <div className="flex flex-row gap-x-5">
      {Object.values(CalendarLabelEnum).map((e) => {
        return buildLabel(e);
      })}
    </div>
  );
};

const buildLabel = (value: CalendarLabelEnum) => {
  switch (value) {
    case CalendarLabelEnum.Today:
      return labelComponent(value, "bg-[#ABDCFF]");
    case CalendarLabelEnum.Reserved:
      return labelComponent(value, "bg-[#40C090]");
    case CalendarLabelEnum.Unavailable:
      return labelComponent(value, "bg-[#C5D6E3]");
  }
};

const labelComponent = (value: string, color: string) => {
  return (
    <React.Fragment key={value}>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row gap-x-2 items-center justify-center">
          <div className={`rounded-full ${color} w-2 h-2`}></div>
          <p className=" text-xs">{value}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarLabel;
