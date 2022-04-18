import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as S from './AutoComplete.style';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';
import ResultList from '../../components/ResultList/ResultList';
import axios from 'axios';
import { Idata } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { closeList, openList } from '../../redux/actions/resultList';
import {
  getVideoDataFail,
  getVideoDataStart,
  getVideoDataSuccess,
} from '../../redux/actions/videoData';

const AutoComplete = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();
  const isListOpen = useSelector((state: RootState) => state.resultList);
  const { loading, data } = useSelector((state: RootState) => state.videoData);
  const currentIdx = useSelector((state: RootState) => state.focusItem);

  const getData = useCallback(async () => {
    try {
      dispatch(getVideoDataStart());
      const result = await axios.get('http://localhost:4000/data');
      dispatch(getVideoDataSuccess(result.data));
    } catch (error) {
      dispatch(getVideoDataFail(error));
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const showList = () => {
    dispatch(openList());
  };

  const resetInput = () => {
    setSearchInput('');
    dispatch(closeList());
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.SearchIcon>
          <BiSearch color="#85878A" size="30" />
        </S.SearchIcon>
        <S.SearchInput
          type="text"
          onClick={() => showList()}
          onChange={handleInput}
          value={searchInput}
        />
        <S.DeleteIcon onClick={() => resetInput()}>
          <IoCloseCircle color="#85878A" size="30" />
        </S.DeleteIcon>
      </S.InputContainer>
      {isListOpen && !loading && <ResultList data={data} />}
    </S.Container>
  );
};

export default AutoComplete;
