
import {GET_ERRORS, SET_CURRENT_USER} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
      .then(res => history.push('/questions'))
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



export const loginUser = (userData, history) => dispatch => {
  return axios
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
