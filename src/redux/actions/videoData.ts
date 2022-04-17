import { DataProps } from '../../types';
import {
  GET_VIDEODATA_FAIL,
  GET_VIDEODATA_START,
  GET_VIDEODATA_SUCCESS,
} from './types';

export const getVideoDataStart = () => {
  return { type: GET_VIDEODATA_START };
};

export const getVideoDataSuccess = (data: DataProps) => {
  return { type: GET_VIDEODATA_SUCCESS, data };
};

export const getVideoDataFail = (error: any) => {
  return { type: GET_VIDEODATA_FAIL, error };
};
