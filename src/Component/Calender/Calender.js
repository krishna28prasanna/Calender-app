import React, { useContext, useEffect,useState } from "react"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./Calender.css"
import AppContext from "../../Context/App/AppContext";
import SelectModal from "../Modal/SelectModal"
const Calender = () =>{
    const appContext = useContext(AppContext)
    const {events,getEvent,setSelectedEvent} = appContext
    const [show,setShow] = useState(false)
    useEffect(()=>{
        getEvent()
        // eslint-disable-next-line
    },[events])
    const handleCalendarClick = info =>{
        const event = events.find(e => e.id === parseInt(info.event.id,10))
        // console.log(event)
        setSelectedEvent(event)
        setShow(true)
    }
   
    const hideEventClick = () =>{
        setShow(false)
    }
    const handleHideModal = () =>{
        setShow(false)
    }
    return(
        <div>
            <FullCalendar
            defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]} 
            header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            events = {events}
            eventClick = {handleCalendarClick}
      />
      <SelectModal show={show} hideEventClick={hideEventClick} handleHideModal={handleHideModal}/>
        </div>
    )
}
export default Calender