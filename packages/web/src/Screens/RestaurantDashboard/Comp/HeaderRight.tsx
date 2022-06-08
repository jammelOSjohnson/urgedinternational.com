import { Container, Grid, makeStyles, createStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { Notification } from "../../../Components/Notification";
import { User } from "../../../Components/User"
//import { useAppData } from '../../../Context/AppDataContext';



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
        noti: {
            color: "#FF5E14"
        },
        main: {
            padding: 0,
        },
        gridRoot: {
            padding: "0px"
        },
    }),
);

export const HeaderRight: React.FC = function HeaderRight() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    //var { value }  = useAppData();
    //, rider, fetchRiderInfo, udateRiderStatusInfo
    //var { userInfo } = value;
    //const [availability, setAvailability] = React.useState(rider !== undefined ? rider.isAvailable : false)

    //var history = useHistory();

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     //setAvailability(event.target.checked);
    //     udateRiderStatusInfo(value, userInfo._id, event.target.checked, rider.disabled )
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
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    {isMatchMedium? (
                        <>
                            <Grid item xs={6}>
                                <User />
                            </Grid>
                            <Grid item xs={6}>
                                <Notification /> <span style={{marginRight: "10%"}}></span>
                            </Grid>
                        </>
                    ):<></>}
                    {isMatch? (
                        <>
                            {/* <Grid container direction="row" className={classes.gridRoot} alignItems="center">
                                <Grid item xs={12}>
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
                                </Grid>
                            </Grid> */}
                        </>
                    ):<></>}
                </Grid>
            </Container>
        </>
    )
}