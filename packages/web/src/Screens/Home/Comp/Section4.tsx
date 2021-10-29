import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';
//import icons
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from "@material-ui/icons/Instagram";

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        cardGrid3: {
            padding: "5% 0 0 0",
            color: "#1D2635",
        },
        excitedGirl: {
            zIndex: -1,
            width: "320px",
            position: "relative",
            bottom: "-115px",
        },
    }),
);

export const Section4: React.FC = function Section4() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md" className={classes.cardGrid3}>
                <div style={{textAlign: "center"}}>
                    <div>
                        <img src="Images/ExcitedGirl.png" alt="excited girl" className={classes.excitedGirl} />
                    </div>
                </div>
            </Container>
        </>
    )
}