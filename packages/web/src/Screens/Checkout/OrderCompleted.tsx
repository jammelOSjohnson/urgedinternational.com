import { Container, Grid, makeStyles, createStyles, Typography, Theme, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { Sidebar } from '../Dashboard/Comp/Sidebar';
import { HeaderLeft } from '../Dashboard/Comp/HeaderLeft';
import { HeaderRight } from '../Dashboard/Comp/HeaderRight';
import { DashboardFooter } from '../Dashboard/Comp/DashboardFooter';
import { Link } from "react-router-dom";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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
          Button: {
            backgroundColor: theme.palette.primary.light,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "50%",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        link:{
            textDecoration: "none"
        }
    }),
);

export const OrderCompleted: React.FC = function OrderCompleted() {
    const classes = useStyles();

    
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" style={{paddingLeft: "8px", paddingRight: "8px"}} className={classes.main}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid container direction="row" xs={12} spacing={0}>
                        <Grid item xs={8} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                        <Grid item xs={12} style={{paddingBottom: "15%", textAlign: "center"}}>
                            <Typography variant="h3">Oder Successful</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                            <Link to="/FoodDelivery" className={classes.link}>
                                <Button size="small"   className={clsx(classes.Button,classes.btnfonts)}   type="button">
                                    Return to dashboard
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                            <Link to="/OrderHistory" className={classes.link}>
                                <Button size="small"   className={clsx(classes.Button,classes.btnfonts)}   type="button">
                                        View Order History 
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} style={{paddingBottom: "26%"}}>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <DashboardFooter />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Sidebar>
        </>
    )
}
