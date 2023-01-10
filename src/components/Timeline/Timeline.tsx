import React from 'react';

import Timeline from '@mui/lab/Timeline';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import TimelineCardItem from './TimelineCardItem';
import {ExperienceInterface, EducationInterface} from '../About/model';


interface TimeLineProps {
    isFor: 'education' | 'experience'
    data: EducationInterface[] | ExperienceInterface[];
}

type Position = 'left' | 'right' | 'alternate';

const TimeLine: React.FC<TimeLineProps> = ({data}) =>  {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const position = ((): Position => isMobile? 'right' : 'alternate')();

    return (
        <Timeline position={position}>
            {
                data.map((item, index) => {
                    return (
                        <TimelineCardItem key={index} />
                    )
                })
            }
        </Timeline>
    );
}

export default TimeLine