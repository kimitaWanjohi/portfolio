import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ProjectsWrapper from './Projects/ProjectsWrapper';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
}));



const Projects: React.FC = () => {

    return (
        <>
            <Box sx={{ 
                my: 10,
                px: 10,
                minHeight: '50vh',

            }}>
                <Typography variant="h4" align="center" component="h2" gutterBottom>
                    Here Some Of My <Span> Projects </Span>
                </Typography>

                <Box>
                    <ProjectsWrapper />
                </Box>
            </Box>
        </>

    )
}

export default Projects;