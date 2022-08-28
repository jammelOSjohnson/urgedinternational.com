import { useQuery } from '@apollo/client';
import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardContent } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';
import { GET_ORDERS_BY_DATE_AND_TYPE } from '../../../GraphQL/Queries';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Calendar } from './Calendar';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
// interface Props {
    
// }

interface chartData {
    estTime: string;
    count: number;
}

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
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [labels, setLabels] = useState<string[]>([]);
    const [labelVals, setLabelVals] = useState<chartData[]>([]);
    // console.log(startDate);
    // console.log(endDate);
    const {data} = useQuery(GET_ORDERS_BY_DATE_AND_TYPE,{
        variables: {StartDate: startDate, EndDate: endDate },
        pollInterval: 20000,
    });
    //ksd
    useEffect(()=> {
        try{
            //console.log("useEffect start")
            let start = moment().startOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
            let end =  moment().endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
            if(startDate === ""){
                setStartDate(start);
            }
            
            if(endDate === ""){
                setEndDate(end);
            }
            //console.log(startDate);
            //console.log(endDate);

            //console.log(orders.length);
            //console.log(data);
            if(data !== undefined){
                if(data.getOrdersByDateAndTime.length > 0) {
                    //console.log("orders avalable");
                    let tempLabels = [] as string[];
                    data.getOrdersByDateAndTime.map((item, index) => {
                        const now = new Date(parseInt(item.OrderDate, 10));
                        const estTime = moment.tz(now, "America/Jamaica").format("DD-MM-YYYY");
                        if(!tempLabels.includes(estTime)){
                            tempLabels.push(estTime);
                        }
                    })
                    //console.log(tempLabels);
                    let tempLabelVals = [] as chartData[];
                    for(var i = 0; i < tempLabels.length;){
                        for(var j = 0; j < data.getOrdersByDateAndTime.length;){
                            //console.log(data.getOrdersByDateAndTime[j].OrderDate);
                            const now = new Date(parseInt(data.getOrdersByDateAndTime[j].OrderDate, 10));
                            const estTime = moment.tz(now, "America/Jamaica").format("DD-MM-YYYY");
                            if(tempLabels[i] === estTime){
                                if(tempLabelVals.length === 0){
                                    //console.log(estTime);
                                    tempLabelVals[i] = {estTime: estTime, count: 1};
                                }else if(tempLabelVals[i] === undefined){
                                    //console.log(estTime);
                                    tempLabelVals[i] = {estTime: estTime, count: 1};
                                }else{
                                    // console.log(tempLabelVals[i]);
                                    // console.log(estTime);
                                    // console.log(i);
                                    // console.log(tempLabelVals[i].count);
                                    // console.log(tempLabelVals);
                                    tempLabelVals[i].count = tempLabelVals[i].count + 1;
                                }
                                
                            }
                            j= j+1;
                        }
                        i= i+1;
                    }
                    
                    setLabels(tempLabels);
                    setLabelVals(tempLabelVals)
    
                    //console.log(labelVals)
                    setFood(data.getOrdersByDateAndTime.length);
                }else{
                    //console.log("no orders yet");
                }

                //console.log(data.getOrdersByDateAndTime);
                if(data.getOrdersByDateAndTime !== null){
                    if(data.getOrdersByDateAndTime.length > 0){
                        //console.log("Id is" + data.getOrdersByDateAndTime[0]._id);
                        if(data.getOrdersByDateAndTime[0]._id !== null) {
                        var Orders = data.getOrdersByDateAndTime;
                        refreshOrders(Orders);
                        }
                    }
                  }
            }else{
                //console.log("data is undefined");
            }
            
            // fetchOrders(value).then(()=>{
              
            // });
      
          }catch(e){
            //console.log(e)
          }
          // eslint-disable-next-line
    },[orders, data])
    
    const refreshOrders = async (Orders) => {
        try{
            await refreshingOrderTables(value, Orders).then(()=>{
                //console.log("completed updating orders")
                setTotal(Food + Errand + Express);
            });
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={10} md={12}>
                    <Card className={classes.card}>
                        {/* <Typography gutterBottom className={classes.cardTitle0}>
                            Total Food Orders
                         </Typography> */}
                        <CardContent className={classes.cardContent}>
                            <Calendar type="general" setStartDate={setStartDate} setEndDate={setEndDate} />
                        </CardContent>
                    </Card>
                </Grid>
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
            <Grid item xs={12}>
                <Line 
                    height={400}
                    width="100%"
                    data= {{
                        labels: labels.map((item, index) => {return item}),
                        datasets: [{
                            label: '# of Orders',
                            data: labelVals.map((item, index) => {return item.count}),
                            borderWidth: 1,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            yAxisID: 'y',
                        }]
                    }}
                    options= {{
                        maintainAspectRatio: false,
                    }}

                />
            </Grid>
        </>
    )
}