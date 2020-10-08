import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AppContext from "../../Context/App/AppContext";
import EditEvent from "./EditEvent"
const SelectModal = (props) => {
    const appContext = useContext(AppContext)
    const {selectedEvent,deletEvent,setSelectedEvent} = appContext
  const { show, hideEventClick,handleHideModal } = props;
  const [editClick,setEditClick] = useState(false)
  const handleEdit = () =>{
      setEditClick(true)
      hideEventClick()
  }
  const hideEditClick = () =>{
      setEditClick(false)
  }
  const handleDelete = () =>{
    deletEvent(selectedEvent)
    hideEventClick()
    setSelectedEvent({})
  }
  return (
    <div>
      <Modal show={show} onHide={hideEventClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Button variant="secondary" onClick={handleEdit}>
              Edit Event
            </Button>
            &nbsp;
            <Button variant="primary" onClick={handleDelete}>
              Delete Event
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <EditEvent show={editClick} hideEditClick={hideEditClick} handleHideModal={handleHideModal} />
    </div>
  );
};
export default SelectModal;
