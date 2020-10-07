import {ADD_EVENT} from "../Types"
export default (state,action) =>{
    switch(action.type){
        case ADD_EVENT : 
        console.log('red',action.payload)
        return{
            ...state,
            events : [...state.events,action.payload]
        }
        default : return state
    }
}