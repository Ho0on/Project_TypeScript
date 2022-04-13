import React from 'react';
import * as S from './AutoComplete.style';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';

const AutoComplete = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.SearchInput type="text" />
        <S.SearchIcon>
          <BiSearch color="#85878A" size="30" />
        </S.SearchIcon>
        <S.DeleteIcon>
          <IoCloseCircle color="#85878A" size="30" />
        </S.DeleteIcon>
      </S.InputContainer>
    </S.Container>
  );
};

export default AutoComplete;
