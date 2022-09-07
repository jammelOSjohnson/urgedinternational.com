import { Container, Grid, makeStyles, createStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';
// import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
//Import Components
import { HeaderRight } from './Comp/HeaderRight';
import { RestaurantList } from './Comp/RestaurantList';
import { DashboardFooter } from './Comp/DashboardFooter';
const RestaurantCategories = React.lazy(() => import('./Comp/RestaurantCategories'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));





const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    }),
);

export const RestaurantsScreen: React.FC = function RestaurantsScreen() {
    const classes = useStyles();

    
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" style={{paddingLeft: "8px", paddingRight: "8px"}} className={classes.main}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid item xs={8} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{fontWeight: "bold", fontSize: "1.5em", fontFamily: "PT Sans"}} variant="h3">Restaurants</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <RestaurantCategories />
                        </Grid>
                        <Grid item xs={12}>
                            <RestaurantList />                    
                        </Grid>
                        <Grid item xs={12}>
                            <DashboardFooter />
                        </Grid>
                </Grid>
            </Container>
        </Sidebar>
        </>
    )
}
