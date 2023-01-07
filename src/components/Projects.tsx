import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ProjectsWrapper from './Projects/ProjectsWrapper';
import ProjectInterface from './Projects/model';
import { client, urlFor } from  '../sanity/client';


const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));


const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    console.log(import.meta.env.VITE_SANITY_API_VERSION)

    useEffect(() => {
        const query = '*[_type == "project"]';
        const params = {};
        client.fetch(query, params).then((data) => setProjects(data));
    }, []);

    return (
        <Box sx={{
            my: 10,
            px: 4,
        }}>
            <Typography variant="h4" align="center" component="h2" gutterBottom>
                Here Some Of My <Span> Projects </Span>
            </Typography>


            <ProjectsWrapper projects={projects} />

        </Box>

    )
}

export default Projects;