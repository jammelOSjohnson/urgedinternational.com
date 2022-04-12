import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 1% 0px"
        },
        cardTitle1: {
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "PT Sans",
            textAlign: "center",
            // color: "#F25A29"
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "PT Sans",
            textAlign: "center",
            // color: "#13ADD1"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "PT Sans",
            textAlign: "center",
            // color: "#FEC109"
        },
        cardTitle4: {
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "PT Sans",
            textAlign: "center",
            // color: "#53C557"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardImage: {
            textAlign: "center"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "5px",
            paddingLeft: "20px",
            paddingTop: "10px",
        },
        links: {
            textDecoration: "none"
        },
        category: {
            fontWeight: "bold"
        }
    }),
);

export const ErrandCards: React.FC = function ErrandCards() {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/Pay Bill.png" alt="Pay Bill"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom className={classes.cardTitle1}>
                                Pay Bill
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/Bank.png" alt="Bank"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom className={classes.cardTitle2}>
                                Banking Transactions
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/Tax Office.png" alt="Tax Office"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom className={classes.cardTitle3}>
                                Tax Office Transactions
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/Other Errands.png" alt="Other Errands"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom className={classes.cardTitle4}>
                                Other Errands
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}