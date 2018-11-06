
import {GET_ERRORS} from './types';
import axios from 'axios';


export const registerUser = user => dispatch => {
    axios.post('/api/users/register', user)
      .then(res => console.log(res.data))
      .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};