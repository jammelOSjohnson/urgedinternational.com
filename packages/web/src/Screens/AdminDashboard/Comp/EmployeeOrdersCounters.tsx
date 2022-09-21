//import { useQuery } from '@apollo/client';
import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardContent } from '@material-ui/core';
//import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { EmployeeOrdersTable } from './EmployeeOrdersTable'
import { CardTotal } from './CardTotal';
//import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';
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
  //import { Line } from 'react-chartjs-2';
//import { GET_ORDERS_BY_DATE_AND_TYPE } from '../../../GraphQL/Queries';
import { EmployeeDetailsRight } from './EmployeeDetailsRight';
import { Calendar } from './Calendar';
import EditStaff from './EditStaff';

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

export const EmployeeOrdersCounters: React.FC = function EmployeeOrdersCounters() {
    const classes = useStyles();
    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
    //   var history = useHistory();
    var { value }  = useAppData();
    var { rider_orders } = value;
    const [Food, setFood] = useState(0);
    const [Errand, setErrand] = useState(0);
    const [Express, setExpress] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    //const [Total, setTotal] = useState(0);
    //const [startDate, setStartDate] = useState("");
    //const [endDate, setEndDate] = useState("");
    //const [labels, setLabels] = useState<string[]>([]);
    //const [rider, setRider] = useState<string[]>([]);
    // console.log(startDate);
    // console.log(endDate);
    // const {data} = useQuery(GET_ORDERS_BY_DATE_AND_TYPE,{
    //     variables: {StartDate: startDate, EndDate: endDate },
    //     pollInterval: 20000,
    // });


    //ksd
    useEffect(()=> {
        try{
            //console.log("useEffect start")
            //let start = moment().startOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
            //let end =  moment().endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
            // setStartDate(start);
            // setEndDate(end);
            // console.log(rider_orders.length);
            // console.log(data);
            if(rider_orders.length > 0) {
                //console.log("rider_orders avalable");
                // rider_orders.map((item, index) => {
                //     const now = new Date(parseInt(item.OrderDate, 10));
                //     const estTime = moment.tz(now, "America/Jamaica").format("DD-MM-YYYY");
                //     if(!labels.includes(estTime)){
                //         labels.push(estTime);
                //     }
                // })
                //console.log(labels);
                // for(var i = 0; i < labels.length;){
                //     for(var j = 0; j < rider_orders.length;){
                //         //console.log(data.getOrdersByDateAndTime[j]);
                //         const now = new Date(parseInt(rider_orders[j].OrderDate, 10));
                //         const estTime = moment.tz(now, "America/Jamaica").format("DD-MM-YYYY");
                //         if(labels[i] === estTime){
                //             if(labelVals[i] === undefined){
                //                 labelVals[i] = 1;
                //             }else{
                //                 labelVals[i] = labelVals[i] + 1;
                //             }
                            
                //         }
                //         j= j+1;
                //     }
                //     i= i+1;
                // }

                //console.log(labelVals)
                setFood(rider_orders.length);
            }else{
                //console.log("no rider_orders yet");
            }
            // if(rider_orders.length > 0){
            //     //console.log("Id is" + rider_orders[0]._id);
            //     if(rider_orders._id !== null) {
            //       //var Orders = rider_orders;
            //       //refreshOrders(Orders);
            //     }
                
            // }
            
            // fetchOrders(value).then(()=>{
              
            // });
      
          }catch(e){
            //console.log(e)
          }
          // eslint-disable-next-line
    },[rider_orders])
    

    return (
        <>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Food Orders
                         </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle1}>
                                    {Food}
                                </Typography>
                                <hr style={{height: "6px", opacity: 1, width: "83px"}} className={classes.cardTitle1}/>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Errand Orders
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle2}>
                                    {Errand}
                                </Typography>
                                <hr style={{height: "6px", opacity: 1, width: "83px"}}
                                    className={classes.cardTitle2}
                                />
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Card className={classes.card}>
                        <Typography gutterBottom className={classes.cardTitle0}>
                            Total Express Order
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle3}>
                                    {Express}
                                </Typography>
                                <hr style={{height: "6px", opacity: 1, width: "83px"}}
                                    className={classes.cardTitle3}
                                />
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <CardTotal />
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={12} md={9}>
                    <Calendar type="" setStartDate={setStartDate} setEndDate={setEndDate} />
                </Grid>
                <Grid item xs={12} md={3}>
                    {/* <EditStaff /> */}
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={12} sm={9}>
                    <EmployeeOrdersTable />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <EmployeeDetailsRight />
                </Grid>
            </Grid>
        </>
    )
}