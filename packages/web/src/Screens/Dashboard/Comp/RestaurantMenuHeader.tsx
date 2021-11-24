import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Avatar } from '@material-ui/core';
import React from 'react';
import { LocationOnRounded, ScheduleRounded } from "@material-ui/icons/";
import moment from 'moment-timezone';


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
        },
        Closed: {
            backgroundColor: "red",
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

    
    if(restaurants.length !== 0){
        const now = new Date();
        let jaday = moment.tz(now, "America/Jamaica").format();
        let today = new Date(jaday).getDay();
        let OpeningHrs = restaurant.OpeningHrs;
        let TodayOpeningHrs = today === 0 ? OpeningHrs.Sunday : today === 1 ? OpeningHrs.Monday :
                              today === 2 ? OpeningHrs.Tuesday : today === 3 ? OpeningHrs.Wednesday :
                              today === 4 ? OpeningHrs.Thursday : today === 5 ? OpeningHrs.Friday :
                              today === 6 ? OpeningHrs.Saurday : "";
        
        const nowT = new Date();
        let jaTime = moment.tz(now, "America/Jamaica").format("h:mm a");
        let openTime = TodayOpeningHrs.slice(0, TodayOpeningHrs.indexOf("a"))
        let closeTime = TodayOpeningHrs.slice(TodayOpeningHrs.indexOf("-") +1, TodayOpeningHrs.indexOf("p"))
        let isAm: boolean = jaTime.includes('a');
        let isPm: boolean = jaTime.includes('p'); 
        let isOpen: boolean = isPm && (closeTime > jaTime) || isAm && (jaTime > openTime);

        return (
            <>
                <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                    <Grid container xs={12} direction="row" spacing={1} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={6} sm={2}>
                                <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>     
                                    <img className={classes.kfcImage} src={restaurant.ImageName} alt="kfcImage"></img>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm={10} >
                                <Grid item direction="row" spacing={1}>
                                    <Grid item xs={12} >
                                        <Grid item direction="row" spacing={1}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant={'h4'}>{restaurant.FirstName}</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                {
                                                    isOpen ? 
                                                        <Typography variant={'h6'} className={classes.Open}>Open</Typography>
                                                    :
                                                        <Typography variant={'h6'} className={classes.Closed}>Closed</Typography>
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={'h6'}><LocationOnRounded color="primary" /> Address: {restaurant.City}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={'h6'}><ScheduleRounded color="primary" />
                                            Hours: Open <span style={{fontWeight: "bolder"}}>
                                            {
                                              TodayOpeningHrs
                                            }
                                            
                                            </span> Today 
                                            
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }else{
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                            Loading...
                </Typography>
            </>
        )
    } 
    
}