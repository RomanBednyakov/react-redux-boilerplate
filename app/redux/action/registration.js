import { TEST_ACTION_REGISTRATION, REDIRECT_HOME } from '../../constants/ActionTypes';

export const registrationAction = (data) => {
  return {
    type: TEST_ACTION_REGISTRATION,
    data,
  };
};

export const redirectHoma = (data) => {
  return {
    type: REDIRECT_HOME,
    data,
  };
};
