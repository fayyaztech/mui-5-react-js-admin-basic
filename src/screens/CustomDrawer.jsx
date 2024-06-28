import React from 'react';
import {
  Box,
  CardMedia,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../logo.svg';

const CustomDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerItemClick = () => {
    if (!isLargeScreen) {
      onClose();
    }
  };

  return (
    <Drawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
          marginTop: isLargeScreen ? 8 : 7, // Adjust marginTop to push the drawer below AppBar
        },
      }}
    >
      <Box sx={{ padding: '10px', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            sx={{
              maxWidth: '70%',
              height: 'auto',
            }}
          />
        </Box>
        <Typography>Welcome Mr. Admin</Typography>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={handleDrawerItemClick}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={handleDrawerItemClick}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
