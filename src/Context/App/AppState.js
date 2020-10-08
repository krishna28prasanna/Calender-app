import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { useLocalStorage } from "../../Hook/Storage";
import {
  ADD_EVENT,
  GET_EVENT,
  SELECT_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
} from "../Types";
const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ["Primary", "Danger", "Success", "Info"],
    selectedEvent: {},
    colorObj: {
      primary: "#0275d8",
      success: "#5cb85c",
      info: "#5bc0de",
      warning: "#f0ad4e",
      danger: "#d9534f",
    },
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [item, setValue] = useLocalStorage("events");
  const [selectedItem, setSelectedItem] = useLocalStorage("selectedItem");
  const addEvent = (event) => {
    let userEvents = [...state.events, event];
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: event,
    });
  };
  const getEvent = () => {
    if (item) {
      dispatch({
        type: GET_EVENT,
        payload: item,
      });
    }
  };
  const setSelectedEvent = (event) => {
    setSelectedItem(event);
    dispatch({
      type: SELECT_EVENT,
      payload: event,
    });
  };
  const editSelectedEvent = (event) => {
    const updateEvent = item.map((e) => {
      return e.id == event.id ? event : e;
    });
    setValue(updateEvent);
    dispatch({
      type: EDIT_EVENT,
      payload: updateEvent,
    });
  };
  const deletEvent = (event) => {
    const newEvent = item.filter((e) => e.id != event.id);
    console.log('del',newEvent)
    setValue(newEvent);
    dispatch({
      type: DELETE_EVENT,
      payload: newEvent,
    });
  };
  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        colorObj: state.colorObj,
        addEvent,
        getEvent,
        setSelectedEvent,
        editSelectedEvent,
        deletEvent
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
