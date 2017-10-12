import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY, SERVER_ERROR, CLEAR_ERROR } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurvey = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEY, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (e) {
    // console.log(e.response.data.error);
    dispatch({ type: SERVER_ERROR, error: e.response.data.error });
  }
};

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR });
