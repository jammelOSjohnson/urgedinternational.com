import { makeStyles, createStyles, Typography, Theme, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { Sidebar } from './Comp/Sidebar';
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

export const TermsOfServiceScreen: React.FC = function TermsOfServiceScreen() {
    const classes = useStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
      
    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" >
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        {/* <Grid item xs={2} spacing={1}>
                            <Sidebar />
                        </Grid> */}
                        <Grid container direction="row" spacing={1} className={classes.main}>
                            <Grid item xs={8} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12} >
                                <Typography>
                                    TOS
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
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
