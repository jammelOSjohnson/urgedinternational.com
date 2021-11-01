import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, Typography, Theme, Button, Card, CardMedia, CardContent, CardHeader, Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "2% 0px 5% 0px",
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
            width: "52px",
            height: "52px"
          },
        kfcImage: {
            marginTop: "-24%"
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
        menuImages: {
            borderRadius: "10px"
        }
    }),
);

export const PopularRestaurants: React.FC = function PopularRestaurants() {
    const classes = useStyles();

    var { value }  = useAppData();
    var {restaurants, fetchRestaurants } = value;

    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        if(restaurants.length === 0){
            fetchRestaurants(value);
        }
        // eslint-disable-next-line
    }, [restaurants])

    if(restaurants.legth !== 0){
        return (
            <>
            <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                    <Grid item xs={12} md={6} lg={3} container spacing={1}>
                        <Grid item xs={10} md={10}>
                            <Typography variant="subtitle1" className={classes.category}>
                                Popular Restaurants
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                    {restaurants.map((item, index) => (
                        <Grid item xs={10} md={6} lg={3} xl={3} className={classes.gridSpacing} key={index}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>
                                            <CardMedia className={classes.cardImage}>
                                                <img className={classes.kfcImage} src={item.ImageName}alt="img1"></img>
                                            </CardMedia>
                                        </Avatar>
                                    }
                                    // action={
                                    //     <IconButton aria-label="settings">
                                    //         <img className={classes.kfcImage} src="Images/FavIcon.png"alt="img2"></img>
                                    //     </IconButton>
                                    // }
                                    title={item.FirstName}
                                    subheader={item.City}
                                />
                                <CardContent>
                                    <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                        <Grid item xs={6}>
                                                <Typography variant="body2"  component="p">
                                                    Menu
                                                </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                                <Typography variant="body2"  component="p">
                                                {/* <ItemRating rating={3.5}/> */}
                                                </Typography>
                                        </Grid>
                                            {
                                                item.MenuItems.filter((item, index) => index < 6).map((item, index)=> {
                                                    return(
                                                        <Grid item xs={4} key={index}>
                                                                <img className={classes.menuImages} src={item.ImageName} height="81px" width="81px" alt="img3"></img>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                            <Button variant="contained" fullWidth={true}
                                                className={classes.Btn} 
                                                type="button">
                                                Place an Order
                                            </Button>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

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