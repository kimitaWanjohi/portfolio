import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import TimeLineWrapper from '../Timeline/TimeLineWrapper';

const Span = styled('span')(({theme}) => ({
    color: theme.palette.secondary.main,
}))


const demoEducation = [
    {
        id: 1,
        school: 'University of California, Irvine',
        degree: 'B.S. Computer Science',
        year: '2018 - 2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        school: 'University of California, Irvine',
        degree: 'B.S. Computer Science',
        year: '2018 - 2022',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

const Education: React.FC = () => {

    return (
        <Box sx={{
            mx: 8,
            my: 8
        }}>
            <Typography variant="h4" align="center" gutterBottom>
                My <Span> Education </Span>Background
            </Typography>

            <TimeLineWrapper isFor={"education"} data={demoEducation} /> 
        </Box>
    )
}


export default Education