import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { TypeAnimation } from 'react-type-animation';

import { useNavigate } from 'react-router-dom';

import HomeMain from '../../assets/home-main.svg';

const RoundPillButton = styled(Button)(({ theme }) => ({
    borderRadius: '50px',
    padding: theme.spacing(1, 3),
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: theme.palette.secondary.light,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.secondary}`,
}));


const HeroSection: React.FC = () => {

    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '450px',
                    }}>
                        <Typography variant="h3" component="div" sx={{color: 'white'}}>
                            Hi there
                            <Typography variant="h2" gutterBottom color="secondary">
                                I'm Kimita Wanjohi
                            </Typography>

                            <TypeAnimation
                                cursor={true}
                                wrapper="h3"
                                style={{ color: theme.palette.secondary.light, fontWeight: 'light' }}
                                repeat={Infinity}
                                sequence={[
                                    'A Frontend Developer', 3000,
                                    'A Backend Developer', 3000,
                                    'AI & Machine Learning Enthusiast', 3000,
                                    'Open Source Contributor', 3000,
                                ]} 
                            />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '450px',
                    }}>
                        <img src={HomeMain} alt="Home Main" style={{width: '100%', maxHeight: '450px'}} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'transparent',
                    }}>
                        <RoundPillButton variant="outlined" onClick={() => navigate('/about')}>
                            About Me
                        </RoundPillButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default HeroSection