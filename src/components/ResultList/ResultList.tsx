import React, { useEffect, useRef, useState } from 'react';
import * as S from './ResultList.style';
import { DataProps, Idata } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const ResultList = () => {
  const { loading, data }: { loading: boolean; data: Idata[] } = useSelector(
    (state: RootState) => state.videoData
  );
  const currentIdx = useSelector((state: RootState) => state.focusItem);

  const focusRef = useRef<HTMLUListElement>(null);

  return (
    <S.ListContainer ref={focusRef}>
      {!loading &&
        data.map(item => {
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
