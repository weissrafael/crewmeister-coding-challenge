import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
/* eslint-disable no-unused-vars */
import CalendarStyle from "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import Event from "./Event";
import {CalendarWrapper} from "./BigCalendar.style";

const allViews = Object.keys(Views).map((k) => Views[k]);

export default function BigCalendar({ events }) {
  const localizer = momentLocalizer(moment);
  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2017, 0, 1)}
        style={{ height: 600 }}
        components={{
          eventWrapper: Event,
        }}
      />
    </CalendarWrapper>
  );
}
