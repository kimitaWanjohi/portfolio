import React from 'react';

import { EducationInterface, ExperienceInterface } from '../About/model';

import TimeLine from './Timeline';


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Position = 'left' | 'alternate' | 'right';


interface TimeLineWrapperProps {
    isFor: 'education' | 'experience';
    data: EducationInterface[] | ExperienceInterface[];
}
    

const TimeLineWrapper: React.FC<TimeLineWrapperProps> = ({isFor, data}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const position = ((): Position => isMobile? 'right' : 'alternate')();
    
    return (
        <>
            {
                isFor === 'education'? <TimeLine position={position} data={data as EducationInterface[]} /> : <TimeLine position={position} data={data as ExperienceInterface[]} />
            }
        </>
    )
};

export default TimeLineWrapper;