import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { TypeAnimation } from 'react-type-animation';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import HomeMain from '../../assets/home-main.svg';

const HeroSection: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '60%',
                        color: 'secondary.main',
                    }}>
                        <Typography variant="h3" component="div" sx={{color: 'white'}}>
                            Hi there
                            <Typography variant="h2" gutterBottom color="secondary">
                                {' '}I'm{' '} Kimita Wanjohi
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
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60%',
                    }}>
                        <img src={HomeMain} alt="Home Main" style={{width: '100%'}} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <IconButton href="https://github.com/kimitawanjohi" target="_blank" sx={{color: 'white'}}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/kimitawanjohi/" target="_blank" sx={{color: 'white'}}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="https://twitter.com/kimitaw" target="_blank" sx={{color: 'white'}}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="mailto:kimitawanjohi7923@gmail.com" target="_blank" sx={{color: 'white'}}>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default HeroSection