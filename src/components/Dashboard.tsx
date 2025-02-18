import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

// Sample Data
const data = [
  { name: 'Jan', users: 30 },
  { name: 'Feb', users: 45 },
  { name: 'Mar', users: 60 },
  { name: 'Apr', users: 80 },
  { name: 'May', users: 100 },
  { name: 'Jun', users: 120 },
];

const Dashboard: React.FC = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="80vh" 
      sx={{ backgroundColor: '#f4f6f8', padding: '20px' }}
    >
      <Paper 
        elevation={4} 
        sx={{ 
          padding: '30px', 
          borderRadius: '15px', 
          width: '100%', 
          maxWidth: '800px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" color="primary">
          User Growth
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" tick={{ fill: '#666' }} />
            <YAxis tick={{ fill: '#666' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#333', color: '#fff', borderRadius: '10px' }} 
              itemStyle={{ color: '#fff' }}
              cursor={{ stroke: '#8884d8', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#8884d8" 
              strokeWidth={3} 
              dot={{ r: 5, stroke: '#8884d8', strokeWidth: 2, fill: '#fff' }} 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Dashboard;
