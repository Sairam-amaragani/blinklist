import React from "react";
import { AppBar, Tabs, Tab, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import BookCard from "../bookcard/bookcard";
import { useSelector } from "react-redux";

import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  tabBar: {
    border: 0,
    boxShadow: "none",
  },
}));

export default function SimpleTabs() {
  const state = useSelector((state) => state.books);
  console.log(state);
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid>
      <AppBar
        position="static"
        className="appbar"
        color="white"
        classes={{ root: classes.tabBar }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabBar}
        >
          <Tab label="Currently Reading" {...a11yProps(0)} />
          <Tab label="Finished" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container direction="row" spacing={3}>
          {state.reading.map((item) => (
            <Grid item>
              <BookCard book={item} disable={false} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid container direction="row" spacing={3}>
            {state.finished.map((item) => (
              <Grid item>
                <BookCard book={item} disable={true} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </TabPanel>
    </Grid>
  );
}
