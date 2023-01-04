import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const About: React.FC = () => {
    
    return (
        <>
            <Box>
                <Typography variant="h1" component="h2" color="secondary" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                I am a Full-stack software engineer with a keen interest in designing elegant solutions to technical problems. <br />
                I am skilled in problem-solving and can leverage full-stack knowledge and experience to build and scale user-centered software designs. <br />
                I am a highly motivated self-starter and team player. <br />
                Also,  I'm a quick learner and have a keen eye for detail. <br />
                </Typography>
            </Box>
        </>
    )
}