import { Grid, Card, CardActions, CardMedia } from "@material-ui/core";
import { IconButton, Button } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { readBook } from "../../../store/actions";
import "./bookcard.css";
const BookCard = (props) => {
  const dispatch = useDispatch();
  return (
    // <Grid container alignItems="center">
    // <Grid item>
    <Card className="root" style={{ paddingBottom: "20px" }}>
      <Grid container direction="column">
        <Grid item xs>
          <CardMedia
            style={{ height: "284px" }}
            image={props.book.image}
            title="Contemplative Reptile"
          />
        </Grid>

        <Grid item>
          <p className="title">{props.book.title}</p>
        </Grid>
        <Grid item>
          <p className="author">{props.book.author}</p>
        </Grid>
        <Grid item>
          <IconButton>
            <AccessTime />
          </IconButton>
          <span className="read">{props.book.timeToRead}</span>
        </Grid>
        <Grid item>
          <CardActions>
            {!props.disable && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(readBook(props.book))}
              >
                Finish
              </Button>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
    // </Grid>
    // </Grid>
  );
};

export default BookCard;
