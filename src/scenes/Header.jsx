// Header.js
import React, { useContext } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext } from '../theme';

function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const iconColor = theme.palette.mode === 'light' ? 'rgb(0 0 0)' : 'rgb(255 255 255)';

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode} style={{ color: iconColor }}>
          {theme.palette.mode === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          )}
        </IconButton>
      </Box>
      <Typography variant="h1" style={{ fontFamily: 'IranianSans', fontSize: '40px', lineHeight: '0px' }}>داشبورد</Typography>
    </Box>
  );
}

export default Header;
