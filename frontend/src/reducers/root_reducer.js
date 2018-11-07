import { combineReducers } from 'redux';

import errors from './session_errors_reducer';
import uiReducers from './ui_reducer';
import authReducer from './authReducer';
import questions from './questions_reducer';

const rootReducer = combineReducers({
  questions,
  errors,
  ui: uiReducers,
  auth: authReducer
});

export default rootReducer;