import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectInterface from './model';

import ProjectCard from './ProjectCard';

interface ProjectsWrapperProps {
  projects: ProjectInterface[];
}

const ProjectsWrapper: React.FC<ProjectsWrapperProps> = ({projects}) => {


  return (
    <>
      <Box sx={{
        width: '100%',
        mt: 5,
      }}>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid> 
      </Box>
    </>
  )
}

export default ProjectsWrapper