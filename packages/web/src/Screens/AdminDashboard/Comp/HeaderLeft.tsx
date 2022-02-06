import { makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
import { PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        links: {
            textDecoration: "none",
            color: "inherit"
        }
    }),
);

export const HeaderLeft: React.FC = function HeaderLeft() {
    const classes = useStyles();
    const theme = useTheme();
    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    
      
    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    {referralPath === "/Organisations" || referralPath === "/organisations" ?
                    <span><Link to="/Organisations" className={classes.links}>Organisations</Link></span> :
                    referralPath === "/AdminDashboard" || referralPath === "/admindashboard" ?
                    <span><Link to="/AdminDashboard" className={classes.links}>Dashboard</Link></span> :
                    referralPath === "/Employees" || referralPath === "/employees" ?
                    <span><Link to="/Employees" className={classes.links}>Employees</Link></span> :
                    referralPath === "/AdminOrderSDetails" || referralPath === "/adminordersdetails" ?
                    <span><Link to="/AdminOrderSDetails" className={classes.links}>Order Details</Link></span> :
                    referralPath === "/AdminSettings" || referralPath === "/adminsettings" ?
                    <span><Link to="/AdminSettings" className={classes.links}>Settings</Link></span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <img src="Images/MobileMenuIcon.png" alt="MobileMenuIcon"></img>
            ):<></>}
        </>
    )
}