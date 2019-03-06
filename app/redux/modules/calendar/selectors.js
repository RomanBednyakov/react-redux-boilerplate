import { createSelector } from "reselect";

const getCalendar = state => state.calendar;

const getMonth = createSelector(
  getCalendar,
  calendar => calendar.eventForMonth
);

const getFilter = createSelector(
  getCalendar,
  calendar => calendar.eventFilterTypes
);

const getIsAuth = createSelector(getCalendar, calendar => calendar.isAuth);

export default {
  getMonth,
  getFilter,
  getIsAuth
};
