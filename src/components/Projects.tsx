import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ProjectsWrapper from './Projects/ProjectsWrapper';
import ProjectInterface from './Projects/model';
import { }


const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));


const Projects: React.FC = () => {

    return (
        <Box sx={{
            my: 10,
            px: 4,
        }}>
            <Typography variant="h4" align="center" component="h2" gutterBottom>
                Here Some Of My <Span> Projects </Span>
            </Typography>


            <ProjectsWrapper projects={demoProjects} />

        </Box>

    )
}

export default Projects;