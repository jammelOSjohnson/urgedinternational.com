import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, useMediaQuery, Card, CardMedia, CardContent, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, useTheme } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import '../CSS/RestaurantCategories.css'
//Import Components

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        favorites: {
            fontWeight: "bold",
            textAlign: "left"
        },
        viewMore: {
            ontWeight: "bold",
            textAlign: "right",
            color: "#4A4A4A"
        },
        root: {
            padding: "2% 0px 0% 0px"
        },
        category: {
            fontWeight: "bold"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: "4%",
        },
        cardMobile: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: "4%",
            minWidth: "140px"
        },
        cardContent: {
            flexGrow: 1,
            // textAlign: "center",
            display: "inline-block",
            paddingBottom: "0px !important",
            paddingTop: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
        },
        cardContent2: {
            flexGrow: 1,
            // textAlign: "center",
            display: "inline-block",
            paddingBottom: "0px !important",
            paddingTop: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            textAlign: "center",
        },
        cardImage: {
            textAlign: "center",
            position: "relative",
            width: "30%",
            display: "inline-block",
        },
        Images: {
            width: "55%"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "PT Sans",
        },
        links: {
            textDecoration: "none"
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        gridSpacingMobile: {
            marginLeft: "2%", 
            marginRight: "2%"
        },
        wrapper: {
            display: "flex",
            overflow: "auto"
        },
        item: {
            
        },
        table: {
            minWidth: 320,
            backgroundColor: "transparent"
        },
        tableContainer: {
            display: "grid"
        },
        tableHead: {
            display: "none"
        }
    }),
);

export const RestaurantMenuCategories: React.FC = function RestaurantMenuCategories() {
    const classes = useStyles();
    const theme = useTheme();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });

    var { value }  = useAppData();
    var { getMenuCats, selectedRestaurant, restaurants, menuCategories } = value;
    var restaurant = restaurants[selectedRestaurant];

    var history = useHistory();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    useEffect(function(){
        //console.log("fetching menu cats");
        //console.log(restaurant);
        getMenuCats(value, restaurant.Id);
    }, [])
    
    if(menuCategories.length !== 0){
      return (
            <>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Grid item xs={12} md={6} lg={3} container spacing={1}>
                        <Grid item xs={10} md={10}>
                            <Typography variant="subtitle1" className={classes.category}>
                                Categories
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {isMatchMedium? (
                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                        <Grid container xs={12} direction="column">
                            <Grid container direction="row" spacing={1}>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants2")}>
                                            <CardContent className={classes.cardContent2}>
                                                    <Typography gutterBottom className={classes.cardTitle2}>
                                                        ALL
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                {menuCategories.map((item, index) => {
                                    return(
                                        <Grid item className={classes.gridSpacing}>
                                            <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                                <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                                    <CardMedia className={classes.cardImage}>
                                                        <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                                    </CardMedia>
                                                    <CardContent className={classes.cardContent}>
                                                            <Typography gutterBottom className={classes.cardTitle}>
                                                                {item}
                                                            </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </Grid>
                                    )
                                })}
                                {/* <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Big Boxes
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Dinner" title="Dinner" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Zingers
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Breakfast" title="Breakfast" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Wings
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Dessert" title="Dessert" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Chicken Combos
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Sides
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Value
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Lunch" title="Lunch" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Krispers
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                                <Grid item className={classes.gridSpacing}>
                                    <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}>
                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Buckets
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                ):<></>}

                {isMatch? (
                <>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={0}>
                                <TableCell align="center">
                                            <Card className={classes.cardMobile}>
                                                <CardMedia className={classes.cardImage}>
                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                                </CardMedia>
                                                <CardContent className={classes.cardContent}>
                                                        <Typography gutterBottom className={classes.cardTitle}>
                                                            All
                                                        </Typography>
                                                </CardContent>
                                            </Card>
                                </TableCell>
                                {menuCategories.map((item, index) => {
                                    return(
                                        <TableCell align="center">
                                            <Card className={classes.cardMobile}>
                                                <CardMedia className={classes.cardImage}>
                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                                </CardMedia>
                                                <CardContent className={classes.cardContent}>
                                                        <Typography gutterBottom className={classes.cardTitle}>
                                                            {item}
                                                        </Typography>
                                                </CardContent>
                                            </Card>
                                        </TableCell>
                                    )
                                })}
                                    {/* <TableCell align="center">
                                        <Link to="/FoodDelivery/Breakfast" title="Breakfast" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Big Boxes
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Lunch" title="Lunch" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Zingers
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Dessert" title="Dessert" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Wings
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Chicken Combos
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={1}>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Sides
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Dinner" title="Dinner" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Value
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Krispers
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}>
                                        <Card className={classes.cardMobile}>
                                            <CardMedia className={classes.cardImage} style={{paddingTop: "14px"}}>
                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images}></img>
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                        Buckets
                                                    </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>   
                                    </TableCell> */}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
                ):<></>
            }
                
            </>
        )
    }else{
        return (
            <>
                <Typography>Loading...</Typography>
            </>
        )
    }

}
