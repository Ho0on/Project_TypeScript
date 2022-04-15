import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  background-color: black;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 70px;
  background-color: #222326;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const DeleteIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
