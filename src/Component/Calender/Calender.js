import React from "react"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import "./Calender.css"
const Calender = () =>{
    return(
        <div>
            <FullCalendar
            defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin,timeGridPlugin ]} 
            header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
      />
        </div>
    )
}
export default Calender