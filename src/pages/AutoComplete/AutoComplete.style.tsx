import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin-top: 200px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #222326;
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin: 0 10px;
  border: none;
  outline: none;
  background-color: #222326;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchIcon = styled.span`
  display: flex;
`;

export const DeleteIcon = styled.span`
  display: flex;
`;
