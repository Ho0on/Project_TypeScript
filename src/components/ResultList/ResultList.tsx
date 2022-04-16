import React from 'react';
import styled from 'styled-components';
import { DataProps, Idata } from '../../types';

export const Container = styled.div`
  border-radius: 10px;
  width: 800px;
  margin-top: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #222326;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const ResultList = ({ data }: DataProps) => {
  return (
    <Container>
      {data.map(el => {
        return <div key={el.id}>{el.text}</div>;
      })}
    </Container>
  );
};

export default ResultList;
