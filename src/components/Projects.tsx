import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ProjectsWrapper from './Projects/ProjectsWrapper';
import ProjectInterface from './Projects/model';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const demoProjects: ProjectInterface[]  = [
    {
      title: 'Project 1',
      description: 'This is a demo project',
      image: 'https://source.unsplash.com/random',
      tags: ['React', 'Next.js', 'Material-UI'],
      source: 'https://github.com',
      visit: 'https://google.com',
      id: 0,
    },
    {
      title: 'Project 2',
      description: 'This is a demo project',
      image: 'https://source.unsplash.com/random',
      tags: ['React', 'Next.js', 'Material-UI'],
      source: 'https://github.com',
      visit: 'https://google.com',
      id: 1,
    },
    {
      title: 'Project 3',
      description: 'This is a demo project',
      image: 'https://source.unsplash.com/random',
      tags: ['React', 'Next.js', 'Material-UI'],
      source: 'https://github.com',
      visit: 'https://google.com',
      id: 2,
    }
  ];


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

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <ProjectsWrapper projects={demoProjects} />
                </Box>
            </Box>
        </>

    )
}

export default Projects;