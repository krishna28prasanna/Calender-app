import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = (props) =>{
    const {evetnName,inputChange,checkbox,onCheckboxChange,strtDate,endDate,onInputChange,handleChange,eventType,colors,color} = props
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="eventTitle">Event Title</label>
                    <input type="text" id="eventTitle" className="form-control" placeholder="Enter Title" value={evetnName} onChange={inputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <div>
                    <DatePicker 
                    showTimeSelect
                    timeFormat = "p"
                    timeIntervals = {1}
                    dateFormat = "Pp"
                    selected = {strtDate}
                    onChange = {onInputChange("startDate")}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <div>
                    <DatePicker 
                    showTimeSelect
                    timeFormat = "p"
                    timeIntervals = {1}
                    dateFormat = "Pp"
                    selected = {endDate}
                    onChange = {onInputChange("endDate")}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eventColor">Choose Event Color</label>
                    <select className="form-control" name="eventColor" onChange={handleChange}>
                        <option>Select Color</option>
                        {colors.map((color,i)=>{
                            return <option key={i} value={color.toLowerCase()}>{color}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="checkbox" className="form-check input" name="eventColor" value={checkbox} checked={checkbox} onChange={onCheckboxChange} />
                    <label>create event</label>
                </div>
                <div className="text-center">
                    <button type="submit" onClick={eventType} disabled={!checkbox} >Save</button>
                </div>
            </form>
        </div>
    )
}
export default EventForm