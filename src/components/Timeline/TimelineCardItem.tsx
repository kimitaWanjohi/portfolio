import React from 'react';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import WorkHistoryIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';


import { EducationInterface, ExperienceInterface } from '../About/model';

interface TimelineCardItemProps {
    item: EducationInterface | ExperienceInterface;
    isFor: 'education' | 'experience';
}

const TimeLineCardItem: React.FC <TimelineCardItemProps>= ({ item, isFor }) => {

    if (isFor === 'education'){
        const educationItem = item as EducationInterface;
        return (
            <TimelineItem>  
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {educationItem.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Card>
                        <CardHeader
                            title={ educationItem.degree }
                            subheader={ educationItem.school }
                        />
                        <CardContent>
                            <Typography variant='body1' component="div" align="center" >
                                {educationItem.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </TimelineContent>
            </TimelineItem>
        )

    }else {
        const experienceItem = item as ExperienceInterface;

        return (
            <TimelineItem>  
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {experienceItem.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot>
                        <WorkHistoryIcon />
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Card>
                    <CardHeader
                        title={experienceItem.position}
                        subheader={experienceItem.company}
                    />
                    <CardContent>
                        <Typography variant='body1' component="div" align="center" >
                            {experienceItem.description}
                        </Typography>
                    </CardContent>
                </Card>
            </TimelineContent>
        </TimelineItem>
    )
    }

};

export default TimeLineCardItem;