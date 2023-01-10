import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Span = styled('span')(({theme}) => ({
    color: theme.palette.secondary.main,
}))

const Education: React.FC = () => {

    return (
        <Box sx={{
            mx: 8,
            my: 8
        }}>
            <Typography variant="h4" align="center" gutterBottom>
                My <Span> Education </Span>Background
            </Typography>
            
        </Box>
    )
}


export default Education