import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Button, useMediaQuery, useTheme, AppBar, Tabs, Box, Tab} from '@material-ui/core';
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';

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
            marginTop: "10%",
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
                        <Typography variant="h2" className={classes.s2Heading}>
                            From essential services to earning<br />
                            opportunities. We're an all-in-one<br />
                            platform.
                        </Typography>
                        <AppBar position="static" color="default">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                            Item One
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                            </TabPanel>
                        </SwipeableViews>
                    </Container>
                </Container>
            :
                <></>

            }

            {isMatch?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={9}>
                            <Typography style={{textAlign:"center"}}>
                                <Typography variant="h2" className={classes.s2HeadingMobile}>
                                    No more long line
                                    <br/> waiting headaches
                                </Typography>
                            </Typography>
                            <br />
                            <Typography style={{textAlign:"center"}}>
                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                    <Button 
                                        variant="outlined" color="default"
                                        startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                        className={classes.btnMobile}
                                    >
                                        Food Delivery
                                    </Button>
                                </a>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <a className={classes.links} href="/" title="Comming Soon">
                                    <Button 
                                        variant="outlined" color="default"
                                        startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                        className={classes.btnMobile}
                                    >
                                        Package pick-up &amp; Drop-off
                                    </Button>
                                </a>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <a className={classes.links} href="/" title="Comming Soon">
                                    <Button 
                                        variant="outlined" color="default"
                                        startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                        className={classes.btnMobile}
                                    >
                                        Errand solution
                                    </Button>
                                </a>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <a className={classes.links} href="/" title="Comming Soon">
                                    <Button 
                                        variant="outlined" color="default"
                                        startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                        className={classes.btnMobile}
                                    >
                                        Online Grocery Shopping
                                    </Button>
                                </a>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Link className={classes.links} to="/" title="Our Services">
                                    <Button
                                        className={classes.servicesBtn}  
                                        variant="contained"
                                        endIcon={ <img src="Images/GetStartedIcon.png" style={{width: "50%"}} alt="google icon"/>}  
                                        type="button"
                                    >
                                        Our Services
                                    </Button>
                                </Link>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Typography className={classes.Typo2Mobile}>
                                    Ease your everyday life, by allowing
                                    <br />us to take care of all your errands and delivery services for you.
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            :
                <></>

            }
            
        </>
    )
}