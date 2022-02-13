import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid , makeStyles, createStyles, Theme, Card, Typography, CardHeader, Avatar, IconButton, CardMedia, CardContent } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect } from 'react';
//import { Calendar } from './Calendar';
import clsx from 'clsx';
// import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
// import { NotificationImportantRounded, ShoppingCartRounded } from "@material-ui/icons/";

// interface Props {
    
// }

interface State {
    email: string;
    name: string;
    city: string;
    image: string;
    status: boolean;
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
            height: "60vh"
        },
        avatar: {
            width: "105px",
            height: "105px",
            backgroundColor: "#FFFFFF",
            marginLeft: "auto", 
            marginRight: "auto"
          },
        kfcImage: {
            width: "170px",
            height: "170px",
            margin: "0% 0% 14% 8%",
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

export const EmployeeDetailsRight: React.FC = function EmployeeDetailsRight() {
    const classes = useStyles();

    var { value }  = useAppData();
    var { riders, selectedRider } = value;
    const [riderState, setRiderState] = React.useState<State>({
        name: "",
        email: "",
        city: "",
        image: "",
        status: false
    })
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        if(riders.length > 0 && selectedRider !== undefined){
            setRiderState({
                name: riders[selectedRider].FirstName,
                email: riders[selectedRider].Email,
                city: riders[selectedRider].City,
                image: riders[selectedRider].ImageName,
                status: riders[selectedRider].isAvailable
            });
        }
    }, [selectedRider])

    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
      //var history = useHistory();

    
      
    return (
        <>
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container direction="row" spacing={2} className={classes.gridRoot} alignItems="center">
                    {/* <Grid item xs={12} spacing={1}>
                        <Calendar />
                    </Grid> */}
                    <Grid item xs={12} spacing={1}>
                            <Card className={clsx(classes.gridRoot, classes.card)}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <Grid container xs={12} direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                                        <Grid item xs={12}>
                                            <Avatar variant="circle" aria-label="rider" className={classes.avatar}>
                                                <CardMedia className={classes.cardImage}>
                                                    {/* <img className={classes.kfcImage} src={rider.ImageName}></img> */}
                                                    <img className={classes.kfcImage} src={riderState.image} alt=""></img> 
                                                </CardMedia>
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                            {/* {rider.isAvailable?
                                                <span><span className={classes.statusDot}></span> Active</span>
                                                :
                                                <span><span className={classes.statusDotI}></span> In-active</span>
                                            } */}
                                            <span>
                                                {riderState.status?
                                                    <><span className={classes.statusDot}></span> Active</>
                                                :
                                                    <><span className={classes.statusDotI}></span> In-active</>
                                                }
                                            </span>
                                            </Typography><br />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5"  component="p" align="center">
                                                {riderState.name}
                                            </Typography><br />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                                {riderState.email}
                                            </Typography><br />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                            Errand Runner
                                            </Typography><br />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6"  component="p" align="center">
                                                {riderState.city}
                                            </Typography>
                                        </Grid>
                                        <br />
                                    </Grid>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}