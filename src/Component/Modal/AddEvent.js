import React, { useContext, useState } from "react";
import EventModal from "./EventModal";
import moment from "moment";
import AppContext from "../../Context/App/AppContext"
const AddEvent = (props) => {
  const [evetnName, setEventName] = useState("");
  const [color, setColor] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const colors = ["Primary", "Danger", "Success", "Info"];
  const colorObj = {
    primary: "#0275d8",
    success: "#5cb85c",
    info: "#5bc0de",
    warning: "#f0ad4e",
    danger: "#d9534f",
  };
  const appContext = useContext(AppContext)
  const {addEvent,events,colors} = appContext
  console.log('add events - ',events)
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
  const createEvent = () => {
    const event = setEvent(events.length+1);
    addEvent(event)
    reset()
    props.handleHideModal()
  };
  const reset = () => {
    setEventName("");
    setColor("");
    setCheckBox(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };
  const setEvent = (id) => {
    let start = moment(startDate).format();
    let end = moment(endDate).format();

    const event = {
      id,
      title: evetnName,
      start,
      end,
      bgColor: color,
      backgroundColor: colorObj[color],
    };
    return event;
  };
  return (
    <div>
      <EventModal
        show={props.show}
        handleHideModal={props.handleHideModal}
        evetnName={evetnName}
        inputChange={inputChange}
        checkbox={checkbox}
        onCheckboxChange={onCheckboxChange}
        strtDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        handleChange={handleChange}
        eventType={createEvent}
        colors={colors}
        color={color}
      />
    </div>
  );
};
export default AddEvent;
