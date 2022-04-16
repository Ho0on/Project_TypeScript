import React, { useEffect, useState } from 'react';
import * as S from './AutoComplete.style';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';
import ResultList from '../../components/ResultList/ResultList';
import axios from 'axios';
import { Idata } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { openList } from '../../redux/actions/resultList';

const AutoComplete = () => {
  const dispatch = useDispatch();
  const isListOpen = useSelector((state: RootState) => state.resultList);
  console.log(isListOpen);
  const [data, setData] = useState<Idata[]>();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/data');
      setData(result.data);
    };
    getData();
  }, []);

  const showList = () => {
    dispatch(openList());
  };

  return (
    <S.Container onClick={() => showList()}>
      <S.InputContainer>
        <S.SearchInput type="text" />
        <S.SearchIcon>
          <BiSearch color="#85878A" size="30" />
        </S.SearchIcon>
        <S.DeleteIcon>
          <IoCloseCircle color="#85878A" size="30" />
        </S.DeleteIcon>
      </S.InputContainer>
      {isListOpen && data && <ResultList data={data} />}
    </S.Container>
  );
};

export default AutoComplete;
