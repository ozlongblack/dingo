import axios from 'axios';
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  CLEAR_SURVEY,
  SERVER_ERROR,
  CLEAR_ERROR
} from './types';

// User

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Survey

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (err) {
    dispatch({ type: SERVER_ERROR, error: err.response.data.error });
  }
};

export const fetchSurvey = id => async dispatch => {
  try {
    const res = await axios.get(`/api/surveys/${id}`);

    dispatch({ type: FETCH_SURVEY, payload: res.data });
  } catch (err) {
    dispatch({ type: SERVER_ERROR, error: err.response.data.error });
  }
};

export const clearSurvey = () => async dispatch => {
  dispatch({ type: CLEAR_SURVEY });
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    // console.log(e.response.data.error);
    dispatch({ type: SERVER_ERROR, error: err.response.data.error });
  }
};

// Error

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR });
