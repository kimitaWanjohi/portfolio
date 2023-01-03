import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './index.css';
import {theme} from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
)
