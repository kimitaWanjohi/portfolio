import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const GithubHeat: React.FC = () => {
  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10}}>
            <Typography variant="h4" gutterBottom component="div">
                Github <Span>Contribution Graph</Span>
            </Typography>
            <Box sx={{width: '100%', height: 'auto', mt: 5}}>
                <img src="https://ghchart.rshah.org/1ac6ff/kimitawanjohi" alt="kimita-wanjohi's Github chart" style={{
                    width: '100%',
                    height: 'auto'
                }} />
            </Box>
        </Box>
    </>
  )
}

export default GithubHeat