import { Container, Grid, makeStyles, createStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { HeaderRight } from './Comp/HeaderRight';
import { OrdersCounters } from './Comp/OrdersCounters';
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));


interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

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

export const RiderDashboard: React.FC = () => {
    const classes = useStyles();



    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" xs={12} spacing={0}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12}>
                                <OrdersCounters />
                            </Grid>
                            <Grid item xs={12}>
                                Order Statistics
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
