import { Grid, makeStyles, createStyles, Typography, Theme, useMediaQuery, Card, CardMedia, CardContent, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, useTheme } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import '../CSS/RestaurantCategories.css'
import { useAppData } from '../../../Context/AppDataContext';


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
            color: "#FF5E14",
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

export const RestaurantCategories: React.FC = function RestaurantCategories() {
    const classes = useStyles();
    const theme = useTheme();

    var { value } = useAppData();
    var { filterRestCategory, getRestBycategory } = value;

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    const restCategories = [
        'Breakfast','Lunch','Dinner','Dessert', 
        'Fast Food', 'Pastry', 'Chinese','Salads'
    ];
    
    var filterCat = function(event, category){
        try{
            event.preventDefault();
            getRestBycategory(value, category).then(() => {
                //setSate
            })
        }catch(err){
            //console.log(err)
        }
        
    }
      
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
                                filterRestCategory === undefined || filterRestCategory === "All"?
                                    <a href="javascript()" title="All" className={clsx(classes.inactiveItemLink, classes.gridSpacing)} onClick={(e) => filterCat(e,"All")} key={"All"}>
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
                                filterRestCategory !== undefined ?
                                    restCategories.map((item, index) => {
                                        return filterRestCategory === item?
                                            <a href="javascript()" title="Fast Food" className={clsx(classes.inactiveItemLink, classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
                                                <Grid item>
                                                    <Card className={clsx(classes.card, "cardSizeCategoriesRestarants2")}>
                                                        <CardMedia className={classes.cardImage}>
                                                            <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                        </CardMedia>
                                                        <CardContent className={classes.cardContent2}>
                                                                <Typography gutterBottom className={classes.cardTitle2}>
                                                                    {item}
                                                                </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </a>
                                        :
                                        <a href="javascript()" title="Fast Food" className={clsx(classes.inactiveItemLink, classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
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
                                    restCategories.map((item, index) => {
                                        return(
                                            <a href="javascript()" title="Fast Food" className={clsx(classes.inactiveItemLink, classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
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
                                        filterRestCategory === undefined || filterRestCategory === "All"?
                                            <a href="javascript()" title="All" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                <Grid item>
                                                    <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants2")}>
                                                        <CardContent className={classes.cardContent}>
                                                                <Typography gutterBottom className={classes.cardTitle2}>
                                                                    ALL
                                                                </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            </a>
                                        :
                                            <a href="javascript()" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,"All")} key={"All"}>
                                                <Grid item>
                                                        <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants3")}>
                                                            <CardContent className={classes.cardContent}>
                                                                    <Typography gutterBottom className={classes.cardTitle}>
                                                                        ALL
                                                                    </Typography>
                                                            </CardContent>
                                                        </Card>
                                                </Grid>
                                            </a>
                                    }
                                </TableCell>
                                {
                                    filterRestCategory !== undefined ?
                                        restCategories.map((item, index) => {
                                            return filterRestCategory === item?
                                                <TableCell align="center">
                                                    <a href="javascript()" title="Fast Food" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,item)} key={item}>
                                                        <Grid item>
                                                            <Card className={clsx(classes.cardMobile, "cardSizeCategoriesRestarants2")}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={clsx(classes.cardTitle2, "selected")}>
                                                                            {item}
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </a>
                                                </TableCell>
                                            :
                                                <TableCell align="center">
                                                    <a href="javascript()" title="Fast Food" className={classes.inactiveItemLink} onClick={(e) => filterCat(e,item)} key={item}>
                                                        <Grid item>
                                                            <Card className={classes.cardMobile}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood 3"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                            <Typography gutterBottom className={clsx(classes.cardTitle, "selected")}>
                                                                                {item}
                                                                            </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </a>
                                                </TableCell>

                                        })
                                    :
                                        restCategories.map((item, index) => {
                                            return(
                                                <TableCell align="center">
                                                    <a href="javascript()" title="Fast Food" className={clsx(classes.inactiveItemLink, classes.gridSpacing)} onClick={(e) => filterCat(e,item)} key={item}>
                                                        <Grid item>
                                                            <Card className={classes.cardMobile}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/FoodDeliveryFastFood.png" className={classes.Images} alt="FoodDeliveryFastFood"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={clsx(classes.cardTitle, "selected")}>
                                                                            {item}
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
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
            ):<></>}
            
        </>
    )
}

export default RestaurantCategories;
