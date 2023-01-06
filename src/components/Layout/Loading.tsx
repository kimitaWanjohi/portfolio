import React from 'react';
import Box from '@mui/material/Box';
import { RiseLoader } from 'react-spinners';


const Loading: React.FC = () => {
    
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10, minHeight: '60vh'}}>
                <RiseLoader color={'#C770F0'} loading={true} size={20} />
            </Box>
        </>
    )
}

export default Loading;