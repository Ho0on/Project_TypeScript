import { combineReducers } from 'redux';
import resultList from './resultList';
import videoData from './videoData';
import focusItem from './focusItem';

const rootReducer = combineReducers({ resultList, videoData, focusItem });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
