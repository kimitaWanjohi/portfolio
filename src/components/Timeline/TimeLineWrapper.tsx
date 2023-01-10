import React, {useState} from 'react';

import TimeLine from './Timeline';


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Position = 'left' | 'alternate' | 'right';

const TimeLineWrapper: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const position = ((): Position => isMobile? 'right' : 'alternate')();
    
    return (
        <>
            <TimeLine position={position} />
        </>
    )
};

export default TimeLineWrapper;