import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import {styled, useTheme} from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';


const NavLinks = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'spaced-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));


const NavLink = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    fontWeight: 400,
    display: 'flex',
    justifyContent: 'end',
    alignContent: 'center',
    fontSize: '1.25rem',
    '&:hover': {
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
    }
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    background: theme.palette.background.paper,
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    zIndex: theme.zIndex.appBar - 1
}));

const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <AppBar position="sticky"
            color={"transparent"}
            sx={{
                backdropFilter: trigger ? "blur(7px)" : "none",
                background: trigger? 'rgba(0, 0, 0, 0.5)': undefined,
                boxShadow: trigger ? "0px 0px 10px 0px rgba(0,0,0,0.75)" : "none",
                elevation: trigger ? 4 : 0,
                transition: "all 0.3s ease-in-out",
                zIndex: theme.zIndex.drawer + 1,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
            }}  
        >
            <Toolbar>
                <Typography variant="h4" color="secondary" component="div" sx={{ flexGrow: 1, fontStyle: 'italic' }}>
                    KW
                </Typography>
                <NavLinks>
                    <NavLink size="large" variant="text" onClick={() => navigate('/')} startIcon={<HomeOutlinedIcon />}>Home</NavLink>
                    <NavLink size="large" variant="text" onClick={() => navigate('/about')} startIcon={<PersonOutlinedIcon />}>About</NavLink>
                    <NavLink size="large" variant="text" onClick={() => navigate('/projects')} startIcon={<MonitorOutlinedIcon />}>Project</NavLink>
                    <NavLink size="large" variant="text" onClick={() => navigate('/resume')} startIcon={<FeedOutlinedIcon />}>Resume</NavLink>
                </NavLinks>

                <IconButton
                    size="large"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                    aria-label="open drawer"
                    edge="start"
                    color="secondary"
                    onClick={() => setOpen(!open)}
                >
                    {
                        open ? <CloseIcon /> : <MenuIcon />
                    }
                </IconButton>

                <Box sx={{ ml: 10, display: { xs: 'none', sm: 'block'} }} />
            </Toolbar>
            <Drawer
                anchor="top"
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    backdropFilter:"blur(7px)",
                    background:'rgba(0, 0, 0, 0.5)',
                    zIndex: theme.zIndex.appBar - 1,
                }}
            >
                <DrawerHeader>
                    <IconButton
                        size="large"
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                        aria-label="open drawer"
                        edge="start"
                        color="secondary"
                        onClick={() => setOpen(!open)}
                    >
                        {
                            open ? <CloseIcon /> : <MenuIcon />
                        }
                    </IconButton>
                </DrawerHeader>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    background: theme.palette.background.default,
                }}>
                    <NavLink size="large" variant="text" onClick={() => {navigate('/'); setOpen(false);}} startIcon={<HomeOutlinedIcon />}>Home</NavLink>
                    <NavLink size="large" variant="text" onClick={() => {navigate('/about'); setOpen(false);}} startIcon={<PersonOutlinedIcon />}>About</NavLink>
                    <NavLink size="large" variant="text" onClick={() => {navigate('/projects'); setOpen(false);}} startIcon={<MonitorOutlinedIcon />}>Project</NavLink>
                    <NavLink size="large" variant="text" onClick={() => {navigate('/resume'); setOpen(false);}} startIcon={<FeedOutlinedIcon />}>Resume</NavLink>
                </Box>
            </Drawer>
        </AppBar>
    ) 
}

export default Navbar