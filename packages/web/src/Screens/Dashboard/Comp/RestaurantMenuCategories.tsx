import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, Typography, Theme, useMediaQuery, Card, CardMedia, CardContent, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import '../CSS/RestaurantCategories.css';
import {useParams} from "react-router-dom";
//Import Components


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
            minWidth: "140px",
            height: "90.047px"
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
            color: "#FF5E14 !important",
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
    let { id } = useParams();
    //console.log(id)
    let restaurantName = id.split('-')[1];
    var { value }  = useAppData();
    var { getMenuCats, selectedRestaurant, restaurants, menuCategories, getMenuBycategory, filterCategory } = value;
    //var restaurant = restaurants[selectedRestaurant];
    var restaurant = restaurants.filter((item) => item.FirstName === restaurantName);

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    useEffect(function(){
        ////console.log("fetching menu cats");
        ////console.log(restaurant);
        try{
            getMenuCats(value, restaurant[0].Id);
        }catch(err){
            //console.log(err);
        }
        // eslint-disable-next-line
    }, [restaurants])

    var filterCat = function(event, category){
        try{
            event.preventDefault();
            getMenuBycategory(value, restaurant[0], category).then(() => {
                //setSate
            })
        }catch(err){
            //console.log(err)
        }
        
    }
    
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
                                    {
                                        filterCategory === undefined || filterCategory === "All" ?
                                            <a href="javascript()" className={clsx(classes.inactiveItemLink,classes.gridSpacing)} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                <Grid item>
                                                    <Card className={clsx(classes.card, "cardSizeCategoriesRestarants2")}>
                                                        <CardContent className={classes.cardContent2}>
                                                                <Typography gutterBottom className={classes.cardTitle2}>
                                                                    ALL
                                                                </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </a>
                                            :
                                                <a href="javascript()" className={clsx(classes.inactiveItemLink,classes.gridSpacing)} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                    <Grid item>
                                                            <Card className={clsx(classes.card, "cardSizeCategoriesRestarants3")}>
                                                                <CardContent className={classes.cardContent2}>
                                                                        <Typography gutterBottom className={classes.cardTitle} style={{color: "#000000"}}>
                                                                            ALL
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                    </Grid>
                                                </a>
                                    }
                                    {
                                        filterCategory !== undefined ?
                                            menuCategories.map((item, index) => {
                                                return filterCategory === item ?
                                                <a href="javascript()" className={clsx(classes.inactiveItemLink,classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
                                                        <Grid item>
                                                            <Card className={clsx(classes.card, "cardSizeCategoriesRestarants2")}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitle2} style={{color: "#FFFFFF"}}>
                                                                            {item}
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </a>
                                                :
                                                <a href="javascript()" className={clsx(classes.inactiveItemLink,classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
                                                    <Grid item>
                                                        <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                                            <CardMedia className={classes.cardImage}>
                                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                            </CardMedia>
                                                            <CardContent className={classes.cardContent}>
                                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                                        {item}
                                                                    </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                </a>
                                            })
                                            :
                                            menuCategories.map((item, index) => {
                                                return(
                                                    <a href="javascript()" className={clsx(classes.inactiveItemLink,classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
                                                        <Grid item>
                                                            <Card className={clsx(classes.card, "cardSizeCategoriesRestarants")}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitle}>
                                                                            {item}
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </a>
                                                )
                                            })
                                    }
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
                                        {
                                                filterCategory === undefined || filterCategory === "All" ?
                                                    <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                        <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants2")}>
                                                            <CardMedia className={classes.cardImage}>
                                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood 2"></img>
                                                            </CardMedia><br/>
                                                            <CardContent className={classes.cardContent}>
                                                                    <Typography gutterBottom className={classes.cardTitle2} style={{color: "#FFFFFF"}}>
                                                                        All
                                                                    </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </a>
                                                :
                                                    <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                        <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants3")}>
                                                            <CardMedia className={classes.cardImage}>
                                                                <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood 2"></img>
                                                            </CardMedia><br/>
                                                            <CardContent className={classes.cardContent}>
                                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                                        All
                                                                    </Typography>
                                                            </CardContent>
                                                        </Card>
                                                    </a>
                                        }
                                        </TableCell>
                                        {
                                            filterCategory !== undefined ?
                                                menuCategories.map((item, index) => {
                                                    return filterCategory === item ?
                                                        <TableCell align="center">
                                                            <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,item)} key={item}>
                                                                <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants2")}>
                                                                    <CardMedia className={classes.cardImage}>
                                                                        <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt=" FoodDeliveryFastFood 3"></img>
                                                                    </CardMedia><br/>
                                                                    <CardContent className={classes.cardContent}>
                                                                            <Typography gutterBottom className={clsx(classes.cardTitle2, "selected")}>
                                                                                {item}
                                                                            </Typography>
                                                                    </CardContent>
                                                                </Card>
                                                            </a>
                                                        </TableCell>
                                                    :
                                                        <TableCell align="center">
                                                            <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,item)} key={item}>
                                                                <Card className={classes.cardMobile}>
                                                                    <CardMedia className={classes.cardImage}>
                                                                        <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt=" FoodDeliveryFastFood 3"></img>
                                                                    </CardMedia><br/>
                                                                    <CardContent className={classes.cardContent}>
                                                                            <Typography gutterBottom className={clsx(classes.cardTitle, "selected")}>
                                                                                {item}
                                                                            </Typography>
                                                                    </CardContent>
                                                                </Card>
                                                            </a>
                                                        </TableCell>
                                                })
                                            :
                                                menuCategories.map((item, index) => {
                                                    return(
                                                        <TableCell align="center">
                                                            <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,item)} key={item}>
                                                                <Card className={classes.cardMobile}>
                                                                    <CardMedia className={classes.cardImage}>
                                                                        <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt=" FoodDeliveryFastFood 3"></img>
                                                                    </CardMedia><br/>
                                                                    <CardContent className={classes.cardContent}>
                                                                            <Typography gutterBottom className={clsx(classes.cardTitle, "selected")}>
                                                                                {item}
                                                                            </Typography>
                                                                    </CardContent>
                                                                </Card>
                                                            </a>
                                                        </TableCell>
                                                    )
                                                })
                                                
                                        }
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
                
            </>
        )
    }

}

export default RestaurantMenuCategories;
