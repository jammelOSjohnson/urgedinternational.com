import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "left",
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        }
    }),
);

export const OrderTotals: React.FC = function OrderTotals() {
    const classes = useStyles();

      var { value }  = useAppData();
      var { orders, fetchOrdersByUser, currentUser } = value;

      var TotalOrders = orders.length;
      var OrdersInProcess = 0;
      if(orders.length !== 0) {
          orders.map((item, index) => (
            OrdersInProcess =  item.OrderStatus !== "Delivered" ?
                               OrdersInProcess + 1
                               :
                               OrdersInProcess

          ))
      }

      useEffect(() => {
        try{
          fetchOrdersByUser(value).then(()=>{
            
          });
    
        }catch(e){
          console.log(e)
        }
        // eslint-disable-next-line
      }, [currentUser]);
    
      
    return (
        <>
             <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/MediumSpaceShip.png" alt="MediumSpaceShip"></img>
                    <Typography variant="h2" className={classes.OrderResult1}>{TotalOrders}</Typography>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Total Orders
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/SmallSpaceShip.png" alt="SmallSpaceShip"></img>
                    <Typography variant="h2" className={classes.OrderResult2}>{OrdersInProcess}</Typography>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Orders In Process
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}