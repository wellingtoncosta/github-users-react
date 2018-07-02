import actions from '../actions';

const initialState = {
    isLoading: false,
    repos: []
  }

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actions.repo.FETCH_ALL:
      return {
        ...state,
        isLoading: true
      };
    case actions.repo.FETCH_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repos: action.payload
      };
      case actions.repo.FETCH_ALL_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}