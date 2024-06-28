import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import CustomDrawer from './CustomDrawer'; // Adjust the path as necessary

export default function Template({ mainPage }) {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenu = () => {
    setDrawer(!drawer);
    if (!isLargeScreen) {
      setAnchorEl(null);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {!isLargeScreen && (
            <IconButton
              onClick={handleMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <CustomDrawer open={drawer} onClose={() => setDrawer(false)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: isLargeScreen ? '240px' : '0', // Add left margin when drawer is permanent
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Toolbar />
          {/* Your main content goes here */}
          {mainPage}
        </Box>
      </Box>
    </React.Fragment>
  );
}
