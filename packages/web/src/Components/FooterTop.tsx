import { Container, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import clsx from "clsx"
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background: {
            backgroundColor: "#F9FAFB" ,
            padding: "2% 1% 5% 1%",
            color: "#000",
            textAlign: "center"
        },
        Background2: {
            backgroundColor: "transparent" ,
            padding: "2% 1% 5% 1%",
            color: "#000",
            textAlign: "center"
        },
        root: {
            padding: 0
        }
    }),
);

export const FooterTop: React.FC = function FooterTop(){
    const classes = useStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    if(referralPath === "/" &&  referralPath === "Services" &&  referralPath === "ContactUs"){
        return (
            <>
                <Container maxWidth="xl" className={classes.Background}>
                    <Grid container direction="row"  className={clsx(classes.root)} alignItems="center">
                        <Grid xs={12}>
                            <Typography variant="h6" style={{fontWeight: 800}}>
                                We Accept:
                            </Typography>
                            <Typography>
                                <img src="Images/visa-logo.png" width="79.14px" height="26px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                <img src="Images/Visa_Debit_SVG_logo.svg.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa debit" />
                                <img src="Images/mastercard-logo.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="master card" />
                            </Typography>
                        </Grid>
                        {/* <Grid xs={12} md={10}>
                            <Typography variant="body1">
                            
                            </Typography>
                        </Grid> */}
                    </Grid>
                </Container>
            </>
        )
    }else{
        return (
            <>
                <Container maxWidth="xl" className={classes.Background2}>
                    <Grid container direction="row" spacing={2} className={clsx(classes.root)} alignItems="center">
                        <Grid xs={12}>
                            <Typography variant="h6" style={{fontWeight: 800}}>
                                We Accept:
                            </Typography>
                            <Typography>
                                <img src="Images/visa-logo.png" width="79.14px" height="26px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                <img src="Images/Visa_Debit_SVG_logo.svg.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa debit" />
                                <img src="Images/mastercard-logo.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="master card" />
                            </Typography>
                        </Grid>
                        {/* <Grid xs={12} md={10}>
                            <Typography variant="body1">
                            
                            </Typography>
                        </Grid> */}
                    </Grid>
                </Container>
            </>
        )
    }

}

export default FooterTop;