import React from 'react'
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Button, Box, Icon, IconButton} from '@material-ui/core';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            justifyContent: "center",
        },
        s3Background: {
            backgroundImage: "url(Images/AboutSection3Bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "461px",
            padding: 0,
            color: "#FFFFFF",
            borderTop: "5px solid #F7B614"
        },
        Typo1: {
            textAlign: "center",
            color: "#F7B614",
            fontSize: "16px",
            fontWeight: "bold",
            paddingTop: "2%",
        },
        Typo2: {
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "48px",
            fontWeight: "bold",
        },
        Typo3: {
            textAlign: "center",
            color: "#F7B614",
            fontSize: "30px",
            fontWeight: "bold",
            paddingBottom: "2.5%",
        },
        icon: {
            width: 30,
            height: 30,
            marginRight: 10,
            marginBottom: 5,
        },

        Button: {
                backgroundColor: "#FAFAFA",
                border: "1.21951px solid #F7B614",
                height: 41,
                width: 171,
                borderRadius: 36,
                color: "#F7B614",
            },
    }),
);

export const Section3: React.FC = function Section3() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.s3Background}>
                <Grid item xs={12} justifyContent="center">
                    <Typography className={classes.Typo1}>
                        Mon - Sat 9:00 am - 6:00pm
                    </Typography>
                    <Typography className={classes.Typo2}>
                        Place Orders On Whatsapp or Call
                    </Typography>
                    <Typography className={classes.Typo3}>
                        <IconButton className={classes.icon}>
                            <img src="Images/phone.svg" alt="Urged Logo"></img>
                        </IconButton>
                        876-773-5015 
                    </Typography>
                    <Box textAlign="center">
                        <Button variant="contained" disableElevation className={classes.Button}>
                            Order Now
                        </Button>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}