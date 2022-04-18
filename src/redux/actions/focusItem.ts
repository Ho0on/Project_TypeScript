import { SELECT_INDEX } from './types';

export const setCurrentIndex = (item: number) => {
  return { type: SELECT_INDEX, item };
};
