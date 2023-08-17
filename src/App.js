import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from 'containers/homePage';
import LoginPage from 'containers/loginPage';
import ProfilePage from 'containers/profilePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId"  element={<ProfilePage />} />

        </Routes>
      
      </BrowserRouter>



    </div>
  );
}

export default App;
