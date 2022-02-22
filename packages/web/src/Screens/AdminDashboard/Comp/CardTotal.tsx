import { Card, Grid, makeStyles, createStyles, Typography, Theme, CardContent } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';

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



export const CardTotal: React.FC = function CardTotal() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { rider_orders, paySettings , fetchPaySettings } = value;
    const [total, setTotal] = useState(0.00);


    useEffect(() => {
        try{
            if(paySettings === undefined){
                fetchPaySettings(value);
            }
            
            //console.log("checking to see if i can calculate");
            if(rider_orders.length > 0 && paySettings !== undefined) {
                //console.log("proceed");
                if(paySettings.perDeliveryEnabled){
                    //console.log("per order calc");
                    let newTotal = rider_orders.length * paySettings.value;
                    //console.log(newTotal);
                    setTotal(newTotal);
                }else{
                    //console.log("percentage calc");
                    let newTotal = 0;
                    for(let i = 0; i < rider_orders.length;){
                        let percentage = paySettings.value / 100;
                        let percentTotal = rider_orders[i].DeliveryFee * percentage;
                        newTotal = newTotal + percentTotal;
                        i = i + 1;
                    }
                    //console.log(newTotal);
                    setTotal(newTotal);
                }
                
            }
        }catch(err){
            //console.log(err)
        }
    }, [rider_orders, paySettings])
    return (
        <Grid item xs={10} md={3}>
            <Card className={classes.card}>
                <Typography gutterBottom className={classes.cardTitle0}>
                    Total Earned
                </Typography>
                <CardContent className={classes.cardContent}>
                    <Link className={classes.links} to="#" title="Food Delivery">
                        <Typography gutterBottom className={classes.cardTitle4}>
                            $JMD&nbsp;{ parseFloat(total.toString()).toFixed(2)}
                        </Typography>
                        <hr style={{height: "6px", opacity: 1, width: "83px"}}
                            className={classes.cardTitle4}
                        />
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    );
}