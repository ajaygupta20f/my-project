import React, { useEffect } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import { signInWithGoogle, auth } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUser(user));
        navigate('/');
      }
    });
  }, [dispatch, navigate]);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="80vh" 
      sx={{ backgroundColor: '#f0f2f5', padding: '20px' }}
    >
      <Paper 
        elevation={4} 
        sx={{ 
          padding: '30px', 
          borderRadius: '15px', 
          width: '100%', 
          maxWidth: '400px',
          textAlign: 'center',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Welcome Back!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
          Sign in to continue
        </Typography>

        <Button 
          variant="contained" 
          onClick={handleGoogleSignIn} 
          sx={{ 
            backgroundColor: '#fff', 
            color: '#444', 
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)', 
            borderRadius: '10px',
            '&:hover': { 
              backgroundColor: '#f4f4f4', 
              boxShadow: '0 5px 8px rgba(0, 0, 0, 0.3)' 
            },
            py: 1.5,
            px: 4,
            textTransform: 'none'
          }}
          startIcon={<FcGoogle size={24} />}
        >
          Sign In with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default SignIn;
