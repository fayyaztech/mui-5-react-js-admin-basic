import React, { useState } from 'react';
import {
    Box,
    CardMedia,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../logo.svg'; // Adjust the path as necessary
import menuConfig from '../layouts/routes'; // Import the menu configuration

const CustomDrawer = ({ open, onClose }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const location = useLocation();

    const handleDrawerItemClick = (hasChildren) => {
        console.log(hasChildren)
        if (!isLargeScreen && !hasChildren) {
            onClose(); // Close the drawer on small screens or if the item doesn't have children
        }
    };

    const [openMenu, setOpenMenu] = useState({});

    const handleMenuClick = (menuTitle) => {
        setOpenMenu((prevState) => ({
            ...Object.fromEntries(
                Object.entries(prevState).map(([key, value]) => [key, key === menuTitle ? !value : false])
            ),
            [menuTitle]: !prevState[menuTitle],
        }));
    };

    const currentPath = location.pathname;
    const shouldHideAppBar = menuConfig.some(menu =>
        menu.path === currentPath || menu.children.some(submenu => submenu.path === currentPath)
    );

    return (
        <Drawer
            variant={isLargeScreen ? "permanent" : "temporary"}
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 240,
                    marginTop: isLargeScreen && !shouldHideAppBar ? 8 : 7, // Adjust marginTop to push the drawer below AppBar
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
                    {menuConfig.map(menu => (
                        <React.Fragment key={menu.title}>
                            <ListItem
                                button
                                component={menu.children.length > 0 ? 'div' : Link} // If it has children, use div, else Link
                                to={menu.path}
                                onClick={() => {
                                    handleDrawerItemClick(menu.children.length > 0)
                                    handleMenuClick(menu.title)
                                }} // Pass if it has children
                            >
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.title} />
                                {menu.children.length > 0 && (
                                    openMenu[menu.title] ?
                                        <ExpandLess /> :
                                        <ExpandMore />
                                )}
                            </ListItem>
                            {menu.children.length > 0 && (
                                <Collapse in={openMenu[menu.title]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {menu.children.map(submenu => (
                                            <ListItem
                                                button
                                                key={submenu.title}
                                                sx={{ pl: 4 }}
                                                component={Link}
                                                to={submenu.path}
                                                onClick={() => { handleDrawerItemClick(false) }}
                                            >
                                                <ListItemIcon>
                                                    {submenu.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={submenu.title} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
                <Divider />
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    v 1.0.0
                </Typography>
            </Box>
        </Drawer>
    );
};

export default CustomDrawer;
