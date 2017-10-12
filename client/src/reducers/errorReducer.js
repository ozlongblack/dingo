import { SERVER_ERROR, CLEAR_ERROR } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SERVER_ERROR:
      return [action.error, ...state];
    case CLEAR_ERROR:
      return [];
    default:
      return state;
  }
}
