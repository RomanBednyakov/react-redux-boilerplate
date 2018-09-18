import { TEST_ACTION_LOGIN, REDIRECT_HOME } from '../../constants/ActionTypes';

export const testActionLogin = (data) => {
  return {
    type: TEST_ACTION_LOGIN,
    data,
  };
};

export const testHome = (data) => {
  return {
    type: REDIRECT_HOME,
    data,
  };
};
