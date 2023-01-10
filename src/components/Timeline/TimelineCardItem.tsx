import React from 'react';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';

import FastfoodIcon from '@mui/icons-material/Fastfood';

const TimeLineCardItem: React.FC = () => {

    return (
        <TimelineItem>  
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            >
            9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
                <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Eat
            </Typography>
            <Typography>Because you need strength</Typography>
            </TimelineContent>
        </TimelineItem>
    )
};

export default TimeLineCardItem;