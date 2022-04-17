import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #222326;
`;

export const SearchInput = styled.input`
  background-color: #222326;
  margin: 0 10px;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
`;

export const SearchIcon = styled.span`
  display: flex;
`;

export const DeleteIcon = styled.span`
  display: flex;
`;
