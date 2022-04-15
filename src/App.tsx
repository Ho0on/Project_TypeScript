import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AutoComplete from './pages/AutoComplete/AutoComplete';
import store from './redux/store';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AutoComplete />} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
};

export default App;
