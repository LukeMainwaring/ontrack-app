import ontrackApi from '../api/ontrack';
// import { navigate } from '../navigationRef';

export const GET_USER = 'GET_USER';

export const getUser = userId => async dispatch => {
  try {
    const response = await ontrackApi.get(`/user/${userId}`);
    dispatch({ type: GET_USER, payload: response.data.user });
  } catch (err) {
    // Could this error occur ? If so, handle
    // const errorMessage = err.response.data.error;
    // dispatch({
    //   type: ADD_ERROR,
    //   payload: errorMessage || 'Something went wrong with retrieving user'
    // });
  }
};

// export const clearErrorMessage = () => dispatch => {
//   dispatch({ type: CLEAR_ERROR_MESSAGE });
// };
