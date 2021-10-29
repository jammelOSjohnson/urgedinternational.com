import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, Badge , makeStyles, createStyles, Typography, Theme, Avatar } from '@material-ui/core';
import React from 'react';
import { LocationOnRounded, ScheduleRounded } from "@material-ui/icons/";
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        },
        main: {
            padding: 0,
        },
        gridRoot: {
            padding: "0px"
        },
        avatar: {
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: "22px"
          },
        kfcImage: {
            marginTop: "0",
            width: "80%"
        },
        Btn: {
            color: "#FFF",
            backgroundColor: "#FF5E14",
            width: "150px",
            borderRadius: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3%",
            height: "41px"
        },
        Open: {
            backgroundColor: "#47934A",
            color: "#FFF",
            borderRadius: "5px",
            padding: "8px",
            width: "69px"
        }
    }),
);

export const RestaurantMenuHeader: React.FC = function RestaurantMenuHeader() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { restaurants, selectedRestaurant } = value;
    var restaurant = restaurants[selectedRestaurant];
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container xs={12} direction="row" spacing={1} className={classes.gridRoot} alignItems="center">
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={6} sm={2}>
                            <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>     
                                <img className={classes.kfcImage} src="Images/KFC Avatar.png"></img>
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={10} >
                            <Grid item direction="row" spacing={1}>
                                <Grid item xs={12} >
                                    <Grid item direction="row" spacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant={'h4'}>Kentucky Fried Chicken</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} >
                                            <Typography variant={'h6'} className={classes.Open}>Open</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'h6'}><LocationOnRounded color="primary" /> Address: {restaurant.City}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'h6'}><ScheduleRounded color="primary" />Hours: Open <span style={{fontWeight: "bolder"}}>{restaurant.OpeningHrs.Sunday}</span> Today </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}