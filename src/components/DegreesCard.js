import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const style = {
    minWidth: 350,
    minHeight: 250,
    textAlign: 'left',
    border: '0.5px solid black',
    borderBottom: '10px solid #F76902'
}

const bull = (
  <Box sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.8)'}}>•</Box>
);

export default function BasicCard({degreeName, title, description, concentrations}) {
  return (

    <Card sx={style}>
      <CardContent>

        <Typography className='degreeTitle' sx={{ fontSize: 50, marginBottom: '0', paddingBottom: '0', top: '0' }} color="#F76902" gutterBottom>
          {degreeName}
        </Typography>

        <Typography variant="h5" component="div" sx={{ fontSize: '20px', paddingTop: '0', marginTop: '0'}}>
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <br/>
          {description}
        </Typography>
        <br/>


        <Typography variant="body2"></Typography>
      </CardContent>
      {/* <CardActions></CardActions> */}
    </Card>
  );
}