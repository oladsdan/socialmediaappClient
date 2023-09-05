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
import NavBar from 'containers/navbar';


function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));
  // we check if the user is autherized
  const isAuth = Boolean(useSelector((state)=>state.token))

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme= {theme}>
          <CssBaseline />
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId"  element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
