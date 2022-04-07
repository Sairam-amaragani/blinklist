import PropTypes from "prop-types";
import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { addBook } from "../../../store/actions";

function SimpleDialog(props) {
  const [book, setbook] = useState({
    title: "",
    author: "",
    timeToRead: "",
  });
  const useStyles = makeStyles({
    form: {
      width: "300px",
      height: "400px",
    },
  });

  const classes = useStyles();
  const aboutBook = (event) => {
    setbook({ ...book, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">BOOK DETAILS</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} direction="column" className={classes.form}>
          {/* <Grid item>
        IMAGE_SOURCE : <input type="text"></input>
      </Grid> */}
          <Grid item>
            <TextField
              label="Image Url"
              name="image"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Title Of The Book"
              name="title"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <TextField
              label="Author Of The Book"
              name="author"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Time To Read The Book"
              name="timeToRead"
              onChange={aboutBook}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(addBook(book));
                handleClose();
              }}
            >
              Add Book
            </Button>
          </Grid>
        </Grid>{" "}
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD BOOK
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </Grid>
  );
}
