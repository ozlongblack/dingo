import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import errorReducer from './errorReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  survey: surveyReducer,
  form: formReducer,
  error: errorReducer
});
