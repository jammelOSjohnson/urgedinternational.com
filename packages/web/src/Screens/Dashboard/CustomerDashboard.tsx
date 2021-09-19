import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { OrderTotals } from './Comp/OrderTotals';
import { Favourites } from './Comp/Favourites';
import { CurrentPackage } from './Comp/CurrentPackage';
import { Categories } from './Comp/Categories';
import { AdvertisementSlider } from './Comp/AdvertisementSlider';
import { totalmem } from 'os';

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px"
        },
    }),
);

export const CustomerDashboardScreen: React.FC = function CustomerDashboardScreen() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
         <Container maxWidth="xl" style={{padding: 0,backgroundImage: "url(Images/Food portal Background.png)"}}>
            <Grid container spacing={0} className={classes.gridRoot} alignItems="center">
                <Grid item xs={2} container spacing={1}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} container spacing={1}>
                    <AdvertisementSlider />
                    <OrderTotals />
                    <Categories />
                    <CurrentPackage />
                    <Favourites />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
