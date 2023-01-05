import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import { TypeAnimation } from 'react-type-animation';

import HomeMain from '../../assets/home-main.svg';


const HeroSection: React.FC = () => {

    const theme = useTheme();
    return (
        <Box sx={{
            height: {xs: 'auto', md: '100vh'},
            mb: theme.spacing(4)
        }}>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%'
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
                <Grid item xs={12} sm={5}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <img src={HomeMain} alt="Home Main" style={{width: '100%'}} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroSection