import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { PropagateLoader } from 'react-spinners';

import {EducationInterface} from './model';
import TimeLine from '../Timeline/Timeline';
import { client } from '../../sanity/client';

const Span = styled('span')(({theme}) => ({
    color: theme.palette.secondary.main,
}))

const Loading = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
}));

const Education: React.FC = () => {
    const [education, setEducation] = useState<EducationInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = '*[_type == "education"]';
        const params = {};
        client.fetch(query, params).then((data) => {
            setLoading(false);
            setEducation(data);
        });
    }, []);

    return (
        <Box sx={{
            mx: 8,
            my: 8
        }}>
            <Typography variant="h4" align="center" gutterBottom>
                My <Span> Education </Span>Background
            </Typography>
            {
                loading?
                <Loading>
                    <PropagateLoader color={'#C770F0'} loading={true} size={20}  />
                </Loading>:
                <TimeLine isFor={"education"} data={education} />
            }
        </Box>
    )
}


export default Education