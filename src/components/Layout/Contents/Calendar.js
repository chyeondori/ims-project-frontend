import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    // <div className="FullCalendar">
    <div>
      <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
    </div>
  );
};

export default Calendar;
