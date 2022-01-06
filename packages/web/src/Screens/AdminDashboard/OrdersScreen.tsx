import { Container, Grid, makeStyles, createStyles, Typography, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { FilterBar } from './Comp/FilterBar'
import { OrdersTable} from './Comp/OrdersTable';
import { ORDERS_SUBSCRIPTION } from '../../GraphQL/Subscriptions';
import { useSubscription } from '@apollo/client';
import { useAppData } from '../../Context/AppDataContext';

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
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    }),
);

export const OrdersScreen: React.FC = function OrdersScreen () {
    const classes = useStyles();
    var { value }  = useAppData();
    var { refreshingOrderTables } = value;
    const {data, loading} = useSubscription(
        ORDERS_SUBSCRIPTION
    )

    useEffect(() => {
        if(data.orderCreated !== null){
            var Orders = data.orderCreated;
            refreshingOrderTables(value, Orders).then(()=>{
            
            });
        }
    },[data])

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
                                {/* <FilterBar /> */}
                                <OrdersTable />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
