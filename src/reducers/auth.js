import {
  SIGNIN,
  ADD_ERROR,
  CLEAR_ERROR_MESSAGE,
  SIGNOUT
} from '../actions/auth';

const initialState = { token: null, userId: null, errorMessage: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    // Both sign in and sign up perform the same function
    case SIGNIN:
      return {
        errorMessage: '',
        token: action.payload.token,
        userId: action.payload.userId
      };
    case SIGNOUT:
      return { token: null, userId: null, errorMessage: '' };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};
