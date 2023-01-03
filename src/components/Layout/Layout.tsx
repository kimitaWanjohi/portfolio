import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout:React.FC<PropsWithChildren<LayoutProps>> = ({children}) =>  {

  return ( 
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout