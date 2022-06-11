import React, { useEffect, useRef, useState } from 'react';
import * as S from './ResultList.style';
import { DataProps, Idata } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const ResultList = ({ resultData, setListItemCount }: DataProps) => {
  const currentIdx = useSelector((state: RootState) => state.focusItem);
  // const focusRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   setListItemCount(focusRef.current?.childElementCount || 0);
  // }, [resultData]);

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
