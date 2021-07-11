import React from 'react'
//import css
import { Container, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background: {
            backgroundImage: "url(Images/AboutSection5BgPic.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 0,
            color: "#FFFFFF",
            zIndex: 10,
            height: "461px",
            borderTop: "5px solid #F7B614"
        },
    }),
);

export const Section5: React.FC = function Section5() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.Background}>
              <div>
                  
              </div>
            </Container>
        </>
    )
}