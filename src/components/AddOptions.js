import {
    Grid,
    Box,
    Typography,
    IconButton,
    Button,
    Modal,
    
    TextField,
    FormLabel,
    
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  
  import React, { useContext, useState } from "react";
  
  import CloseIcon from "@mui/icons-material/Close";
import { BorderColor } from "@mui/icons-material";
  



  
  
  const style = {
    bgcolor: "background.paper",
  
    boxShadow: 24,
    p: 4,
  
    marginTop: "30px",
  };
  
  export default function Languages({ hc, index, type }) {
    // const [arr, setArr] = useState([
    //   {
    //     title: "English",
    //     Emptyp: "Intermediate",
  
    //   },
    // ]);
  
    // const [languageArr, setLanguageArr] = useContext(ResumeContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    const [title, settitle] = useState("");
    const [Emptyp, setEmptyp] = useState("");
    
    const [data,setData] = useState([{title:'Eg-A. Technology'}])
  
    return (
      <Grid container>
        
        <Grid item xs={12} lg={12} sx={{ marginTop: "20px" }}>
          {data.map((item, index) => {
            return (
              <Box sx={{ border: "1px solid #177acc", width: "90%", marginBottom: '2%', paddingBottom: '2%' }}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                  }}
                > 
                  {type}
                  <Typography variant='h6' sx={{ marginTop: "2%", fontFamily: "poppins" }}>
                    <b>{item.title}</b>
                  </Typography>
                  <IconButton
                    onClick={() => {
                      let newarr = [...data];
                      newarr.splice(index, 1);
                      setData(newarr);  
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                
              </Box>
            );
          })}
        </Grid>
        
        <Grid item xs={12} lg={12} sx={{ marginTop: "20px", marginBottom: '2%' }}>
          <Box sx={{ border: "1px solid #25d366", width: "90%" }}>
            <Grid sx={{ display: "flex", cursor: 'pointer' }} onClick={handleOpen}>
              <Typography sx={{ fontFamily: "poppins", fontWeight:'bold' }}>
                <IconButton sx={{ color: "#25d366" }}>
                  <AddIcon />
                </IconButton>
                Add Options
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflowX: "scroll", overflowY: "scroll" }}
        >
          <Grid container>
            <Grid item xs={1} lg={3.5} />
            <Grid item xs={10} lg={5}>
              <Box sx={style}>
                <Grid sx={{ justifyContent: "space-between", display: "flex" }}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontFamily: "poppins" }}
                  >
                    Add Options
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
  
                <Grid marginTop={"10px"}>
                  <FormLabel>
                    <InputLabel sx={{ fontFamily: "poppins" }}>
                      Options:
                      <br />
                      <TextField
                        type="text"
                        label="Eg: English"
                        sx={{ marginTop: "10px", width: "100%" }}
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                      />
                    </InputLabel>
                    
                  </FormLabel>
                </Grid>
                <Button
                  variant="contained"
                  style={{
                    marginTop: "10px",
                    borderRadius: "40px",
                    width: "100px",
                  }}
                  onClick={() => {
                    if (title.length !== 0)  {
                      let newArr = [...data];
                      let newObj = {
                        title: title,
                        
                      };
  
                      newArr.push(newObj);
                      setData(newArr)
                    }
                    else {
                      return null
                    }
                  }}
                >
                  Add
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Modal>
        </Grid>
    )
}


// export const ResumeContext = React.createContext({
//     data:{},
//     setData : ()=>{},
// })