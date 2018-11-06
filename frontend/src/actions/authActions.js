
import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';


export const registerUser = user => dispatch => {
    axios.post('/api/users/register', user)
      .then(res => 
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      })
    )
      .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};



export const loginUser = (userData) => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      // set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth Header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
