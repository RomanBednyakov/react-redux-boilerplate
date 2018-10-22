import {
  GET_MONTH_CALENDAR,
  GET_FILTER_EVENTtYPE
} from "../../constants/ActionTypes";

const initial = {
  eventForMonth: [],
  eventFilterTypes: []
};

const calendar = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_MONTH_CALENDAR:
      return {
        ...state,
        eventForMonth: data
      };
    case GET_FILTER_EVENTtYPE:
      return {
        ...state,
        eventFilterTypes: data
      };
    default:
      return state;
  }
};
export default calendar;
