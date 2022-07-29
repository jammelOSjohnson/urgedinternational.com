import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';

//Import Components
import { Sidebar } from './Comp/Sidebar';
import { Popularcategories } from './Comp/Popularcategories';
import { AdvertisementSlider2 } from './Comp/AdvertisementSlider2';
import { PeoplesChoice } from './Comp/PeoplesChoice';
import { PopularRestaurants } from './Comp/PopularRestaurants';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { DashboardFooter } from './Comp/DashboardFooter';



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
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    }),
);

export const FoodDeliveryDashboardScreen: React.FC = function FoodDeliveryDashboardScreen() {
    const classes = useStyles();

    
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" style={{paddingLeft: "8px", paddingRight: "8px"}} className={classes.main}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid container direction="row" xs={12} spacing={0}>
                        <Grid item xs={8} style={{marginBottom: "10%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "10%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                        <Grid item xs={12}>
                            <AdvertisementSlider2 />
                        </Grid>
                        <Grid item xs={12}>
                            <Popularcategories />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <PeoplesChoice />                    
                        </Grid> */}
                        <Grid item xs={12}>
                            <PopularRestaurants />
                        </Grid>
                        <Grid item xs={12}>
                            <DashboardFooter />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Sidebar>
        </>
    )
}
