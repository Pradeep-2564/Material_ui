import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function FirstCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/cse.png"
        title="Computer Science and Engineering"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CSE
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Computer science and computer engineering are technically separate fields that focus on different aspects of computer technology. Computer science primarily deals with computer theory and software, while computer engineering focuses on computer design and hardware.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default FirstCard