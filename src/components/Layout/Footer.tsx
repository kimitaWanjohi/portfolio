import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <Box sx={{ 
      bgcolor: 'secondary.dark',
      color: 'common.white',
      p: 2,
      mt: 2,
      textAlign: 'center',
      display: 'flex',
      justifyContent: {xs: 'space-around', md: 'space-between'},
      flexDirection: {xs: 'column', sm: 'row'},
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      left: 0,
      maxHeight: '120px',
    }}>
      <Typography variant="h6" align="center" sx={{
        fontWeight: 500,
        fontSize: '1.2rem'
      }}>
        Designed and Developed by Kimita
      </Typography>
      <Typography variant="h6" component='div' align="center" sx={{
        fontWeight: 500,
        fontSize: '1.2rem'
      }}>
        Copyright &copy; {new Date().getFullYear()} {" "}
        <Typography variant="h6" component='span' color="secondary" sx={{
          fontWeight: 500,
          fontSize: '1.2rem'
        }}>
          KW
        </Typography>
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton size="small" color="inherit" aria-label="github" href="https://github.com/kimitawanjohi" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton size="small" color="inherit" aria-label="linkedin" href="https://www.linkedin.com/in/kimitawanjohi/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton size="small" color="inherit" aria-label="instagram" href="https://www.instagram.com/kimitawanjo/" target="_blank">
          <InstagramIcon />
        </IconButton>
        <IconButton size="small" color="inherit" aria-label="twitter" href="https://twitter.com/kimitaW" target="_blank">
          <TwitterIcon />
        </IconButton>
    </Box>
  </Box>
  )
}

export default Footer