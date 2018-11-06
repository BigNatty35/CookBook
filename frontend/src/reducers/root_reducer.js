import { combineReducers } from 'redux';

import errors from './session_errors_reducer';
import uiReducers from './ui_reducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  errors,
  ui: uiReducers,
  auth: authReducer
});

export default rootReducer;