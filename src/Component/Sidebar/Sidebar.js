import React from "react"
import "./Sidebar.css"
const Sidebar = () =>{
    return(
        <div>
            <button className="btn btn-primary btn-block">
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
        </div>
    )
}
export default Sidebar