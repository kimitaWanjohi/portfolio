import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import TimeLineWrapper from '../Timeline/TimeLineWrapper';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const Experience: React.FC = () => {

    return (
        <Box
            sx={{
                my:10,
                mx: 8
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                My Work <Span>Experience</Span>
            </Typography>
            <TimeLineWrapper />
        </Box>
    );
};

export default Experience;
