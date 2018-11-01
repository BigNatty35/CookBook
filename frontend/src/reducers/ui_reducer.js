import {combineReducers} from 'redux';

import modalReducer from '../reducers/modal_Reducer';

export default combineReducers({
  modal: modalReducer
});
