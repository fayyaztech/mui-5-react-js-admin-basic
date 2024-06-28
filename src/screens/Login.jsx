import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../logo.svg';

export default function Login() {
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '40vh'
            }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt="logo"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h2" component="h1">
                                Login
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <TextField id="username" label="Username" variant="outlined" type='text' fullWidth />
                            <TextField id="password" label="Password" variant="outlined" type='password' fullWidth />
                            <Button variant="contained">Login</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </React.Fragment>
    )
}
