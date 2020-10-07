import React from "react";
import { Modal, Button } from "react-bootstrap";
import EventForm from "../Form/EventForm";
const EventModal = (props) => {
    // const {show,handleHideModal,evetnName,inputChange,checkbox,onCheckboxChange,strtDate,endDate,onInputChange,handleChange,eventType,colors,createEvent} = props
    const {show,handleHideModal} = props
  return (
    <div>
      <Modal show={show} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventForm {...props}
          // evetnName="watch movie"
          //  inputChange={inputChange}
          //  checkbox="false"
          //  onCheckboxChange={onCheckboxChange}
          //  strtDate={new Date()}
          //  endDate={new Date()}
          //  onInputChange={onInputChange}
          //  handleChange={handleChange}
          //  eventType={createEvent}
          //  colors={["Primary","Danger","Success","Info"]}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default EventModal;
