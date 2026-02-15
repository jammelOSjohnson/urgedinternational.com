import React from "react";
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar: {
      background: theme.palette.primary.main,
      borderRadius: "10px",
      marginBottom: "1%",
    },
  }),
);

export const HistoryHeaderBar: React.FC = function HistoryHeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
          <Grid container direction="row" spacing={0}>
            <Grid item xs={4}>
              <Typography color="inherit">Transaction Type</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography color="inherit">Date</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography color="inherit">Status</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography color="inherit">Cost</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography color="inherit">Actions</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
