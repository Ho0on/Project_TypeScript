import { ToggleListAction } from './../actions/resultList';
import { OPEN_LIST, CLOSE_LIST } from './../actions/types';

const initialState = false;

const reducer = (previousState = initialState, action: ToggleListAction) => {
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
