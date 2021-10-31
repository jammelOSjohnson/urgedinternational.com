import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

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
        marginBottom: "1%"
    }
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
                <Typography color="inherit">
                    Transaction Type
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography color="inherit">
                    Date
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography color="inherit">
                    Status
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography color="inherit">
                    Cost
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography color="inherit">
                    Actions
                </Typography>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
