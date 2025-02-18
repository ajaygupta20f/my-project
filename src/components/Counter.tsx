import React, { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Handlers for increment, decrement, and reset
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => Math.max(prev - 1, 0));
  const handleReset = () => setCount(0);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="40vh" 
      sx={{ backgroundColor: '#f0f2f5', padding: '20px' }}
    >
      <Paper 
        elevation={4} 
        sx={{ 
          padding: '30px', 
          borderRadius: '15px', 
          textAlign: 'center',
          width: '100%',
          maxWidth: '350px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Counter
        </Typography>

        <Typography 
          variant="h2" 
          color={count > 0 ? 'success.main' : 'error.main'} 
          sx={{ fontWeight: 'bold' }}
        >
          {count}
        </Typography>

        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Button 
            variant="contained" 
            color="success" 
            onClick={handleIncrement} 
            sx={{ 
              px: 7, 
              py: 2, 
              minWidth: '80px',
              fontSize: '0.875rem',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            Increment
          </Button>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={handleDecrement} 
            sx={{ 
              px: 7, 
              py: 2, 
              minWidth: '90px',
              fontSize: '0.875rem',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            Decrement
          </Button>
          <Button 
            variant="contained" 
            color="info" 
            onClick={handleReset} 
            sx={{ 
              px: 3, 
              py: 1, 
              minWidth: '80px',
              fontSize: '0.875rem',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            Reset
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Counter;
