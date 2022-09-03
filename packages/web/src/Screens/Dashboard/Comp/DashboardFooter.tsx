import { makeStyles, createStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
//Import Components


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            height: 95,
            position: "fixed",
            bottom: 0,
            zIndex: 1000
          },
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
        linkStyle: {
            display: "inline-block",
            marginRight: "3%",
            color: "#7A7A7B"
        },
        list: {
            width: 250,
          },
          fullList: {
            width: 'auto',
          },
    }),
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const DashboardFooter: React.FC = function DashboardFooter() {
    const classes = useStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    var year = new Date().getFullYear();

    // const [value, setValue] = React.useState('recents');
    // const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    //   setValue(newValue);
    // };
    
      
    return (
        <>
            {/* <BottomNavigation value={value} onChange={handleChange} className={clsx(classes.root, "showOnMobile")}>
                <BottomNavigationAction label="Dashboard" value="dashboard" icon={
                    referralPath === "/Dashboard" ?
                        <img src="Images/Dashboard-mobile.png" />
                    :
                        <img src="Images/Dashboard-mobileG.png" />
                } onClick={() => history.push("/Dashboard")}/>
                <BottomNavigationAction label="Food Delivery" value="food delivery" icon={
                    referralPath === "/FoodDelivery" || referralPath === "/Restaurants" || referralPath === "RestaurantsMenu"?  
                        <img src="Images/FoodDelivery-mobile.png" />
                    :
                        <img src="Images/FoodDelivery-mobileG.png" />
                } onClick={() => history.push("/FoodDelivery")} />
                <BottomNavigationAction label="Package Delivery" value="package delivery" icon={<img src="Images/PackageDelivery-mobile.png" />} />
                <BottomNavigationAction label="Market Place" value="market place" icon={<img src="Images/MarketPlace-mobile.png" />} />
            </BottomNavigation> */}
            {
                referralPath !== "/Dashboard" ?
                    <Typography style={{textAlign: "center", marginTop: "3%", paddingBottom: "3%"}} className="hideOnMobile">
                        <span className={classes.linkStyle}>
                            {`Copyright ©${year}, Urged. All Rights Reserved.`} 
                        </span>
                        <Link to="/Tos" className={classes.linkStyle}><Typography>Terms of Use </Typography></Link> 
                        <Link to="/Privacy" className={classes.linkStyle}><Typography>Privacy Policy</Typography></Link>
                    </Typography>
                :
                    <></>
            }   
            <style>
                {
                    `
                        @media only screen and (min-width: 768px){
                            .showOnMobile{
                                display: none;
                            }
                        }

                        @media only screen and (max-width: 768px){
                            .hideOnMobile{
                                display: none;
                            }
                        }
                    `
                }
            </style>
            
        </>
    )
}
