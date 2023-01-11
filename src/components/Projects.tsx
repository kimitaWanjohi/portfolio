import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { PropagateLoader } from 'react-spinners';
import ProjectsWrapper from './Projects/ProjectsWrapper';

import ProjectInterface from './Projects/model';
import { client } from  '../sanity/client';


const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const Loading = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
}));


const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "project"]';
        const params = {};
        client.fetch(query, params).then((data) => {
            setLoading(false);
            setProjects(data);
        });
    }, []);

    return (
        <Box sx={{
            my: 10,
            px: 4,
        }}>
            <Typography variant="h4" align="center" component="h2" gutterBottom>
                Here Some Of My <Span> Projects </Span>
            </Typography>
            { loading ? 
            <Loading>
                <PropagateLoader color={'#C770F0'} loading={true} size={20}  />
            </Loading>
            :<ProjectsWrapper projects={projects}/> }
        </Box>

    )
}

export default Projects;