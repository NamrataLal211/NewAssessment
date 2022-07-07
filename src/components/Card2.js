import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import idea from '../images/idea.png'
import { useNavigate } from "react-router-dom";


export default function Card2() {

    const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, padding:'2%', margin:'4%' }}>
      <CardActionArea>
        <CardMedia sx={{backgroundColor:'#06283d'}}>
            <img src={idea} alt='test' style={{height:'160px', width:'180px', padding:'3% 24%'}}></img>
        </CardMedia>
          
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily='poppins'><b>
            TEST
          </b></Typography>
          <Typography variant="h6" color="text.secondary" fontFamily='poppins'>
            Total Questions - 40
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained'  color="primary"
        onClick={() => navigate('/mainlayout')}
        >
          Start Test
        </Button>
      </CardActions>
    </Card>
  );
}