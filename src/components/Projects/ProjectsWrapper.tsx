import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ProjectInterface from './model';

import Project from './Project';

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
        <Stack spacing={2} sx={{ width: '100%', justifyConent: 'center'}} direction="column">
          {projects.map((project) => (
              <Project project={project} />
          ))}
          </Stack>
      </Box>
    </>
  )
}

export default ProjectsWrapper