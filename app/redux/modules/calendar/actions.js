import * as types from "./types";

const getMouthCalendar = () => ({
  type: types.GET_MONTH_CALENDAR_SUCCESS
});

const getMouthCalendarError = () => ({
  type: types.GET_MONTH_CALENDAR_ERROR
});

const getFilterEventType = data => ({
  type: types.GET_FILTER_EVENT_TYPE_SUCCESS,
  payload: data
});

const getFilterEventTypeError = data => ({
  type: types.GET_FILTER_EVENT_TYPE_ERROR,
  payload: data
});

export default {
  getMouthCalendar,
  getFilterEventType,
  getMouthCalendarError,
  getFilterEventTypeError
};
