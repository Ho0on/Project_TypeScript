import React, { useRef, useState } from 'react';
import * as S from './ResultList.style';
import { DataProps } from '../../types';

const ResultList = ({ data }: DataProps) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const focusRef = useRef<HTMLUListElement>(null);

  return (
    <S.ListContainer ref={focusRef}>
      {data.map(item => {
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
