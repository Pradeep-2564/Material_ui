import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SecondCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/mba.jpg"
        title="Masters of Business Administration"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MBA
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A master of business administration (MBA) is a graduate degree that provides theoretical and practical training for business or investment management. An MBA is designed to help graduates gain a better understanding of business management functions.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SecondCard