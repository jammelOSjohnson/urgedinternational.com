import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Cart } from "../../../Components/Cart";
import { Notification } from "../../../Components/Notification";
import { User } from "../../../Components/User"





const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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

    
      
    return (
        <>
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid item xs={6} spacing={1}>
                        <User />
                    </Grid>
                    <Grid container direction="row" xs={6} spacing={1}>
                        <Grid item xs={12} spacing={0} style={{marginTop: "10%"}}>
                            <Notification /> <span style={{marginRight: "10%"}}></span>
                            <Cart />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}