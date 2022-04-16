import { combineReducers } from 'redux';
import resultList from './resultList';

const rootReducer = combineReducers({ resultList });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
