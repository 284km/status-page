import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function IncidentHistory(props: any): ReactElement {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ flexGrow: 1, mt: 4, mb: 4, p: 4 }} style={{ color: "#000000", backgroundColor: "#f5f8fa" }}>
      <Typography sx={{ mt: 2, mb: 2 }} variant="h4" component="div">
        Incident History
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            System name or date
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>概要とか、期間とかその辺を表示するとか？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            July 2021 to September 2021
            Incident with System A and API
            過去の起きたことの詳細などが書かれる
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
        <Typography>
            Resolved
            This incident has been resolved.
            Posted 4 days ago. Sep 15, 2021 - 06:42 UTC
            Update
            GitHub Packages is operating normally.
            Posted 4 days ago. Sep 15, 2021 - 06:32 UTC
            Update
            GitHub Packages is experiencing degraded performance. We are still investigating and will provide an update when we have one.
            Posted 4 days ago. Sep 15, 2021 - 05:36 UTC
            Investigating
            We are investigating reports of degraded performance for Webhooks.
            Posted 4 days ago. Sep 15, 2021 - 05:35 UTC
        </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Resolved
            This incident has been resolved.
            Posted 22 days ago. Aug 28, 2021 - 03:43 UTC
            Investigating
            We are investigating reports of degraded performance for GitHub Packages.
            Posted 22 days ago. Aug 28, 2021 - 02:32 UTC
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
            System B
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>July 2021 to September 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            July 2021 to September 2021
            Incident with System A and API
            過去の起きたことの詳細などが書かれる
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
        <Typography>
            Resolved
            This incident has been resolved.
            Posted 4 days ago. Sep 15, 2021 - 06:42 UTC
            Update
            GitHub Packages is operating normally.
            Posted 4 days ago. Sep 15, 2021 - 06:32 UTC
            Update
            GitHub Packages is experiencing degraded performance. We are still investigating and will provide an update when we have one.
            Posted 4 days ago. Sep 15, 2021 - 05:36 UTC
            Investigating
            We are investigating reports of degraded performance for Webhooks.
            Posted 4 days ago. Sep 15, 2021 - 05:35 UTC
        </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Resolved
            This incident has been resolved.
            Posted 22 days ago. Aug 28, 2021 - 03:43 UTC
            Investigating
            We are investigating reports of degraded performance for GitHub Packages.
            Posted 22 days ago. Aug 28, 2021 - 02:32 UTC
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          July 2021 to September 2021
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>System A, B, C</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            July 2021 to September 2021
            Incident with System A and API
            過去の起きたことの詳細などが書かれる
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
        <Typography>
            Resolved
            This incident has been resolved.
            Posted 4 days ago. Sep 15, 2021 - 06:42 UTC
            Update
            GitHub Packages is operating normally.
            Posted 4 days ago. Sep 15, 2021 - 06:32 UTC
            Update
            GitHub Packages is experiencing degraded performance. We are still investigating and will provide an update when we have one.
            Posted 4 days ago. Sep 15, 2021 - 05:36 UTC
            Investigating
            We are investigating reports of degraded performance for Webhooks.
            Posted 4 days ago. Sep 15, 2021 - 05:35 UTC
        </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Resolved
            This incident has been resolved.
            Posted 22 days ago. Aug 28, 2021 - 03:43 UTC
            Investigating
            We are investigating reports of degraded performance for GitHub Packages.
            Posted 22 days ago. Aug 28, 2021 - 02:32 UTC
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default IncidentHistory;