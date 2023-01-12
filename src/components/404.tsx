import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme, styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import NotFoundImg from '../assets/404.png';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const MbFont =  styled('div')(({ theme }) => ({
    fontSize: '1.3rem',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
    }
}));


const NotFound: React.FC = () => {

    const theme = useTheme();
    return (
        <Box >
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%'
                    }}>
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white'}}>
                            404 Error:
                        </Typography>
                        <Typography variant="h6" color="secondary">
                        The page you're looking for is lost in space. Please try again or return to the <Link to="/">home planet</Link> 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box sx={{
                        display: 'flex',
                        mt: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={NotFoundImg} alt="Home Main" style={{width: '80%', height: 'auto'}} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotFound