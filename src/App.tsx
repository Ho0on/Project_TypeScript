import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AutoComplete from './pages/AutoComplete/AutoComplete';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
