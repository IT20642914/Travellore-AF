import { eventActionType } from "../actionTypes/eventActionType";
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import {  toast } from 'react-toastify';
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

export const updateEvent =(eventID, updatedEventData,accessKey)=>{
console.log("eventID,updatedEventData,accessKey",eventID,updatedEventData,accessKey)
const url = `http://localhost:9090/api/event/${eventID}`;
return dispatch => {
  axios.put(url, updatedEventData, {
    headers: {
      Authorization: `Bearer ${accessKey}`,// Assuming accessKey is the authentication token
    },
  })
    .then(response => {
      // Handle the response if needed
      console.log("Event update response", response.data);
      dispatch({
        type: eventActionType.UPDATE_EVENT,
        payload: {
          eventID,
          updatedEventData
        }
      });
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    })
    .catch(error => {
      // Handle the error if needed
      console.log("Event update error", error);
      const massege=error.response.data.error;
      toast.error(massege, {
        position: toast.POSITION.TOP_RIGHT  
      });

      // Dispatch an error action or perform any other necessary actions
    });
};
};

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
              toast.success("Event Deleted SuccussFully", {
                position: toast.POSITION.TOP_RIGHT
              });
            } catch (error) {
              // Handle any errors
              console.log('Error deleting event:', error);
                 // Handle the error if needed
      console.log("Event update error", error);
      const massege=error.response.data.error;
      toast.error(massege, {
        position: toast.POSITION.TOP_RIGHT  
      });
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

