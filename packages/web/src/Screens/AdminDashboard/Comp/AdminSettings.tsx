import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, Typography, Theme, IconButton, Card, CardHeader, Avatar, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
//Import Components
import { Link } from "react-router-dom";



interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

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
        },
        cardHeader: {
            background: "#FFF",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
          },
    }),
);

export const AdminSettings: React.FC = function EmployeeCardList(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    // var {  } = value;
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
       
    }, [])

    
    
    //var history = useHistory();

   
    
    return (
        <>
            <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={10} md={12} lg={12} className={classes.gridSpacing} >
                    <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                        <Grid item xs={3}>
                            <Link to="/PaySettings" className={classes.link}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        //className={classes.avatar}
                                        avatar={
                                            <Avatar aria-label="driver pay" className={classes.avatar}>
                                            <IconButton>
                                                <img src="Images/blacktruckIconImage.png" alt="driver_pay" />
                                            </IconButton>
                                            </Avatar>
                                        }
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Driver pay settings
                                    </Typography>
                                    </CardContent>
                                    
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>       
            </Grid>
        </>
    )
}
