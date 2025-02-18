import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import UserProfile from './pages/UserProfile';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        {/* <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          } 
        /> */}
      </Routes>
    </>
  );
};

export default App;
