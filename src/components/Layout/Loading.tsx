import React from 'react';
import Box from '@mui/material/Box';
import { HashLoader } from 'react-spinners';


const Loading: React.FC = () => {
    
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10, minHeight: '60vh'}}>
                <HashLoader color={'#C770F0'} loading={true} size={40} />
            </Box>
        </>
    )
}

export default Loading;