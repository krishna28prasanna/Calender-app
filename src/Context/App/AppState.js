import React, { useReducer } from "react"
import AppReducer from "./AppReducer"
import AppContext from "./AppContext"
import {ADD_EVENT} from "../Types"
const AppState = props =>{
    const initialState = {
        events : [ {id:1,name:"kp"},
        {id:2,name:"kp2"}],
        colors : ["Primary", "Danger", "Success", "Info"],
        selectedEvent : {}
    }
    const [state,dispatch] = useReducer(AppReducer,initialState)
    const addEvent = event =>{
        dispatch({
            type : ADD_EVENT,
            payload : event
        })
    }
    return(
        <AppContext.Provider value={{
            events : state.events,
            colors : state.colors,
            selectedEvent : state.selectedEvent,
            addEvent
        }}>{props.children}</AppContext.Provider>
    )
}
export default AppState