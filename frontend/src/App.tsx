import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import store from './store';

import Routes from './routes';
import GlobalStyle from './assets/Styles/global';
import Menu from './components/Menu';
import AppProvider from './hooks';
import { darkTheme, lightTheme } from './assets/Themes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem('PrettyByteTheme:');

    if (themeStorage) {
      return JSON.parse(themeStorage);
    }

    return lightTheme;
  });

  useEffect(() => {
    localStorage.setItem('PrettyByteTheme:', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme.type === 'dark' ? lightTheme : darkTheme);
  };

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Menu toggleTheme={toggleTheme} theme={theme.type} />
          <AppProvider>
            <Routes />
          </AppProvider>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
