import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import {OrderStatuses} from './Comp/OrderStatuses';
import {OrderFullDetails} from './Comp/OrderFullDetails';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px",
            width: "100%",
            marginLeft: "0px",
            marginRight: "0px"
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

export const RestaurantOrderDetailsScreen: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" xs={12} spacing={1}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12}>
                                Order Status
                            </Grid>
                            <Grid item xs={12}>
                                <OrderStatuses />
                            </Grid>
                            <Grid item xs={12}>
                                <OrderFullDetails />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
