import React from 'react';
//import CSS
import { Container, Button, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Text1: {
            fontWeight: 700,
            paddingTop: "10%"
        },
        Text2: {
            paddingTop: "3%",
            color: "#F7B614",
            fontWeight: "bold",
        },
        Text3: {
            paddingTop: "3%",
            fontWeight: "bold",
            maxWidth: "620px",
            paddingBottom: "3%",
        },
        heroBackground: {
            backgroundImage: "url(Images/happy-african.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 0,
            color: "#FFFFFF",
        },
        innerContainer: {
            height: "669px",
            paddingLeft: "6%", 
        },
        btn: {
            borderRadius: "50px"
        }
    }),
);

export const Section3: React.FC = function Section3() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <div className={classes.innerContainer}>
                    <Typography variant="h5" className={classes.Text1}>
                        Stay Home,
                    </Typography>
                    <Typography variant="h3" className={classes.Text2}>
                        We Got You Covered
                    </Typography>
                    <Typography variant="body1" className={classes.Text3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae cursus
                        et euismod tempor. Adipiscing elementum vestibulum in eget enim donec
                        sed tincidunt.
                    </Typography>
                    <Button className={classes.btn} variant="contained" color="primary" type="submit">
                        Get Started
                    </Button>&nbsp;&nbsp;
                    <Button className={classes.btn} variant="outlined" color="primary" type="button">
                        Learn More
                    </Button>
                </div>
            </Container>
        </>
    )
}