import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled, useTheme} from '@mui/material/styles';

const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const Skills: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ px: theme.spacing(2) }}>
                <Typography variant="h4" align="center" color="text.primary" >
                    Professional <Span>Skillset</Span>
                </Typography>
                <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                </Stack>
            </Box>
        </>
    )
}

export default Skills