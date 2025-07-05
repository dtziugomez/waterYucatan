
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
