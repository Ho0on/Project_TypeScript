import { combineReducers } from 'redux';
import resultList from './resultList';
import videoData from './videoData';

const rootReducer = combineReducers({ resultList, videoData });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
