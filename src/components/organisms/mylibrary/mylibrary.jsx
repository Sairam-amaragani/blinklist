import "./mylibrary.css";
import { Grid, ThemeProvider } from "@material-ui/core";
import Tabs from "../../molecules/tabs/SimpleTabs";
import customtheme from "../../../customtheme";
import AddButton from "../addbook/addbookButton";
const MyLibrary = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Grid container className="MainContainer" direction="column" spacing={5}>
        <Grid item xs>
          <span className="heading">My Library</span>
        </Grid>
        <Grid item xs>
          <AddButton></AddButton>
        </Grid>
        <Grid item xs>
          <Tabs />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MyLibrary;
