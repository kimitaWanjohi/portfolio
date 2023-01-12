import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ReactGithubCalendar from 'react-github-calendar';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const GithubHeat: React.FC = () => {
  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10}}>
            <Typography variant="h4" align="center" gutterBottom component="div">
                Github <Span>Contribution Graph</Span>
            </Typography>
            <Box sx={{width: '100%', height: 'auto', mt: 5, display: 'flex', justifyContent: 'center'}}>
                {<ReactGithubCalendar color={"#C770F0"}  username="kimitawanjohi"/>}
            </Box>
        </Box>
    </>
  )
}

export default GithubHeat