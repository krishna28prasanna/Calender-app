import React, { useContext, useEffect, useState } from "react";
import EventModal from "./EventModal";
import moment from "moment";
import AppContext from "../../Context/App/AppContext"
const EditEvent = (props) => {
  const appContext = useContext(AppContext)
  const {selectedEvent,events,colorObj,colors,editSelectedEvent} = appContext
  const [evetnName, setEventName] = useState("");
  const [color, setColor] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(()=>{
      if(Object.keys(selectedEvent).length){
          setEventName(selectedEvent.title)
          setColor(selectedEvent.bgColor)
          setCheckBox(selectedEvent.agree)
          setStartDate(new Date(selectedEvent.start))
          setEndDate(new Date(selectedEvent.end))
      }
  },[selectedEvent,events])
  const inputChange = (e) => {
    setEventName(e.target.value);
  };
  const onCheckboxChange = () => {
    setCheckBox(!checkbox);
  };
  const onInputChange = (propertyName) => (e) => {
    if (propertyName == "startDate") {
      setStartDate(e);
    }
    if (propertyName == "endDate") {
      setEndDate(e);
    }
  };
  const handleChange = (e) => {
    if (e.target.value != "Select Color") {
      setColor(e.target.value);
    } else {
      setColor("");
    }
  };
 const editEvent = () =>{
     const event = setEvent(selectedEvent.id)
     editSelectedEvent(event)
     props.handleHideModal()
 }
  const setEvent = (id) => {
    let start = moment(startDate).format();
    let end = moment(endDate).format();

    const event = {
      id,
      title: evetnName,
      start,
      end,
      agree : checkbox,
      bgColor: color,
      backgroundColor: colorObj[color],
    };
    return event;
  };
  return (
    <div>
      <EventModal
        show={props.show}
        handleHideModal={props.hideEditClick}
        evetnName={evetnName}
        inputChange={inputChange}
        checkbox={checkbox}
        onCheckboxChange={onCheckboxChange}
        strtDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        handleChange={handleChange}
        eventType={editEvent}
        colors={colors}
        color={color}
        colorObj={colorObj}
      />
    </div>
  );
};
export default EditEvent;
