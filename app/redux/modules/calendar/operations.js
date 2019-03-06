import actions from "./actions";
import api from "../../../utils/Api";
import config from "../../../config";

const getMonthCalendar = (year, month) => (dispatch, getState) => {
  return api
    .get(
      `${config.hrefUrl}events/external/${config.token}/${year}/${month + 1}`
    )
    .then(res => {
      return dispatch(actions.getMouthCalendar(res.data.data));
    })
    .catch(err => {
      dispatch(actions.getMouthCalendarError(err));
      throw err;
    });
};

const getFilterEventType = () => (dispatch, getState) => {
  return api
    .get(`${config.hrefUrl}/lookups/eventTypes/external/${config.token}`)
    .then(res => {
      return dispatch(actions.getFilterEventType(res.data.data));
    })
    .catch(err => {
      dispatch(actions.getFilterEventTypeError(err));
      throw err;
    });
};

export default {
  getMonthCalendar,
  getFilterEventType
};
