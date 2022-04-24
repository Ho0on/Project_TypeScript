import React, { useEffect, useRef, useState } from 'react';
import * as S from './ResultList.style';
import { DataProps, Idata } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const ResultList = ({ resultData }: DataProps) => {
  const currentIdx = useSelector((state: RootState) => state.focusItem);

  return (
    <S.ListContainer>
      {resultData.map(item => {
        return (
          <S.ListItem key={item.id} isFocus={item.id === currentIdx}>
            {item.text}
          </S.ListItem>
        );
      })}
    </S.ListContainer>
  );
};

export default ResultList;
