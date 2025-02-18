import React, { useEffect, useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { CircularProgress, Box } from '@mui/material';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    }, (error) => {
      console.error('Error in Auth State Change:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Memoize the user state to avoid unnecessary re-renders
  const isAuthenticated = useMemo(() => !!currentUser || localStorage.getItem('isAuthenticated') === 'true', [currentUser]);

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
