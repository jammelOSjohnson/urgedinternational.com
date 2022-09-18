import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, Typography, Theme, IconButton, Card, CardHeader, Avatar, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
//Import Components
//import { ItemRating } from '../../../Components/ItemRating';
import { Link } from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';



// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 5% 0px",
            borderRadius: "22px"
        },
        category: {
            fontWeight: "bold"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "left",
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        avatar: {
            width: "105px",
            height: "105px",
            backgroundColor: "#FFFFFF",
            marginLeft: "auto", 
            marginRight: "auto"
          },
        kfcImage: {
            width: "105px",
            height: "105px",
            margin: "0% 0% 14% 8%",
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        Button: {
            backgroundColor: "#FF5E14",
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        menuImages: {
            borderRadius: "10px"
        },
        link: {
            textDecoration: "none"
        },
        statusDot: {
                height: "10px",
                width: "10px",
                backgroundColor: "#22F810" /*Active*/ ,
                /*backgroundColor: "#F86363", In-Active*/
                borderRadius: "50%",
                display: "inline-block"
        },
        statusDotI: {
            height: "10px",
            width: "10px",
            backgroundColor: "red" /*Active*/ ,
            /*backgroundColor: "#F86363", In-Active*/
            borderRadius: "50%",
            display: "inline-block"
        }
    }),
);

export const EmployeeCardList: React.FC = function EmployeeCardList(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    var { fetchRiders, riders, viewRiderDetails } = value;
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        if(riders.length === 0){
            fetchRiders(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
    var history = useHistory();

    var handleSelectedRider = async function(index){
        if(index !== undefined || index !== null){
            //console.log("Index is");
            //console.log(index);
            var payload = value;
            payload.selectedRider = index;
            await viewRiderDetails(payload).then(() => {
                history.push("/EmployeeDetails")
            })
        } 
    }
    if (riders.length !== 0){  
        return (
            <>
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    {riders.map((rider, index) => {
                        //console.log("rider is");
                        //console.log(rider);
                        return(
                            
                            <Grid item xs={10} md={6} lg={3} xl={3} className={classes.gridSpacing} key={index}>
                                <Link onClick={() =>handleSelectedRider(index)} className={classes.link}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                    />
                                    <CardContent>
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                            <Grid item xs={12}>
                                                <Avatar variant="circle" aria-label="rider" className={classes.avatar}>
                                                    <CardMedia className={classes.cardImage}>
                                                        <img className={classes.kfcImage} src={rider.ImageName} alt="rider"></img>
                                                    </CardMedia>
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5"  component="p" align="center">
                                                    {rider.FirstName}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h6"  component="p" align="center">
                                                    {rider.City}
                                                </Typography>
                                            </Grid>
                                            <br />
                                            <Grid item xs={12}>
                                                <Typography variant="body2"  component="p" align="center">
                                                    {rider.Email}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2"  component="p" align="center">
                                                {rider.Position}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2"  component="p" align="center">
                                                {!rider.disabled?
                                                    <span><span className={classes.statusDot}></span> Active</span>
                                                    :
                                                    <span><span className={classes.statusDotI}></span> In-active</span>
                                                }
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                </Link>
                            </Grid>       
                        )
                    })}
                </Grid>
            </>
        )
    }else {
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                            Loading...
                </Typography>
            </>
        )
    }
}
