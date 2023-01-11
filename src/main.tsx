import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';
import {theme} from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <App />
        </Router> 
    </ThemeProvider>
  </React.StrictMode>,
)
