import { SelectIndexActionType, SELECT_INDEX } from './../actions/types';
const initialState = 10;

const reducer = (
  previousState = initialState,
  action: SelectIndexActionType
) => {
  switch (action.type) {
    case SELECT_INDEX:
      return action.item;
    default:
      return previousState;
  }
};

export default reducer;
