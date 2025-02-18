import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';

// Define the shape of the user data
interface UserData {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const [userData, setUserData] = useLocalStorage<UserData>('userData', {
    id: Date.now(),
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const [isFormDirty, setIsFormDirty] = useState(false);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setIsFormDirty(true);  // Mark the form as dirty when a change is made
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Data saved successfully');
    setIsFormDirty(false);  // Mark as clean after saving
    // Clear the form after saving
    setUserData({
      id: Date.now(),
      name: '',
      address: '',
      email: '',
      phone: ''
    });
  };

  // Unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFormDirty]);

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
          maxWidth: '500px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          User Form
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField 
            label="Name" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
            variant="outlined"
          />
          <TextField 
            label="Address" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
            variant="outlined"
          />
          <TextField 
            label="Email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
            variant="outlined"
          />
          <TextField 
            label="Phone" 
            name="phone" 
            value={userData.phone} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
            variant="outlined"
          />
          <Box textAlign="center" mt={2}>
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              sx={{ 
                px: 4, 
                py: 1.5, 
                boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)', 
                '&:hover': { boxShadow: '0 5px 8px rgba(0, 0, 0, 0.3)' }
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserForm;
