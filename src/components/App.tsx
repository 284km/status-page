import React from 'react';
import AppHeader from './common/AppHeader';
  import StatusList from './contents/StatusList';
import IncidentHistory from './contents/IncidentHistory';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <AppHeader />

      <Alert icon={false} severity="success">
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
          ✅ All Systems Operational
        </Typography>
      </Alert>

      <StatusList />
      <IncidentHistory />

    </div>
  );
}

export default App;
