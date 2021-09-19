import React, { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AppHeader(props: any): ReactElement {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
            284km.dev Status
          </Typography>
          <Button color="inherit">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Link
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
