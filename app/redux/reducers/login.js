const initial =
  {
    errorLogin: false,
    testAction: false,
  };

const login = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        testAction: data,
      };
    default:
      return state;
  }
};
export default login;
