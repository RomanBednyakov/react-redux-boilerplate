const initial =
  {
    registAction: false,
  };

const registration = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'REGIST_ACTION':
      return {
        ...state,
        registAction: data,
      };
    default:
      return state;
  }
};
export default registration;
