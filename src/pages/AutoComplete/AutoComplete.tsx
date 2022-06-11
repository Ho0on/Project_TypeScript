import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './AutoComplete.style';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircle } from 'react-icons/io5';
import ResultList from '../../components/ResultList/ResultList';
import { Idata } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { closeList, openList } from '../../redux/actions/resultList';
import { setCurrentIndex } from '../../redux/actions/focusItem';
import { getData } from '../../utils/getData';

const AutoComplete = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [listItemCount, setListItemCount] = useState<number>(0);

  const dispatch = useDispatch();
  const isListOpen = useSelector((state: RootState) => state.resultList);
  const currentIdx = useSelector((state: RootState) => state.focusItem);
  const { data }: { loading: boolean; data: Idata[] } = useSelector(
    (state: RootState) => state.videoData
  );

  console.log(listItemCount);

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

  const filteredData = data.filter(item => {
    return item.text.includes(searchInput);
  });

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    // if (data.length > 0) {
    switch (e.key) {
      case 'ArrowDown':
        dispatch(setCurrentIndex(currentIdx + 1));
        // if (focusRef.current?.childElementCount === currentIdx + 1)
        dispatch(setCurrentIndex(1));
        break;

      case 'ArrowUp':
        if (currentIdx < 1) break;

        dispatch(setCurrentIndex(currentIdx - 1));
        break;

      case 'Escape':
        dispatch(closeList());
        break;
    }
    // }
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
          onKeyDown={handleKeyArrow}
          value={searchInput}
        />
        <S.DeleteIcon onClick={() => resetInput()}>
          <IoCloseCircle color="#85878A" size="30" />
        </S.DeleteIcon>
      </S.InputContainer>
      {isListOpen && (
        <ResultList
          resultData={filteredData}
          setListItemCount={setListItemCount}
        />
      )}
    </S.Container>
  );
};

export default AutoComplete;
