import React from "react";
import EventModal from "./EventModal";

const AddEvent = (props) => {
    const inputChange = () =>{}
    const onCheckboxChange = () =>{}
    const onInputChange = () =>{}
    const handleChange = () =>{}
    const createEvent = () =>{}
  return (
    <div>
      <EventModal
        show={props.show}
        handleHideModal={props.handleHideModal}
        evetnName="watch movie"
        inputChange={inputChange}
        checkbox={false}
        onCheckboxChange={onCheckboxChange}
        strtDate={new Date()}
        endDate={new Date()}
        onInputChange={onInputChange}
        handleChange={handleChange}
        eventType={createEvent}
        colors={["Primary","Danger","Success","Info"]}
      />
    </div>
  );
};
export default AddEvent;
