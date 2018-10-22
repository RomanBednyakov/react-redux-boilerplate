import {
  GET_MONTH_CALENDAR,
  GET_FILTER_EVENTtYPE
} from "../../constants/ActionTypes";
import api from "../../api/index";
import helpers from "../../helpers/index";
import config from "../../config";

export function getMonthCalendar(year, month) {
  return dispatch => {
    return api
      .get(
        `${config.hrefUrl}events/external/${config.token}/${year}/${month + 1}`
      )
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({ type: GET_MONTH_CALENDAR, data: response.data })
      )
      .catch(error => {
        console.log("error getMonthCalendar", error);
      });
  };
}
export function getFilterEventType() {
  return dispatch => {
    return api
      .get(`${config.hrefUrl}/lookups/eventTypes/external/${config.token}`)
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({ type: GET_FILTER_EVENTtYPE, data: response.data })
      )
      .catch(error => {
        console.log("error GET_FILTER_EVENTtYPE", error);
      });
  };
}
