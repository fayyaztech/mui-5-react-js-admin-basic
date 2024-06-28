import React, { useState } from 'react';
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
    Collapse,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { ExpandLess, ExpandMore, Inbox, Mail } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Adjust the path as necessary

const CustomDrawer = ({ open, onClose }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleDrawerItemClick = () => {
        if (!isLargeScreen) {
            onClose();
        }
    };

    const [openStudents, setOpenStudents] = useState(false);

    const handleStudentsClick = () => {
        setOpenStudents(!openStudents);
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
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={handleStudentsClick}>
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                        {openStudents ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openStudents} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} component={Link} to="/students/list">
                                <ListItemIcon>
                                    <Mail />
                                </ListItemIcon>
                                <ListItemText primary="List" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} component={Link} to="/students/attendance">
                                <ListItemIcon>
                                    <Mail />
                                </ListItemIcon>
                                <ListItemText primary="Attendance" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button component={Link} to="/account">
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItem>
                    <ListItem button component={Link} to="/about">
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
                <Divider />
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    v 1.0.1 current
                </Typography>
            </Box>
        </Drawer>
    );
}
export default CustomDrawer;
