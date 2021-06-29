import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './components/assets/styles/Theme';
import GlobalStyle from './components/assets/styles/GlobalStyle';
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header';
import NewPost from './components/NewPost/NewPost';
import UserContext from './components/assets/UserContext';
import HomePage from './components/HomePage/HomePage';
import Training from './components/Training/Training';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState('');

  return (
    <div className="App">
      <ThemeProvider theme={Theme} />
      <UserContext.Provider
        value={{ isLogged, setIsLogged, userId, setUserId }}
      >
        <Header />

        {isLogged ? (
          <div>
            <GlobalStyle />
            <UserProfile />
            <NewPost />
            <Training />
          </div>
        ) : (
          <HomePage />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
