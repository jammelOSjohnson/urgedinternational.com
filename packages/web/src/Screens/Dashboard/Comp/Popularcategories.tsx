import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, useMediaQuery, useTheme, TableContainer, TableHead, TableRow, TableBody, TableCell, Table, Paper } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import  '../CSS/PopularCategories.css';


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
            paddingTop: "23%",
        },
        cardMobile: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: "10px",
            minHeight: "142px",
            minWidth: "120px"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "center",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "center",
            position: "relative"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
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

export const Popularcategories: React.FC = function Popularcategories() {
    const classes = useStyles();
    const theme = useTheme();
    
    
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    
      
    return (
        <>
          <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Popular Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {isMatchMedium? (
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Grid container xs={12} direction="column">
                        <Grid container direction="row" spacing={1}>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/Restaurants" title="Breakfast" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryBreakfast.png"alt="img1"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Breakfast
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/Restaurants" title="Lunch" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryLunch.png"alt="img2"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Lunch
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/Restaurants" title="Dinner" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDinner.png"alt="img3"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dinner
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/Restaurants" title="Dessert" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDessert.png"alt="img4"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dessert
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/Restaurants" title="Fast Food" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryFastFood.png"alt="img5"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Fast Food
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                {/* <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}> */}
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryPastry.png"alt="img6"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Pastry
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                {/* <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}> */}
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryChinese.png"alt="img7"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Chinese
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                {/* <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}> */}
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage} style={{paddingTop: "14px"}}>
                                            <img src="Images/FoodDeliverySalads.png"alt="img8"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Salads
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                {/* </Link> */}
                            </Grid>
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
                                    <Link to="/Restaurants" title="Breakfast" className={classes.inactiveItemLink}>
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryBreakfast.png"alt="img9"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Breakfast
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/Restaurants" title="Lunch" className={classes.inactiveItemLink}>
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryLunch.png"alt="img10"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Lunch
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/Restaurants" title="Dessert" className={classes.inactiveItemLink}>
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryDessert.png"alt="img11"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Dessert
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   </Link>
                                </TableCell>
                                <TableCell align="center">
                                    {/* <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}> */}
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryChinese.png"alt="img12"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Chinese
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                 {/* </Link> */}
                                </TableCell>
                            </TableRow>
                            <TableRow key={1}>
                                <TableCell align="center">
                                    <Link to="/Restaurants" title="Fast Food" className={classes.inactiveItemLink}>
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryFastFood.png"alt="img13"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Fast Food
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <Link to="/Restaurants" title="Dinner" className={classes.inactiveItemLink}>
                                     <Card className={classes.cardMobile}>
                                         <CardMedia className={classes.cardImage}>
                                             <img src="Images/FoodDeliveryDinner.png"alt="img14"></img>
                                         </CardMedia>
                                         <CardContent className={classes.cardContent}>
                                                 <Typography gutterBottom className={classes.cardTitle}>
                                                     Dinner
                                                 </Typography>
                                         </CardContent>
                                     </Card>
                                 </Link>
                                </TableCell>
                                <TableCell align="center">
                                    {/* <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}> */}
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage}>
                                               <img src="Images/FoodDeliveryPastry.png"alt="img15"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Pastry
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   {/* </Link> */}
                                </TableCell>
                                <TableCell align="center">
                                    {/* <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}> */}
                                       <Card className={classes.cardMobile}>
                                           <CardMedia className={classes.cardImage} style={{paddingTop: "14px"}}>
                                               <img src="Images/FoodDeliverySalads.png"alt="img16"></img>
                                           </CardMedia>
                                           <CardContent className={classes.cardContent}>
                                                   <Typography gutterBottom className={classes.cardTitle}>
                                                       Salads
                                                   </Typography>
                                           </CardContent>
                                       </Card>
                                   {/* </Link>    */}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
            ):<></>}
            
        </>
    )
}