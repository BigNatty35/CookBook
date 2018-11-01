import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './session_errors_reducer';
import uiReducers from './ui_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui: uiReducers
});

export default rootReducer;