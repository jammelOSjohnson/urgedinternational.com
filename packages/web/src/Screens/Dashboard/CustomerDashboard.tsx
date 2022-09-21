import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
//Import Components
import { OrderTotals } from './Comp/OrderTotals';
import { Favourites } from './Comp/Favourites';
import { CurrentPackage } from './Comp/CurrentPackage';
import { Categories } from './Comp/Categories';
import { AdvertisementSlider } from './Comp/AdvertisementSlider';
import { HeaderRight } from './Comp/HeaderRight';
import { DashboardFooter } from './Comp/DashboardFooter';
import { LiveChatWidget } from '@livechat/widget-react';
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        }
    }),
);

export const CustomerDashboardScreen: React.FC = function CustomerDashboardScreen() {
    const classes = useStyles();

    
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" >
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    {/* <Grid item xs={2} spacing={1}>
                        <Sidebar />
                    </Grid> */}
                    <Grid container direction="row" spacing={1} className={classes.main}>
                        <Grid item xs={8} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                        {/*Row 1*/}
                        <Grid item xs={12} md={8}>
                            <AdvertisementSlider />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <OrderTotals />
                        </Grid>
                        {/*Row 2*/}
                        <Grid item xs={12} md={8}>
                            <Categories />
                            <CurrentPackage />                       
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Favourites />
                        </Grid>
                        <Grid item xs={12} >
                            <DashboardFooter />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Sidebar>
        {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_LIVECHAT_LICENSE !== undefined? process.env.REACT_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    )
}
