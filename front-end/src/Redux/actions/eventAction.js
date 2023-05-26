import { eventActionType } from "../actionTypes/eventActionType";
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
export const insertEvent  = (newEventData,accessKey) =>{
  console.log("NEW EVENT: ",newEventData,accessKey)
  return (dispatch) => {
    

    axios
      .post('http://localhost:9090/api/event', newEventData, {
        headers: {
          Authorization: `Bearer ${accessKey}`, // Include the token in the headers
        },
      })
      .then((response) => {
        console.log('NEW EVENT:', newEventData);
        dispatch({
          type: eventActionType.ADD_EVENT,
          payload: {
            newEventData,
          },
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error inserting event:', error);
      });
  };

};

export const updateEvent =(eventID, updatedEventData)=>{
console.log("eventID,updatedEventData",eventID,updatedEventData)
    return{
        type:eventActionType.UPDATE_EVENT,
        payload:{
            eventID,
            updatedEventData
        }
    }
}

export const deleteEvent=(eventID,accessKey)=>{
   
    console.log("deletEventAction",eventID,accessKey)
  
        return async (dispatch) => {
            try {
              // Send the delete request to the API
              await axios.delete(`http://localhost:9090/api/event/${eventID}`, {
                headers: {
                  Authorization: `Bearer ${accessKey}`, // Include the token in the headers
                },
              });
              // Dispatch the action to update the state
              dispatch({
                type: 'DELETE_EVENT',
                payload: {
                  eventID,
                },
              });
            } catch (error) {
              // Handle any errors
              console.log('Error deleting event:', error);
            }
          };
}
export const getAllEvents=()=>{

    console.log("getAllEvents from evetAction")
    return{
        type:eventActionType.GET_ALL_EVENT,   
    }
}

export const setEvents=(events)=>{

    console.log("getAllEvents from evetAction")
    return{
        type:eventActionType.SET_EVETS_AXIOS,   
        payload:{
            events
        }
    }
}

