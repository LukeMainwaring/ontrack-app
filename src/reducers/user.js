import { GET_USER } from '../actions/user';

const initialState = { firstName: '', lastName: '', email: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      console.log(action.payload.first_name);
      return {
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email
      };
    default:
      return state;
  }
};
