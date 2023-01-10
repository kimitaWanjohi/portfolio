import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { styled, useTheme} from '@mui/material/styles';


const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const skills= [
    {
        name: 'React',
        icon: 'https://img.icons8.com/color/48/000000/react-native.png'
    },
    {
        name: 'Node',
        icon: 'https://img.icons8.com/color/48/000000/nodejs.png'
    },
    {
        name: 'Express',
        icon: 'https://img.icons8.com/color/48/000000/express.png'
    },
    {
        name: 'Next',
        icon: 'https://img.icons8.com/color/2x/nextjs.png'
    },
    {
        name: 'MongoDB',
        icon: 'https://img.icons8.com/color/48/000000/mongodb.png'
    },
    {
        name: 'Python',
        icon: 'https://img.icons8.com/color/48/000000/python.png'
    },
    {
        name: 'Django',
        icon: 'https://img.icons8.com/color/48/000000/django.png'
    },
    {
        name: 'PostgreSQL',
        icon: 'https://img.icons8.com/color/48/000000/postgreesql.png'
    },
    {
        name: 'Git',
        icon: 'https://img.icons8.com/color/48/000000/git.png'
    },
    {
        name: 'Docker',
        icon: 'https://img.icons8.com/color/48/000000/docker.png'
    },
    {
        name: 'Linux',
        icon: 'https://img.icons8.com/color/48/000000/linux.png'
    },
    {
        name: 'AWS',
        icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png'
    },
]

const SkillItem = styled(Button)(({ theme }) => ({
    border: '1.7px solid rgba(200,137,230,.637)!important',
    borderRadius: '5px',
    boxShadow: '4px 5px 4px 3px rgba(89,4,168,.137)!important',
    fontSize: ' 4.5em!important',
    margin: '15px',
    opacity: '0.8',
    padding: '10px!important',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    verticalAlign: 'middle',
    width: '120px',
    height: '120px',
}));



const Skills: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box>
                <Typography variant="h4" align="center" color="text.primary" >
                    Professional <Span>Skillset</Span>
                </Typography>
                <Grid container spacing={3}>
                    {skills.map((skill, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index}>
                            <Tooltip title={skill.name} placement="top">
                                <SkillItem>
                                    <img src={skill.icon} alt={skill.name} />
                                </SkillItem>
                            </Tooltip>
                        </Grid>
                    ))} 
                </Grid>
            </Box>
        </>
    )
}

export default Skills