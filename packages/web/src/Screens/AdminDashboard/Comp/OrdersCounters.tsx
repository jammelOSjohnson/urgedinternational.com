import { useQuery } from '@apollo/client';
import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardContent } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';
import { GET_ORDERS, GET_ORDERS_BY_DATE_AND_TYPE } from '../../../GraphQL/Queries';

// interface Props {
    
// }

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 1% 0px"
        },cardTitle0: {
            fontSize: "20px",
            fontWeight: 300,
            fontFamily: "PT Sans",
            color: "#11263C"
        },
        cardTitle1: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#F25A29"
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#13ADD1"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#FEC109"
        },
        cardTitle4: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#53C557"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardImage: {
            textAlign: "left"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: "20px",
            paddingTop: "10px"
        },
        links: {
            textDecoration: "none"
        },
        category: {
            fontWeight: "bold"
        }
    }),
);

export const OrdersCounters: React.FC = function OrdersCounters() {
    const classes = useStyles();
    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
    //   var history = useHistory();
    var { value }  = useAppData();
    var { orders, refreshingOrderTables } = value;
    const [Food, setFood] = useState(0);
    const [Errand, setErrand] = useState(0);
    const [Express, setExpress] = useState(0);
    const [Total, setTotal] = useState(0);
    const [startDate, setStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD hh:mm'));
    const [endDate, setEndDate] = useState(moment().endOf('month').format('YYYY-MM-DD hh:mm'));
    console.log(startDate);
    console.log(endDate);
    const {data} = useQuery(GET_ORDERS_BY_DATE_AND_TYPE,{
        variables: {StartDate: startDate, EndDate: endDate },
        pollInterval: 10000,
    });
    //ksd
    useEffect(()=> {
        try{
            if(orders.length > 0) {
                setFood(orders.length)
            }

            if(data.getOrders !== null){
              var Orders = data.getOrders;
              refreshingOrderTables(value, Orders).then(()=>{
                setTotal(Food + Errand + Express);
              });
            }
            // fetchOrders(value).then(()=>{
              
            // });
      
          }catch(e){
            //console.log(e)
          }
          // eslint-disable-next-line
    },[orders, data])
      
    return (
        <>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Food Orders
                         </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle1}>
                                    {Food}
                                    <hr style={{height: "6px", opacity: 1, width: "83px"}}/>
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Errand Orders
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle2}>
                                    {Errand}
                                    <hr style={{height: "6px", opacity: 1, width: "83px"}}/>
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Express Order
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle3}>
                                    {Express}
                                    <hr style={{height: "6px", opacity: 1, width: "83px"}}/>
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Orders
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle4}>
                                    {Total}
                                    <hr style={{height: "6px", opacity: 1, width: "83px"}}/>
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}