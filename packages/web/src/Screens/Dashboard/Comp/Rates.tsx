import { Container, Grid, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px"
        },
        rateRoot: {
            padding: "0px"
        },
        root2: {
            padding: 0,
            overflowY: "auto", 
            maxHeight: "60vh"
        },
        rates: {
            background: theme.palette.primary.main,
            opacity: 1,
            margin: "0 auto",
            height: "10vh",
            paddingTop: "3vh",
            width: "50%",
            textAlign: "center",
            borderRadius: "5%",
            color: "#FFF",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            marginBottom: "2%"
        },
        ratesAdditional: {
            background: theme.palette.primary.main,
            opacity: 1,
            height: "30vh",
            paddingTop: "10vh",
            textAlign: "center",
            borderRadius: "2%",
            color: "#FFF",
            fontSize: "1.5rem",
            fontWeight: "bolder"
        },
        paragraph: {

        },
        cardTitle: {
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: "bold"
        },
        cardTitle2: {
            textAlign: "left",
            fontSize: "1.8rem",
            fontWeight: "bold"
        },
        paragraphHeadings: {

        }
    }),
);

export const Rates: React.FC = function Rates() {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" >
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid item xs={12}>
                        <Typography gutterBottom className={classes.cardTitle}>
                            Air Freight Shipping Rates
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    1LB $650
                                </Typography> 
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    2Lb $650
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    3Lb $1200
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    4Lb $1550
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12} sm={6}>  
                                <Typography className={classes.rates}>
                                    5Lb $1900
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    6Lb $2200
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    7Lb $2500
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.rates}>
                                    8Lb $2850
                                </Typography> 
                            </Grid>
                        </Grid>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12} sm={6}>    
                                <Typography className={classes.rates}>
                                    9Lb $3100
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>    
                                <Typography className={classes.rates}>
                                    10Lb $3450
                                </Typography>
                            </Grid>
                        </Grid>    
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container direction="row" spacing={0} className={classes.rateRoot} alignItems="center">
                            <Grid item xs={12}> 
                                <Typography className={classes.ratesAdditional}>
                                    Each additional lb over 10lbs is just $350 JMD per lb
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} style={{margin:"0 auto"}}>
                        <Typography gutterBottom className={classes.cardTitle2}>
                            Processing Fee:
                        </Typography> 
                        <Typography className={classes.paragraph}> 
                            Each package is subject to a processing fee of $230 { /* &#125;&#125; */} 
                        </Typography>    
                        <br /><br />
                        <Typography gutterBottom className={classes.cardTitle2}>
                            Customs Fee:
                        </Typography>
                        <Typography className={classes.paragraph}>
                            Packages deemed by Customs as intended for personal use, valued in excess of US$50.00 (C.I.F.) may be subject to Customs Duty Charges.
                            For more details as it relates to customs charges, please visit <a href="https://www.jacustoms.gov.jm/" title="jacustoms" target="_blank">www.jacustoms.gov.jm</a>
                        </Typography>    
                        <br /><br />
                        <Typography gutterBottom className={classes.cardTitle2}>
                            Our Local Delivery Rates:
                        </Typography>
                        <Typography className={classes.paragraph}> 
                            May Pen: 
                            Packages under 10lb Free Delivery by Urged 
                            <br /><br />
                            Other Parishes: 
                            Delivery starts at $300 
                            <br /><br />
                            Third party couriers includes Zipmail, Knutsford Express or Doorway Express 
                            <br /><br />
                            Prices are Subjected to Change.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
