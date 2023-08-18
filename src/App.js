import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from 'containers/homePage';
import LoginPage from 'containers/loginPage';
import ProfilePage from 'containers/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme= {theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId"  element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      
      </BrowserRouter>



    </div>
  );
}

export default App;
