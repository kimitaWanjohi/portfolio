import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import Container from '@mui/material/Container';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout:React.FC<PropsWithChildren<LayoutProps>> = ({children}) =>  {

  return ( 
    <Container maxWidth={false} sx={{minHeight: '100vh', position: "relative" }}>
        <Navbar />
        {children}
        <Footer />
    </Container>
  )
}

export default Layout