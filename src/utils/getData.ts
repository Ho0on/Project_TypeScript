import { useDispatch } from 'react-redux';
import {
  getVideoDataStart,
  getVideoDataSuccess,
  getVideoDataFail,
} from './../redux/actions/videoData';
import axios from 'axios';

const dispatch = useDispatch();

export const getData = async () => {
  try {
    dispatch(getVideoDataStart());
    const result = await axios.get('http://localhost:4000/data');
    dispatch(getVideoDataSuccess(result.data));
  } catch (error) {
    dispatch(getVideoDataFail(error));
  }
};
