import styled from 'styled-components';

export const ListContainer = styled.ul`
  width: 1000px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #222326;
  color: white;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
`;

export const ListItem = styled.li`
  padding: 20px;
  border-radius: 10px;
  background-color: #333436;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: red;
  }
`;
