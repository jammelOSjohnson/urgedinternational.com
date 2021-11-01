import { useAppData } from '../Context/AppDataContext';
import {  makeStyles, createStyles, Theme, Grid} from '@material-ui/core';
import React from 'react';
import { PersonRounded } from "@material-ui/icons/";


// eslint-disable-next-line
const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        }
    }),
);

export const User: React.FC = function User() {
      
      var { value }  = useAppData();
      var { userInfo } = value;

    
      
    return (
        <>
            <Grid container direction="row" xs={12} spacing={1}>
                <Grid item xs={6} spacing={1}>
                    
                </Grid>
                <Grid container direction="column" xs={12} spacing={1}>
                    <Grid item xs={12} spacing={1}>
                        <Grid item xs={12} spacing={1}>
                            <PersonRounded style={{color: "#FF5E14"}} /> 
                            <span style={{color: "#FF5E14"}}>Hello, </span>
                            <span style={{textAlign: "right"}}>{userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined? userInfo.fullName : "user"}</span>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container direction="column" xs={12} spacing={1}>
                    <Grid item xs={6} spacing={1}>
                        <Grid item xs={12} spacing={1}>
                            <PersonRounded style={{color: "#FF5E14"}} /> <span style={{color: "#FF5E14"}}>Hello,</span>
                            <span style={{textAlign: "right"}}>{userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined? userInfo.fullName : "user"}</span>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Grid>
        </>
    )
}