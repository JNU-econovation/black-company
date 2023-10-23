import { useAtom } from "jotai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar.css";
import { Dispatch } from "react";

interface CalendarProps {
  programDate: Date | undefined;
  setProgramDate: Dispatch<React.SetStateAction<Date | undefined>>;
}

const Calendar = ({ programDate, setProgramDate }: CalendarProps) => {
  const disabledDays = { before: new Date() };
  return (
    <DayPicker
      mode="single"
      selected={programDate}
      onSelect={setProgramDate}
      disabled={disabledDays}
      className="absolute top-[4.5rem] left-0 z-10 bg-background p-3 rounded-md shadow-md"
    />
  );
};
export default Calendar;
