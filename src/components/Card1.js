import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import test from '../images/test.png'
import { useNavigate } from "react-router-dom";


export default function Card1() {

    const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, padding:'2%', margin:'4%' }}>
      <CardActionArea>
        <CardMedia sx={{backgroundColor:'#25d366'}}>
            <img src={test} alt='test' style={{height:'160px', width:'180px', padding:'3% 24%'}}></img>
        </CardMedia>
          
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily='poppins'><b>
            Business Intelligence
          </b></Typography>
          <Typography variant="h6" color="text.secondary" fontFamily='poppins'>
            Take the final assessment of Business Intelligence(Part 1)-
            Statistics to test your skills
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained'  color="primary"
        onClick={() => navigate('/card2')}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}