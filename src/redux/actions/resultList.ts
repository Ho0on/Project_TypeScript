import { OPEN_LIST, CLOSE_LIST } from './types';

export const openList = () => {
  return { type: OPEN_LIST };
};

export const closeList = () => {
  return { type: CLOSE_LIST };
};
