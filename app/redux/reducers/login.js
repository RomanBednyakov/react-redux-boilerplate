import { TEST_ACTION_LOGIN } from '../../constants/ActionTypes';

const initial =
  {
    testActionLogin: false,
  };

const login = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case TEST_ACTION_LOGIN:
      return {
        ...state,
        testActionLogin: data,
      };
    default:
      return state;
  }
};
export default login;
