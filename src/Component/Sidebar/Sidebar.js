import React, { useContext, useState } from "react"
import AppContext from "../../Context/App/AppContext"
import AddEvent from "../Modal/AddEvent"
import SelectModal from "../Modal/SelectModal"
import "./Sidebar.css"
const Sidebar = () =>{
    const [show,setShow] = useState(false)
    const [eventClick,setEventClick] = useState(false)
    const appContext = useContext(AppContext)
    const {events,setSelectedEvent} = appContext
    console.log(events)
    const handleHideModal = () =>{
        setShow(false)
    }
    const handleShowModal = () =>{
        setShow(true)
    }
    const handleClick = (event) =>{
        setEventClick(true)
        setSelectedEvent(event)
    }
    const hideEventClick = () =>{
        setEventClick(false)
    }
    console.log(eventClick)
    return(
        <div>
            <button className="btn btn-primary btn-block" onClick={handleShowModal} >
                Create New Event
            </button>
            <div className="m-t-20">
                {events.length !=0 ? events.map((event,i)=>{
                    console.log("map -",event)
                    return <div key={i} className={`external-event bg-${event.bgColor}`} onClick={()=>handleClick(event)}>{event.title}</div>
                }) : <div>No Event Listed</div>}
            </div>
            <AddEvent show={show} handleHideModal={handleHideModal} />
            <SelectModal show={eventClick} hideEventClick={hideEventClick} handleHideModal={handleHideModal} />
        </div>
    )
}
export default Sidebar