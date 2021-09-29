import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { Popularcategories } from './Comp/Popularcategories';
import { AdvertisementSlider2 } from './Comp/AdvertisementSlider2';
import { PeoplesChoice } from './Comp/PeoplesChoice';
import { PopularRestaurants } from './Comp/PopularRestaurants';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';

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
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        }
    }),
);

export const FoodDeliveryDashboardScreen: React.FC = function FoodDeliveryDashboardScreen() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
         <Container maxWidth="xl" >
            <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                <Grid item xs={2} spacing={1}>
                    <Sidebar />
                </Grid>
                <Grid container direction="row" xs={10} spacing={1} className={classes.main}>
                    <Grid item xs={8} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                        <HeaderLeft />
                    </Grid>
                    <Grid item xs={4} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                        <HeaderRight />
                    </Grid>
                    {/*Row 1*/}
                    <Grid item xs={12}>
                        <AdvertisementSlider2 />
                    </Grid>
                    <Grid item xs={12}>
                        <Popularcategories />
                    </Grid>
                    {/*Row 2*/}
                    <Grid item xs={12}>
                        <PeoplesChoice />                    
                    </Grid>
                    <Grid item xs={12}>
                        <PopularRestaurants />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
