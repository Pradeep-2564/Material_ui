import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

function HeroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 660, height: 300 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h6" component="div" >
            LEARN AI DEVELOPMENT
          </Typography>
          <Typography gutterBottom component="div">
            <ShareIcon sx={{fontSize: '40px'}}/>
          </Typography>
        </Stack>
        <Typography variant='h3' fontWeight='800' 
        sx={{backgroundImage: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
            webkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color:'transparent'
        }}
        >
        Post Graduate Programme in Data Science & AI
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Get Now
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Apply Now" size="large" sx={{cursor: 'pointer'}} />
          <Chip color='secondary' label="Download Syllabus" size="large" sx={{cursor: 'pointer'}} />
          {/* <Chip label="Hard" size="small" /> */}
        </Stack>
      </Box>
    </Card>
  );
}

export default HeroDivider