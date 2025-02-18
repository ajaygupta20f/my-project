import React from 'react';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditor from '../components/RichTexEditor';
import Dashboard from '../components/Dashboard';
import { Box, Paper, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      gap={4} 
      sx={{ 
        backgroundColor: '#f4f6f8', 
        minHeight: '100vh', 
        py: 4 
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        Dashboard Overview
      </Typography>

      <Box 
        display="flex" 
        flexDirection="row" 
        flexWrap="wrap" 
        justifyContent="center" 
        gap={4} 
        width="90%"
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: '15px', 
            flex: '1 1 calc(50% - 16px)', 
            minWidth: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography variant="h5" gutterBottom color="secondary">
            Counter
          </Typography>
          <Counter />
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: '15px', 
            flex: '1 1 calc(50% - 16px)', 
            minWidth: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography variant="h5" gutterBottom color="secondary">
            User Form
          </Typography>
          <UserForm />
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: '15px', 
            flex: '1 1 calc(50% - 16px)', 
            minWidth: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography variant="h5" gutterBottom color="secondary">
            Rich Text Editor
          </Typography>
          <RichTextEditor />
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: '15px', 
            flex: '1 1 calc(50% - 16px)', 
            minWidth: '300px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography variant="h5" gutterBottom color="secondary">
            User Growth Chart
          </Typography>
          <Dashboard />
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
