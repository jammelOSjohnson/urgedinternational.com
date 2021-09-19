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
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
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
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        }
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
         <Container maxWidth="xl" className={classes.main}>
            <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                <Grid item xs={2} spacing={1}>
                    <Sidebar />
                </Grid>
                <Grid container direction="row" xs={10} spacing={1}>
                    <Grid item xs={8}>
                        <HeaderLeft />
                    </Grid>
                    <Grid item xs={4}>
                        <HeaderRight />
                    </Grid>
                    {/*Row 1*/}
                    <Grid item xs={8}>
                        <AdvertisementSlider />
                    </Grid>
                    <Grid item xs={4}>
                        <OrderTotals />
                    </Grid>
                    {/*Row 2*/}
                    <Grid item xs={8}>
                        <Categories />
                        <CurrentPackage />                       
                    </Grid>
                    <Grid item xs={4}>
                        <Favourites />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
