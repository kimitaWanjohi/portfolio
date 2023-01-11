import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Span = styled('span')(({theme}) => ({
    color: theme.palette.secondary.main,
}))

const Blogs: React.FC = () => {

    return (
        <Box
            sx={{
                my: 10,
                mx: 8,
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                COMING<Span> SOON</Span>
            </Typography>



        </Box>
    )
}


export default Blogs