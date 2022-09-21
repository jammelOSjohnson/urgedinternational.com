import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
//Import Components
import { ShoppingCartItems } from './Comp/ShoppingCartItems';
import { HeaderRight } from './Comp/HeaderRight';
import { DashboardFooter } from './Comp/DashboardFooter';
import { LiveChatWidget } from '@livechat/widget-react';
const PaymentOptionsForm = React.lazy(() => import('./Comp/PaymentOptionsForm'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        }
    }),
);

export const ShoppingCartScreen: React.FC = function ShoppingCartScreen() {
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
                        <Grid item xs={12}>
                            <ShoppingCartItems />                     
                        </Grid>
                        <Grid item xs={12}>
                            <DashboardFooter />
                        </Grid>
                        {/* <Grid item xs={4}>
                            <PaymentOptionsForm />
                        </Grid> */}
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
