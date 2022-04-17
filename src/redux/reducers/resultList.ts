import {
  OPEN_LIST,
  CLOSE_LIST,
  ToggleListActionType,
} from './../actions/types';

const initialState = false;

const reducer = (
  previousState = initialState,
  action: ToggleListActionType
) => {
  switch (action.type) {
    case OPEN_LIST:
      return true;
    case CLOSE_LIST:
      return false;
    default:
      return previousState;
  }
};

export default reducer;
