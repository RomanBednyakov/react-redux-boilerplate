class Helpers {
  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  };
}

const helpers = new Helpers();
export default helpers;
