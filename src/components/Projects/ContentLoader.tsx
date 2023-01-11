import React from 'react';

import { useTheme } from '@mui/material/styles';

import ContentLoader from 'react-content-loader';


const ContentLoaderDiv: React.FC = () => {
    const theme = useTheme();

    return (
    <ContentLoader viewBox="0 0 1360 900" style={} height={'auto'} width={"100%"}>
        <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
      </ContentLoader>
    )
};


export default ContentLoaderDiv