import { TEST_ACTION_REGISTRATION } from '../../constants/ActionTypes';

const initial =
  {
    testActionRegistration: false,
  };

const registration = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case TEST_ACTION_REGISTRATION:
      return {
        ...state,
        testActionRegistration: data,
      };
    default:
      return state;
  }
};
export default registration;
