import React from 'react'
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background: {
            backgroundColor: "#1D2635" ,
            padding: "3% 0 0 0",
            color: "rgba(255, 255, 255, 0.24)",
            height: "160px",
            borderTop: "5px solid #F7B614",
            textAlign: "center"
        },
    }),
);

export const Footer: React.FC = function Footer() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.Background}>
                <div>
                    <img src="Images/UrgedFooterLogo.png" alt="footerlogo" />
                </div>
                <div>
                    <Typography >
                        Copyright ©2021, Urged. All Rights Reserved.
                    </Typography>
                </div>
            </Container>
        </>
    )
}