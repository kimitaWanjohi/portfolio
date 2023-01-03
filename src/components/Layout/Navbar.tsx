import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {styled} from '@mui/material/styles';


const NavLinks = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'spaced-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const NavLinksMobile = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'spaced-evenly',
        alignItems: 'center',
    },
}));

const NavLink = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: '1.25rem',
    '&:hover': {
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
    }
}));

const Navbar: React.FC = () => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <AppBar position="sticky"
            color={"transparent"}
            sx={{
                backdropFilter: trigger ? "blur(7px)" : "none",
                boxShadow: trigger ? "0px 0px 10px 0px rgba(0,0,0,0.75)" : "none",
                elevation: trigger ? 4 : 0,
                transition: "all 0.3s ease-in-out",
            }}  
        >
            <Toolbar sx={{
               
            }}>
                <Typography variant="h4" color="secondary" component="div" sx={{ flexGrow: 1, fontStyle: 'italic' }}>
                    KW
                </Typography>
                <NavLinks>
                    <NavLink size="large" variant="text" startIcon={<HomeOutlinedIcon />}>Home</NavLink>
                    <NavLink size="large" variant="text" startIcon={<PersonOutlinedIcon />}>About</NavLink>
                    <NavLink size="large" variant="text" startIcon={<MonitorOutlinedIcon />}>Project</NavLink>
                    <NavLink size="large" variant="text" startIcon={<FeedOutlinedIcon />}>Resume</NavLink>
                </NavLinks>
            
                <Box sx={{ ml: 10 }} />
            </Toolbar>
        </AppBar>
    ) 
}

export default Navbar