import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { PropagateLoader } from 'react-spinners';

import TimeLine from '../Timeline/Timeline';
import { client } from '../../sanity/client';
import { ExperienceInterface } from './model';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const Loading = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
}));

const Experience: React.FC = () => {
    const [experience, setExperience] = useState<ExperienceInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "experience"]';
        const params = {};
        client.fetch(query, params).then((data) => {
            setLoading(false);
            setExperience(data);
        });
    }, []);

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
            {
                loading?
                <Loading>
                    <PropagateLoader color={'#C770F0'} loading={true} size={20}  />
                </Loading>:
                <TimeLine isFor={"experience"} data={experience} />
            }
        </Box>
    );
};

export default Experience;
