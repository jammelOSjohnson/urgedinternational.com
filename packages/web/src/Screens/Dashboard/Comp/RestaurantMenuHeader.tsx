import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { LocationOnRounded, ScheduleRounded } from "@material-ui/icons/";
import moment from 'moment-timezone';
import { useHistory } from 'react-router-dom';
import fetchCurrentTime from '../../../Apis/timePI';


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
    const [isOpen, setisOpen] = useState(false);
    const [TodayOpeningHrs, setTodayOpeningHrs] = useState('');
    const [jaday, setjaday] = useState('');
    const [today, settoday] = useState(0);
    ////console.log(restaurants)
    var history = useHistory();

    useEffect(() => {
        if(restaurants.length !== 0){
            const now = new Date();
            ////console.log("server time is:");
            ////console.log(now);
            
            //Fetch the correct date time
            if(jaday === '' && today === 0){
                //let innerJDay = '';
                //let innerToday = '';
                fetchCurrentTime.get('/api/timezone/America/Jamaica').then((res) => {
                    if(res.data !== null && res.data !== undefined){
                        //console.log(res.data);
                        //innerJDay = res.data.datetime;
                        //innerToday = res.data.day_of_week
                        setjaday(res.data.datetime);
                        settoday(res.data.day_of_week);
                        //console.log(jaday)
                        let innerDay = res.data.day_of_week;

                        let OpeningHrs = restaurant.OpeningHrs;
                        setTodayOpeningHrs (innerDay === 0 ? OpeningHrs.Sunday : innerDay === 1 ? OpeningHrs.Monday :
                                            innerDay === 2 ? OpeningHrs.Tuesday : innerDay === 3 ? OpeningHrs.Wednesday :
                                            innerDay === 4 ? OpeningHrs.Thursday : innerDay === 5 ? OpeningHrs.Friday :
                                            innerDay === 6 ? OpeningHrs.Saturday : "");
                        
                        let innerOpeningHrs =  innerDay === 0 ? OpeningHrs.Sunday : innerDay === 1 ? OpeningHrs.Monday :
                        innerDay === 2 ? OpeningHrs.Tuesday : innerDay === 3 ? OpeningHrs.Wednesday :
                        innerDay === 4 ? OpeningHrs.Thursday : innerDay === 5 ? OpeningHrs.Friday :
                        innerDay === 6 ? OpeningHrs.Saturday : "";

                        //console.log(res.data.datetime);
                        let initTime = new Date(res.data.datetime);
                        //console.log(initTime);
                        let jaTime = moment.tz(initTime, "America/Jamaica").format("h:mm a");
                        //console.log(jaTime);
                        let jaTimeFinal = jaTime.split(':');
                        let openTime = innerOpeningHrs.slice(0, innerOpeningHrs.indexOf("a"))
                        let openTimeFinal = openTime.trim()
                        let closeTime = innerOpeningHrs.slice(innerOpeningHrs.indexOf("-") +1, innerOpeningHrs.indexOf("p"))
                        //console.log(innerOpeningHrs)
                        //console.log(closeTime);
                        let closeTimeFinal = closeTime.trim();
                        let isAm: boolean = jaTime.includes('a');
                        let isPm: boolean = jaTime.includes('p'); 
                        // console.log(isAm);
                        // console.log(isPm);
                        // console.log(closeTimeFinal);
                        // console.log(jaTimeFinal[0]);
                        let decision = (isPm && (parseInt(closeTimeFinal) > parseInt(jaTimeFinal[0]))) || 
                        (isAm && (parseInt(jaTimeFinal[0]) >= parseInt(openTimeFinal))) || 
                        (isPm && parseInt(jaTimeFinal[0]) === 12 && (parseInt(closeTimeFinal) < parseInt(jaTimeFinal[0])))
                        //console.log(decision)
                        setisOpen(decision);
                        setjaday(res.data.datetime);
                        settoday(res.data.day_of_week);
                        
                        //console.log(jaday)
                    }
                }).catch((err) => {
                    console.log(err);
                    setjaday(moment.tz(now, "America/Jamaica").format());
                    settoday(new Date(jaday).getDay());

                    let innerDay = new Date(jaday).getDay();
                    let OpeningHrs = restaurant.OpeningHrs;
                    setTodayOpeningHrs (innerDay === 0 ? OpeningHrs.Sunday : innerDay === 1 ? OpeningHrs.Monday :
                        innerDay === 2 ? OpeningHrs.Tuesday : innerDay === 3 ? OpeningHrs.Wednesday :
                        innerDay === 4 ? OpeningHrs.Thursday : innerDay === 5 ? OpeningHrs.Friday :
                        innerDay === 6 ? OpeningHrs.Saturday : "");
                    
                    let innerOpeningHrs =  innerDay === 0 ? OpeningHrs.Sunday : innerDay === 1 ? OpeningHrs.Monday :
                    innerDay === 2 ? OpeningHrs.Tuesday : innerDay === 3 ? OpeningHrs.Wednesday :
                    innerDay === 4 ? OpeningHrs.Thursday : innerDay === 5 ? OpeningHrs.Friday :
                    innerDay === 6 ? OpeningHrs.Saturday : "";

                    let jaTime = moment.tz(jaday, "America/Jamaica").format("h:mm a");
                    let jaTimeFinal = jaTime.split(' ');
                    let openTime = innerOpeningHrs.slice(0, innerOpeningHrs.indexOf("a"))
                    let openTimeFinal = openTime.trim();
                    let closeTime = innerOpeningHrs.slice(innerOpeningHrs.indexOf("-") +1, innerOpeningHrs.indexOf("p"))
                    let closeTimeFinal = closeTime.trim();
                    let isAm: boolean = jaTime.includes('a');
                    let isPm: boolean = jaTime.includes('p'); 
                    // console.log(isPm);
                    // console.log(closeTimeFinal);
                    // console.log(jaTimeFinal[0]);
                    let decision = (isPm && (parseInt(closeTimeFinal) > parseInt(jaTimeFinal[0]))) || 
                    (isAm && (parseInt(jaTimeFinal[0]) > parseInt(openTimeFinal))) ||
                    (isPm && parseInt(jaTimeFinal[0]) === 12 && (parseInt(closeTimeFinal) < parseInt(jaTimeFinal[0])))
                    //console.log(decision)
                    setisOpen(decision);
                    
                    //console.log(jaday)
                })
            }

            //console.log(jaday)
        }
    }, [restaurants])

    
    if(restaurants.length !== 0){

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
                                            Hours: 
                                            {isOpen ? 
                                                <>
                                                <span>Open</span>
                                                <span style={{fontWeight: "bolder"}}>
                                                    {TodayOpeningHrs}
                                                </span> 
                                                Today
                                                </>
                                            : 
                                                <span>Closed For Today</span>
                                            }
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
                            Loading...{history.push("/FoodDelivery")}
                </Typography>
            </>
        )
    } 
    
}