import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme, styled } from '@mui/material/styles';

import AboutImg from '../../assets/about.png';

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


const HeroSection: React.FC = () => {

    const theme = useTheme();
    return (
        <Box sx={{
            minHeight: {xs: 'auto', md: '80vh'},
            px: theme.spacing(4),   
            pt: theme.spacing(4),
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
                        <Typography variant="h3" gutterBottom component="div" sx={{color: 'white'}}>
                            Know Who I am.
                        </Typography>
                        <MbFont>
                            <Typography sx={{ 
                                fontSize: 'inherit',
                                fontWeight: 'inherit'
                            }} gutterBottom>
                                I am <Span>Kimita Wanjohi</Span> a <Span>FullStack Software Engineer</Span> based in <Span>Kenya</Span>
                            </Typography>
                            <Typography sx={{ 
                                fontSize: 'inherit',
                                fontWeight: 'inherit'
                            }} gutterBottom>
                                I am fluent in languages like <Span>Typescript, Javascript and Python.</Span>
                            </Typography>
                            <Typography sx={{ 
                                fontSize: 'inherit',
                                fontWeight: 'inherit'
                            }} gutterBottom>
                                My main field of interest is the <Span>Web</Span>, but I also Indulge in <Span>AI & Machine Learning</Span>
                            </Typography>
                        </MbFont>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <img src={AboutImg} alt="Home Main" style={{width: '100%'}} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroSection