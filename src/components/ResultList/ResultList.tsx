import React, { useRef } from 'react';
import * as S from './ResultList.style';
import { DataProps } from '../../types';

const ResultList = ({ data }: DataProps) => {
  const focusRef = useRef<HTMLUListElement>(null);

  return (
    <S.ListContainer ref={focusRef}>
      {data.map(item => {
        return <S.ListItem key={item.id}>{item.text}</S.ListItem>;
      })}
    </S.ListContainer>
  );
};

export default ResultList;
