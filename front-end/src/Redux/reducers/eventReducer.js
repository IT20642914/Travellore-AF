import { eventActionType } from "../actionTypes/eventActionType";


const initialState = {  
  events: [],
};

const eventReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case eventActionType.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, payload.newEventData],
      };
    case eventActionType.UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === payload.eventID) {
            return {
              ...event,
              ...payload.updatedEventData,
            };
          }
          return event;
        }),
      };
    case eventActionType.DELETE_EVENT:
      return  {
        ...state,
        events: state.events.filter((event) => event._id !== payload.eventID),
      };
    case eventActionType.GET_ALL_EVENT:
      console.log('Fetching events from reducer');
        return {state
        }

        case eventActionType.SET_EVETS_AXIOS:
            return{
                events: payload.events
            }
    default:
      return state;
  }
};


export default eventReducer;
