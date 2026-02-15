import React from 'react';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography, Toolbar, AppBar, Theme, Paper, InputBase } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';;
import { FilterButtonGroup } from './FilterButtonGroup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar: {
        background: "#FFFFFF",
        borderRadius: "22px",
        marginBottom: "1%",
        width: "100%"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    filterLabels: {
      marginTop: "15%" 
    },
    filterButton: {
      marginTop: "1%",
    }
  }),
);

export const FilterBar: React.FC = function FilterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
        <Grid container direction="row" spacing={0}>
            <Grid container xs={6} direction="row">
              <Grid item xs={1}>
                <Typography color="textPrimary" className={classes.filterLabels}>
                    Filter
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Paper component="form" className={classes.root}>
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Search Orders"
                    inputProps={{ 'aria-label': 'search orders' }}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container xs={2} direction="row">
              <Grid item xs={2}>
                <Typography color="textPrimary" className={classes.filterLabels}>
                    Category
                </Typography>
              </Grid>
              <Grid item xs={10} className={classes.filterButton}>
                <FilterButtonGroup />
              </Grid>
            </Grid>
            <Grid container xs={2} direction="row">
              <Grid item xs={2}>
                <Typography color="textPrimary" className={classes.filterLabels}>
                    Status
                </Typography>
              </Grid>
              <Grid item xs={10} className={classes.filterButton}>
                <FilterButtonGroup />
              </Grid>
            </Grid>
            <Grid container xs={2} direction="row">
              <Grid item xs={2}>
                <Typography color="textPrimary" className={classes.filterLabels}>
                    Location
                </Typography>
              </Grid>
              <Grid item xs={10} className={classes.filterButton}>
                <FilterButtonGroup />
              </Grid>
            </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
