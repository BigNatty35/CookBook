
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