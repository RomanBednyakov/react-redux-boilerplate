import * as actionTypes from "./types";

const initialState = {
  eventForMonth: [],
  eventFilterTypes: [],
  eventForMonthError: "error",
  eventFilterTypesError: "error",
  isAuth: true
};

const calendar = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.GET_MONTH_CALENDAR_SUCCESS:
      return {
        ...state,
        eventForMonth: data
      };
    case actionTypes.GET_MONTH_CALENDAR_ERROR:
      return {
        ...state,
        eventForMonthError: data
      };
    case actionTypes.GET_FILTER_EVENT_TYPE_SUCCESS:
      return {
        ...state,
        eventFilterTypes: data
      };
    case actionTypes.GET_FILTER_EVENT_TYPE_ERROR:
      return {
        ...state,
        eventFilterTypes: data
      };
    default:
      return state;
  }
};
export default calendar;
