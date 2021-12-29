import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Button, useMediaQuery, useTheme, AppBar, Tabs, Box, Tab} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0%"
        },
        s2Background: {
            background: "#FFFFFF",
            padding: 0,
        },
        s2Heading: {
            color: "#1D2635",
            fontSize: "1.7rem",
            fontWeight: 600,
            marginTop: "1%",
        },
        s2HeadingMobile: {
            color: "#1D2635",
            fontSize: "2.5rem",
            fontWeight: 600,
            marginTop: "5%",
        },
        s2Span: {
            color: "#000000",
        },
        Typo2: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "150%",
            color: "#667085",
            top: "15px",
            position: "relative",
            paddingBottom: "5%",
            textAlign: "center"
        },
        Typo2Mobile: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "150%",
            color: "#667085",
            top: "15px",
            position: "relative",
            paddingBottom: "5%"
        },
        btn: {
            width: "80%",
            marginBottom: "3%",
            height: "70px",
            justifyContent: "flex-start",
            boxShadow: "-1px 3px 8px rgba(126, 126, 126, 0.14)",
            border: 0,
        },
        btnMobile: {
            width: "80%",
            marginBottom: "3%",
            height: "70px",
            justifyContent: "flex-start",
            textAlign: "center",
            border: 0,
            boxShadow: "-1px 3px 8px rgba(126, 126, 126, 0.14)"
        },
        Typo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%",
        },
        marginTypo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%",
            marginTop: "20%",
            marginBottom: "5%"
        },
        mainContainer: {
            margin: 0,
            padding: 0,
            //overflowY: "hidden"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "center"
        },
        cardBody: {
            fontSize: "16px",
            fontWeight: 300,
            color: "#1D2635",
            fontFamily: "Open Sans",
            textAlign: "center"
        },
        cardImage: {
            textAlign: "center"
        },
        card: {
            background: "transparent",
            boxShadow: "none"
        },
        servicesBtn: {
            backgroundColor: "#F7B614",color: "#FFFFFF",borderRadius: "56px"
        },
        links: {
            textDecoration: "none"
        },
        sectionHeaderText: {
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "Open Sans",
            marginBottom: "5%"
        },
        line: {
            height: "3px !important",
            backgroundColor: "#000",
            border: "none",
            marginTop: 0,
            opacity: 1,
            width: "15%"
        },
        foodDevSubheading: {
            fontSize: "1.5rem",
            fontFamily: "PT Sans",
            fontWeight: 700,
            marginTop: "2%"
        },
        foodDevSubheadingMobile: {
            fontSize: "1.5rem",
            fontFamily: "PT Sans",
            fontWeight: 700,
            marginTop: "5%",
            marginBottom: "5%"
        },
        pOrderBtn: {
            border: "1.21951px solid #B6B6B6",
            color: "#1D2635",
            marginTop: "2%"
        },
        driverGetStarted: {
            color: "#FFF",
            borderRadius: "97.561px",
            background: "#F7B614"
        },
        paragraph: {
            fontStyle: "16px",
            fontWeight: 300,
            color: "#1D2635",
            paddingBottom: "5%",
            fontFamily: "Open Sans"
        },
        paragraphHeader: {
            fontFamily: "PT Sans",
            fontSize: "1.5rem",
            color: "#1D2635"
        }
    }),
);

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  

export const Section2: React.FC = function Section2() {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };
    
    return (
        <>
            {isMatchMedium?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Container maxWidth="lg">
                        <Typography style={{textAlign: "center"}}>
                            <Typography style={{marginTop: "5%"}}>
                                Contact us
                            </Typography>
                            <Typography variant="h2" className={classes.s2Heading}>
                                We’d love to hear from you
                            </Typography>
                            <Typography>
                                Our friendly team is always here to chat.
                            </Typography>
                        </Typography>
                        <Grid container spacing={2} className={classes.root} alignContent="center" alignItems="center" style={{justifyContent: "center"}}>
                            <Grid item xs={10} sm={6} md={4}>
                                <Card className={`${classes.card}`}>
                                    <CardMedia
                                        className={classes.cardImage}
                                        image="/Images/ContactEmail.png"
                                        title="lightbluetruck"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Email
                                        </Typography>
                                        <Typography className={classes.cardBody}>
                                            Our friendly team is here to help.
                                        </Typography>
                                        <Typography >
                                            urgedinternational@gmail.com
                                        </Typography>
                                    </CardContent>
                                </Card>  
                            </Grid>
                            <Grid item xs={10} sm={6} md={4}>
                                <Card className={`${classes.card}`}>
                                    <CardMedia
                                        className={classes.cardImage}
                                        image="/Images/ContactOffice.png"
                                        title="lightbluetruck"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Office
                                        </Typography>
                                        <Typography className={classes.cardBody}>
                                            Come say hello at our office HQ.
                                        </Typography>
                                        <Typography >
                                            77 Manchester Ave, May Pen
                                        </Typography>
                                    </CardContent>
                                </Card> 
                            </Grid>
                            <Grid item xs={10} sm={12} md={4}>
                                <Card className={`${classes.card}`}>
                                    <CardMedia
                                        className={classes.cardImage}
                                        image="/Images/ContactPhone.png"
                                        title="lightbluetruck"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Phone
                                        </Typography>
                                        <Typography className={classes.cardBody}>
                                            Mon-Fri from 8am to 5pm.
                                        </Typography>
                                    </CardContent>
                                </Card>  
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            :
                <></>

            }

            {isMatch?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Container maxWidth="lg">
                        <Typography style={{textAlign: "center"}}>
                            <Typography>
                                Contact us
                            </Typography>
                            <Typography variant="h2" className={classes.s2Heading}>
                                We’d love to hear from you
                            </Typography>
                            <Typography>
                                Our friendly team is always here to chat.
                            </Typography>
                        </Typography>
                    </Container>
                </Container>
            :
                <></>

            }
            <style>
                {`
                    
                `}
            </style>
        </>
    )
}