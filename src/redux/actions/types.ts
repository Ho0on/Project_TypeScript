import { DataProps } from '../../types';

export const OPEN_LIST = 'OPEN_LIST';

export const CLOSE_LIST = 'CLOSE_LIST';

export const GET_VIDEODATA_START = 'GET_VIDEODATA_START';
export const GET_VIDEODATA_SUCCESS = 'GET_VIDEODATA_SUCCESS';
export const GET_VIDEODATA_FAIL = 'GET_VIDEODATA_FAIL';

export interface ToggleListActionType {
  type: string;
}

export interface GetVideoActionType {
  type: string;
  data?: DataProps;
  error?: any;
}
