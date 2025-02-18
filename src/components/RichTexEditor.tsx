import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Paper, Typography } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useLocalStorage<string>('richTextContent', '');

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleClear = () => {
    setContent('');
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      if (content) {
        return 'You have unsaved changes. Do you want to leave?';
      }
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [content]);

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
        <Typography variant="h4" gutterBottom textAlign="center">
          Rich Text Editor
        </Typography>

        <ReactQuill 
          value={content} 
          onChange={handleChange} 
          placeholder="Start writing here..."
          theme="snow" 
          style={{ height: '300px', marginBottom: '20px', borderRadius: '8px' }}
        />

        <Box textAlign="center">
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleClear} 
            sx={{ 
              mt: 2, 
              px: 4, 
              py: 1.5, 
              boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)', 
              '&:hover': { boxShadow: '0 5px 8px rgba(0, 0, 0, 0.3)' },
              borderRadius: '20px'
            }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RichTextEditor;
