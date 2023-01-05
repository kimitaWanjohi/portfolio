import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';

import Avatar from '../../assets/avatar.svg';


const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const MbFont =  styled('div')(({ theme }) => ({
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem'
    }
}));


const Introduction: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                my: theme.spacing(4),
                px: theme.spacing(4),
            }}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            px: theme.spacing(2)
                        }}>
                            <img src={Avatar} alt="About" style={{ maxWidth: '220px', height: 'auto', width: '100%'}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                height: '100%',
                                px: theme.spacing(2)
                            }}
                        > 
                            <MbFont>
                                <Typography variant="h2" component="h2" gutterBottom>
                                    Let Me <Span>Introduce</Span> Myself
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit'
                                }} gutterBottom>
                                    I am a <Span>Full-stack software engineer</Span> with a keen interest in designing elegant solutions to <Span>technical problems</Span>.
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit'
                                }} gutterBottom>
                                    Skilled in <Span>problem-solving</Span> and can leverage full-stack knowledge and experience to build and scale <Span>user-centered</Span> software designs. <br />
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit'
                                }} gutterBottom>
                                    I am a highly motivated self-starter and team player. <br />
                                </Typography>
                                <Typography sx={{ 
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit'
                                }} gutterBottom>
                                    Also,  I'm a <Span>quick learner</Span> and have a keen eye for detail. <br />
                                </Typography>
                            </MbFont>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </> 
    )
}

export default Introduction