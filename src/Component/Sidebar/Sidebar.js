import React, { useState } from "react"
import AddEvent from "../Modal/AddEvent"
import "./Sidebar.css"
const Sidebar = () =>{
    const [show,setShow] = useState(false)
    const handleHideModal = () =>{
        setShow(false)
    }
    const handleShowModal = () =>{
        setShow(true)
    }
    return(
        <div>
            <button className="btn btn-primary btn-block" onClick={handleShowModal} >
                Create New Event
            </button>
            <div className="m-t-20">
                <div className="external-event bg-success">
                    watch movies
                </div>
                <div className="external-event bg-danger">
                    watch movies
                </div>
                <div className="external-event bg-warning">
                    watch movies
                </div>
            </div>
            <AddEvent show={show} handleHideModal={handleHideModal} />
        </div>
    )
}
export default Sidebar