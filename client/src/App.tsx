/* React Settings */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ThemeProvider } from 'styled-components';
import { history } from '.';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global-style';
import Layout from './pages/layout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Discover from './pages/discover/Discover';
import MyPage from './pages/mypage/MyPage';
import Chatting from './pages/chatting/Chatting';
import { Chat } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router history={history}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/chat" element={<Chatting />}>
              <Route path=":id" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
