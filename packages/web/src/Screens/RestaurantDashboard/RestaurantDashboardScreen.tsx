import { Container, Grid, makeStyles, createStyles, Theme, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
//Import Components
import { HeaderRight } from './Comp/HeaderRight';
import { OrdersTable} from './Comp/OrdersTable';
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));


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

export const RestaurantDashboardScreen: React.FC = function RestaurantDashboardScreen () {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={0}>
                            {isMatchMedium? (
                                <>
                                    <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                        <HeaderLeft />
                                    </Grid>
                                    <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                        <HeaderRight />
                                    </Grid>
                                </>
                            ):<></>}
                            {isMatch? (
                                <>
                                    <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                        <HeaderLeft />
                                    </Grid>
                                    <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                        <HeaderRight />
                                    </Grid>
                                </>
                            ):<></>}
                            <Grid item xs={12}>
                                <OrdersTable />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
