// import help from '../../helpers/helperAuth';
// import apiRequest from '../../Api';
// import config from '../../config/index';
export const testAction = (data) => {
  console.log('testAction', data);
  return {
    type: 'TEST_ACTION',
    data,
  };
};

export const redirectHome = (data) => {
  return {
    type: 'REDIRECT_HOME',
    data,
  };
};
//
// export const redirectLogin = (data) => {
//   return {
//     type: 'REDIRECT_LOGIN',
//     data,
//   };
// };
//
// export const errorLogin = (data) => {
//   return {
//     type: 'ERROR_LOGIN',
//     data,
//   };
// };
//
// export function registration(login, password, email, avatar) {
//   const data = {
//     name: login,
//     password,
//     email,
//     avatar,
//   };
//   localStorage.removeItem('token');
//   // config.token = null;
//   return (dispatch) => {
//     return apiRequest.post(`${config.hrefUrl}/auth`, data)
//       .then(help.checkStatus)
//       .then(() => dispatch(redirectLogin(true)))
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };
// }
//
// export function logining(login, password) {
//   const userData = {
//     name: login,
//     password,
//   };
//   const url = new URL(`${config.hrefUrl}/auth`);
//   url.search = new URLSearchParams(userData);
//   return (dispatch) => {
//     localStorage.removeItem('token');
//     // config.token = null;
//     return apiRequest.get(url)
//       .then(help.checkStatus)
//       .then(help.saveToken)
//       .then(() => dispatch(redirectHome(true)))
//       .catch(() => dispatch(errorLogin(true)));
//   };
// }
