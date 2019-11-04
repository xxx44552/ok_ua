import {fetchDataPending, fetchDataSuccess, fetchDataError} from './action';

function fetchData() {
  return dispatch => {

    dispatch(fetchDataPending());

    fetch('/api')
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          throw(res.error);
        }
        dispatch(fetchDataSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      })
  }
}

export default fetchData;