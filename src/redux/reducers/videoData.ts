import {
  GetVideoActionType,
  GET_VIDEODATA_START,
  GET_VIDEODATA_SUCCESS,
  GET_VIDEODATA_FAIL,
} from './../actions/types';

const initialState = { loading: false, data: [], error: null };

const reducer = (state = initialState, action: GetVideoActionType) => {
  switch (action.type) {
    case GET_VIDEODATA_START:
      return { ...state, loading: true, error: null };
    case GET_VIDEODATA_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case GET_VIDEODATA_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
