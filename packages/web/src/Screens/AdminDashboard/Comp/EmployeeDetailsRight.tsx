import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid , makeStyles, createStyles, Theme, Card, Typography, CardHeader, Avatar, IconButton, CardMedia, CardContent } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect } from 'react';
import { Calendar } from './Calendar';
// import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
// import { NotificationImportantRounded, ShoppingCartRounded } from "@material-ui/icons/";

// interface Props {
    
// }

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

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
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
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
    var { fetchRiders, riders, viewMenuItems } = value;
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        if(riders.length === 0){
            fetchRiders(value);
        }
    }, [riders])

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
                    <Grid item xs={12} spacing={1}>
                        <Calendar />
                    </Grid>
                    <Grid item xs={12} spacing={1}>
                            <Card className={classes.gridRoot}>
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
                                                    <img className={classes.kfcImage} src="Images/KFC Avatar.png"></img> 
                                                </CardMedia>
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5"  component="p" align="center">
                                                {/* {rider.FirstName} */}
                                                Dilan
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6"  component="p" align="center">
                                                {/* {rider.City} */}
                                                Kingston
                                            </Typography>
                                        </Grid>
                                        <br />
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                                {/* {rider.Email} */}
                                                Dilan.Po@gmail.com
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                            Errand Runner
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2"  component="p" align="center">
                                            {/* {rider.isAvailable?
                                                <span><span className={classes.statusDot}></span> Active</span>
                                                :
                                                <span><span className={classes.statusDotI}></span> In-active</span>
                                            } */}
                                            <span><span className={classes.statusDot}></span> Active</span>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}