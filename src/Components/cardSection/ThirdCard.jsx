import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ThirdCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/eee.jpg"
        title="Electronics and Communication Engineering"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ECE
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Electronics and Communication Engineering (ECE) is the field of engineering that involves electronics, telecommunication, hardware designs, electronics components, and electronics device circuits as well as the transmission of information through various communication channels.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ThirdCard