import { FETCH_SURVEYS, FETCH_SURVEY, CLEAR_SURVEY } from '../actions/types';

export default function(
  state = { surveyList: null, activeSurvey: null },
  action
) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, surveyList: [...action.payload] };
    case FETCH_SURVEY:
      return { ...state, activeSurvey: action.payload };
    case CLEAR_SURVEY:
      return { ...state, activeSurvey: null };
    default:
      return state;
  }
}
