import { makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme, Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlayArrowRounded, ArrowBackRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted"
            },
            "& .MuiSelect-select:$focus": {
                backgroundColor: "inherit",
                color: "#9B9B9B"
            },
            "& .MuiFormLabel-root": {
                fontWeight: 700,
                fontSize: "1.2rem"
            },
            "& .MuiInputLabel-root.Mui-focused":{
                color: "#9B9B9B"
            },
            "& .MuiSwitch-colorSecondary.Mui-checked":{
                color: "#FFF"
            },
            "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#76ff03"
            },
            "& .MuiSwitch-colorSecondary + .MuiSwitch-track": {
                backgroundColor: "#b2102f"
            }
        },
        links: {
            textDecoration: "none",
            color: "inherit"
        }
    }),
);

export const HeaderLeft: React.FC = function HeaderLeft() {
    const classes = useStyles();
    const theme = useTheme();
    var { value }  = useAppData();
    //, rider, fetchRiderInfo, udateRiderStatusInfo
    //var { userInfo } = value;
    //console.log(userInfo)
    //const [availability, setAvailability] = React.useState(rider !== undefined ? rider.isAvailable : false);

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     //setAvailability(event.target.checked);
    //     udateRiderStatusInfo(value, userInfo._id, event.target.checked, rider.disabled );
    // }

    // useEffect(() => {
    //     if(rider === undefined && userInfo._id !== ""){
    //         //console.log(userInfo._id)
    //         fetchRiderInfo(value,userInfo._id);
    //     }else if(rider !== undefined){
    //         if(rider.isAvailable !== availability){
    //             setAvailability(rider.isAvailable)
    //         }
    //     }
    // }, [rider, userInfo._id])
    
      
    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    {/* <form>
                        <FormGroup row className={classes.root}>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={availability}
                                    onChange={handleChange}
                                    name="availability"
                                />
                                }
                                label={availability? "I'm Available" : "Not Available"}
                            />
                        </FormGroup>
                    </form> */}
                    {referralPath === "/restaurantdashboard" || referralPath === "/RestaurantDashboard" ?
                    <span>DASHBOARD</span> :
                    referralPath === "/viewordersdetails" || referralPath === "/ViewOrdersDetails" ?
                    <span style={{color: "#FF5E14"}}><ArrowBackRounded /> <Link to="/RestaurantDashboard" className={classes.links}>RETURN</Link></span> :
                    referralPath === "/restaurantprofile" || referralPath === "/RestaurantProfile" ?
                    <span style={{color: "#FF5E14"}}><ArrowBackRounded /> <Link to="/RestaurantDashboard" className={classes.links}>RETURN</Link></span> :
                    referralPath === "/Restaurants" || referralPath === "/restaurants" ?
                    <span><PlayArrowRounded /> FOOD DELIVERY <PlayArrowRounded /> RESTAURANTS</span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={3}>
                            <img 
                                src="Images/MobileMenuIcon.png"
                                style={{marginTop: "10px"}}
                                alt="MobileMenuIcon"
                            >
                            </img>
                        </Grid>
                        {/* <Grid item xs={9}>
                            <form>
                                <FormGroup row className={classes.root}>
                                    <FormControlLabel
                                        control={
                                        <Switch
                                            checked={availability}
                                            onChange={handleChange}
                                            name="availability"
                                        />
                                        }
                                        label={availability? <b>I'm Available</b> : <b>Not Available</b>}
                                    />
                                </FormGroup>
                            </form>
                        </Grid> */}
                    </Grid>
                </>
            ):<></>}
        </>
    )
}