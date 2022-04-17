import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './AutoComplete.style';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';
import ResultList from '../../components/ResultList/ResultList';
import axios from 'axios';
import { Idata } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { closeList, openList } from '../../redux/actions/resultList';

const AutoComplete = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [data, setData] = useState<Idata[]>();
  const dispatch = useDispatch();
  const isListOpen = useSelector((state: RootState) => state.resultList);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/data');
      setData(result.data);
    };
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
      {isListOpen && data && <ResultList data={data} />}
    </S.Container>
  );
};

export default AutoComplete;
