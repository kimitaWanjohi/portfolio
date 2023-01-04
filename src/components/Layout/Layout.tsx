import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';


interface LayoutProps {
    children?: React.ReactNode;
}

const Main = styled('main')(({ theme }) => ({
  marginTop: theme.mixins.toolbar.minHeight,
  paddingBottom: theme.spacing(15),
}));

const Layout:React.FC<PropsWithChildren<LayoutProps>> = ({children}) =>  {

  return ( 
    <Container maxWidth={false} sx={{minHeight: '100vh', position: 'relative' }}>
        <Navbar />
          <Main>
            {children}
          </Main>
        <Footer />
    </Container>
  )
}

export default Layout