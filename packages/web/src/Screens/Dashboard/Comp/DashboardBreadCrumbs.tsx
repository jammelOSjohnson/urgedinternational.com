import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { HistoryRounded, PlayArrowRounded, ArrowBackRounded } from "@material-ui/icons/";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        link: {
            textDecoration: "none",
            color: "inherit"
        },
    }),
);

export const DashboardBreadCrumbs: React.FC = function DashboardBreadCrumbs() {
    const classes = useStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    return (
      <>
          <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
              <Link to="/Dashboard" className={classes.link}>
                {
                  referralPath === "/Rates" || referralPath === "/rates" ||
                  referralPath === "/Dashboard" || referralPath === "/dashboard"
                  ? '' : 'PORTAL'
                }
              </Link>
              {referralPath === "/fooddelivery" || referralPath === "/FoodDelivery" ?
              <span ><PlayArrowRounded /> <span style={{color: "#FF5E14"}}>FOOD DELIVERY</span></span> :
              referralPath === "/orderhistory" || referralPath === "/OrderHistory" ?
              <span ><PlayArrowRounded /><span style={{color: "#FF5E14"}}>Order History</span></span> :
              referralPath === "/Restaurants" || referralPath === "/restaurants" ?
              <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> <span style={{color: "#FF5E14"}}>RESTAURANTS</span></span> :
              referralPath === "/Menu" || referralPath === "/menu" || 
              referralPath === "/RestaurantItem" || referralPath === "/restaurantitem" ?
              <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> <Link to="/Restaurants" className={classes.link}>RESTAURANTS</Link> <PlayArrowRounded /> <span style={{color: "#FF5E14"}}>MENU</span></span> :
              referralPath === "/Rates" || referralPath === "/rates" ?
              <span><Link to="/Uship" className={classes.link}><span style={{color: "#FF5E14"}}><ArrowBackRounded /> RETURN</span></Link></span> :
              referralPath === "/Uship" || referralPath === "/uship" ?
              <span><PlayArrowRounded /> <Link to="/Uship" className={classes.link} style={{color: "#FF5E14"}}>CARGO &amp; FREIGHT</Link></span> : ""}
          </Typography>
      </>
    );
}
