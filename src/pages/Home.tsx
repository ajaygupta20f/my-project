import React, { Suspense, lazy } from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';

// Lazy Load Components
const Counter = lazy(() => import('../components/Counter'));
const UserForm = lazy(() => import('../components/UserForm'));
const RichTextEditor = lazy(() => import('../components/RichTexEditor'));
const Dashboard = lazy(() => import('../components/Dashboard'));

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', py: 4 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Dashboard Overview
      </Typography>

      <Box  gap={4} width="90%">
        <Paper sx={{ p: 3, borderRadius: '15px', minWidth: '300px' }}>
          <Typography variant="h5">Counter</Typography>
          <Suspense fallback={<CircularProgress />}>
            <Counter />
          </Suspense>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: '15px', minWidth: '300px' }}>
          <Typography variant="h5">User Form</Typography>
          <Suspense fallback={<CircularProgress />}>
            <UserForm />
          </Suspense>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: '15px', minWidth: '300px' }}>
          <Typography variant="h5">Rich Text Editor</Typography>
          <Suspense fallback={<CircularProgress />}>
            <RichTextEditor />
          </Suspense>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: '15px', minWidth: '300px' }}>
          <Typography variant="h5">User Growth Chart</Typography>
          <Suspense fallback={<CircularProgress />}>
            <Dashboard />
          </Suspense>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
