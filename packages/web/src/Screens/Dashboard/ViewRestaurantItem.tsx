import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
// import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { RestaurantMenuHeader } from './Comp/RestaurantMenuHeader';
import { DashboardFooter } from './Comp/DashboardFooter';
import { RestaurantMenuResult } from './Comp/RestaurantMenuResult';



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

export const ViewRestaurantItem: React.FC = function ViewRestaurantItem() {
    const classes = useStyles();

    
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" style={{paddingLeft: "8px", paddingRight: "8px"}} className={classes.main}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid container direction="row" xs={12} spacing={0}>
                        <Grid item xs={8} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                        <Grid item xs={12}>
                            <RestaurantMenuHeader />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <RestaurantMenuCategories />
                        </Grid> */}
                        <Grid item xs={12}>
                            <RestaurantMenuResult />                    
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
