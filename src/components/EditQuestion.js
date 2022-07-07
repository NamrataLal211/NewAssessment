import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditQuestion({setAbout}) {
  const [open, setOpen] = React.useState(false);
  const [newAbout, setNewAbout] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAbout(newAbout)
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle fontFamily="poppins">
          <b>Question</b>
        </DialogTitle>

        <DialogContent>
          <DialogContentText fontFamily="poppins">
            Mention the question you want to ask.
          </DialogContentText>
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Enter Text"
            type="text"
            fullWidth
            variant="standard"
            fontFamily="poppins"
            value={newAbout}
            onChange={(e)=>setNewAbout(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ borderRadius: "40px", width: "100px" }}
            onClick={handleClose}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
