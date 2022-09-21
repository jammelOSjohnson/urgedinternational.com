import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';

//Import Components
import { Popularcategories } from './Comp/Popularcategories';
import { AdvertisementSlider2 } from './Comp/AdvertisementSlider2';
import { PeoplesChoice } from './Comp/PeoplesChoice';
import { PopularRestaurants } from './Comp/PopularRestaurants';
import { HeaderRight } from './Comp/HeaderRight';
import { DashboardFooter } from './Comp/DashboardFooter';
import { LiveChatWidget } from '@livechat/widget-react';
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
        {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_APP_LIVECHAT_LICENSE !== undefined? process.env.REACT_APP_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    )
}
