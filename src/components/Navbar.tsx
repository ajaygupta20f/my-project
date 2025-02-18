import React, { useState, MouseEvent } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Avatar, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../firebase/firebaseConfig';
import { clearAuthUser } from '../redux/userSlice';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.user.authUser);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: MouseEvent<HTMLElement>) => {
    setDrawerOpen(open);
  };

  const handleSignOut = async () => {
    await logOut();
    dispatch(clearAuthUser());
    navigate('/signin');
  };

  const menuItems = [
    { text: 'Home', action: () => navigate('/') },
    { text: 'Sign Out', action: handleSignOut }
  ];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            React App
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            {authUser && (
              <>
                <Avatar 
                  alt={authUser.displayName || ''} 
                  src={authUser.photoURL || ''} 
                  sx={{ width: 35, height: 35 }} 
                />
                <Typography variant="body1" sx={{ ml: 1, color: '#fff' }}>
                  {authUser.displayName}
                </Typography>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { md: 'none' } }}
      >
        <Box 
          sx={{ width: 250 }} 
          role="presentation" 
          onClick={toggleDrawer(false)} 
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            React App
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
