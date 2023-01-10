import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import TimeLine from '../Timeline/Timeline';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const demoExperience = [
    {
        id: 1,
        position: 'Software Engineer',
        company: 'Cognizant Technology Solutions',
        year: '2021 - Present',
        description: 'Working as a Software Engineer in Cognizant Technology Solutions. I am working on a project for a client in the US. The project is a web application for a company that provides a platform for people to buy and sell their homes. I am working on the frontend of the application using React, Next, Material UI, and Redux. I am also working on the backend of the application using Node, Express, and MongoDB. I am also working on the deployment of the application using Docker and AWS.',
    },
    {
        id: 1,
        position: 'Software Engineer',
        company: 'Cognizant Technology Solutions',
        year: '2021 - Present',
        description: 'Working as a Software Engineer in Cognizant Technology Solutions. I am working on a project for a client in the US. The project is a web application for a company that provides a platform for people to buy and sell their homes. I am working on the frontend of the application using React, Next, Material UI, and Redux. I am also working on the backend of the application using Node, Express, and MongoDB. I am also working on the deployment of the application using Docker and AWS.',
    }
]

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
            <TimeLine isFor={"experience"} data={demoExperience} />
        </Box>
    );
};

export default Experience;
