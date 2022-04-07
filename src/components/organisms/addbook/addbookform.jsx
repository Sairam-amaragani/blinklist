import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addBook } from "../../../store/actions";
import { makeStyles } from "@material-ui/core/styles";

function AddForm(props) {
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
  const handleClose = () => {
    onClose(selectedValue);
  };
  const classes = useStyles();
  const aboutBook = (event) => {
    setbook({ ...book, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const { onClose, selectedValue } = props;
  return (
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
    </Grid>
  );
}

export default AddForm;
