import { Typography, Box, Grid, Divider, IconButton, Button, Checkbox } from '@mui/material';
import React, {useContext, useState,useEffect} from 'react';
import EditQuestion from './EditQuestion';
import Languages from './AddOptions';


export default function MainLayout(){

    

    const [aboutMe, setAboutMe] = useState('Add your question here')
    return(
        <Grid container>
          <Grid item xs={12} lg={10} padding='2%'>
             <Box sx={{height:'auto',  width:'60%' , border:'1px solid black', padding:'2%'}}>
             <Grid backgroundColor='#25d366'>
                <Typography variant='h5' padding='2%' color='white'>CHECKBOX ASSESSMENT</Typography>
            </Grid>
                

         <Grid item xs={12} lg={12} md={4} margin='2% 0%' display='flex'>
          <Typography fontFamily="poppins" variant="h5" marginBottom="2%">
            Mention the question you want to ask .
          </Typography>
          
          <EditQuestion setAbout={setAboutMe} />
        
          </Grid>

          <Grid xs={6} lg={12}>
          <Typography variant='h5' color="#4a4a4a" fontFamily="poppins" marginBottom="2%" fontWeight='bold'>
           Q. {aboutMe}
          </Typography>
        </Grid>
        

        <Grid item xs={12}>
        <Typography fontFamily="poppins" variant="h7" >
        Maximum four options can be entered.
      </Typography>
        </Grid>

        <Grid item xs={12}>
          <Languages type={<Checkbox sx={{margin:'1% 0%'}}/>}/>
        </Grid>

        <Grid item xs={12} >
        <Button
        variant="contained"
        sx={{ borderRadius: "40px", width: "100px" }}
        >
        Save
      </Button>
        </Grid>
             </Box>
          </Grid>
        </Grid>
    )
}