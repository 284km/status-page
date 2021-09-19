import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function StatusList(props: any): ReactElement {
  return (
    <Box sx={{ flexGrow: 1, mt: 4, mb: 4, p: 4 }} style={{ color: "#000000", backgroundColor: "#f5f8fa" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mb: 2 }} variant="h3" component="div">
            Current status
          </Typography>
          <Alert severity="success">
            <AlertTitle>System A</AlertTitle>
            Normal
          </Alert>
          <Divider />
          <Alert severity="success">
            <AlertTitle>System B</AlertTitle>
            Normal
          </Alert>
          <Divider />
          <Alert severity="warning">
            <AlertTitle>System C API</AlertTitle>
            Performance Issues
          </Alert>
          <Divider />
          <Alert severity="success">
            <AlertTitle>System D</AlertTitle>
            Normal
          </Alert>
          <Alert severity="error">
            <AlertTitle>System E</AlertTitle>
            Major outage
          </Alert>
          <Alert severity="success">
            <AlertTitle>System F</AlertTitle>
            Normal
          </Alert>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StatusList;