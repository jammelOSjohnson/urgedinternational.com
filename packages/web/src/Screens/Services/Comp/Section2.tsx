import React, { useState } from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Button, useMediaQuery, useTheme, AppBar, Tabs, Box, Tab, FormControl, InputLabel, OutlinedInput} from '@material-ui/core';
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0%",
            "& .MuiFormLabel-root": {
                color: "#000"
            },
            "&.MuiFormLabel-root.Mui-focused": {
                  color: "#000"
            },
            "& .MuiInputBase-root": {
                color: "#000"
            },
            "& .MuiOutlinedInput-root": {
                border: "0.1px solid #EEE",
                color: "#000000 !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            color: "#000"
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
        },
        firstTextField: {
            marginBottom: "3%",
            width: "100%",
            borderRadius: "30px",
            border: "0.1px solid #EEE",
            borderColor: "#EEEEEE",
            height: "57px"
        },
        doneBtn: {
            marginTop: "3%",
            backgroundColor: "#F7B614",
            borderRadius: "30px",
            color: "#FFF",
            height: "50px"
        }
    }),
);

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

interface State {
    fullname: string;
    businessname: string;
    businessemail: string;
    contact: string;
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

    const [values, setValues] = React.useState<State>({
        fullname: '',
        businessname: '',
        businessemail: '',
        contact: '',
    });

    const [value, setValue] = React.useState(0);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    const handleMerchantChange = (currentStep: string) => {
        if(currentStep === 'step1'){
            setStep1(false);
            setStep3(false);
            setStep2(true);
            return;
        }else if(currentStep === 'step2'){
            setStep1(false);
            setStep2(false);
            setStep3(true);
            return;
        }else{
            return;
        }
    }

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    
    return (
        <>
            {isMatchMedium?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Container maxWidth="lg">
                        <Typography variant="h2" className={classes.s2Heading} style={{marginBottom: "3%"}}>
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
                            <Tab label="Customers" {...a11yProps(0)} />
                            <Tab label="Drivers" {...a11yProps(1)} />
                            <Tab label="Merchants" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={12}>
                                            <Typography className={classes.sectionHeaderText}>
                                                Our Services
                                                <hr className={classes.line}/>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="Images/ServicesP1.png" alt="ServicesP1" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <img src="Images/FoodDeliveryServiceAlt.png" alt="FoodDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Food Delivery
                                            </Typography>
                                            <Typography className={classes.foodDevSubheading}>
                                                Get your favourite meal<br />wherever you are.
                                            </Typography>
                                            <Typography>
                                                We deliver from your favorite local restaurant to your<br/>door.
                                            </Typography>
                                            <a className={classes.links} href="/Restaurants" title="Restaurants">
                                                <Button
                                                    className={classes.pOrderBtn}
                                                    variant="outlined"
                                                    endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn2" />}
                                                >
                                                    Place Order 
                                                </Button>
                                            </a>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <img src="Images/GroceryDeliveryServiceAlt.png" alt="GroceryDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Online Grocery
                                            </Typography>
                                            <Typography className={classes.foodDevSubheading}>
                                                Benefit from amazing deals<br />
                                                and offers when you shop<br />
                                                grocery with us.
                                            </Typography>
                                            <Typography>
                                                You stay home and let the grocery come to you.<br />
                                                We got you covered.
                                            </Typography>
                                            <a className={classes.links} href="https://sallyspantry.com/" target="_blank" rel="noreferrer" title="Sally's Pantry">
                                                <Button
                                                    className={classes.pOrderBtn}
                                                    variant="outlined"
                                                    endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn3" />}
                                                >
                                                    Shop Sallyspantry 
                                                </Button>
                                            </a>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="Images/ServicesP2.png" alt="ServicesP2" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <img src="Images/ServicesP3.png" alt="ServicesP3" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <img src="Images/PackageDeliveryServiceAlt.png" alt="PackageDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Urged Express
                                            </Typography>
                                            <Typography className={classes.foodDevSubheading}>
                                                We deliver packages of all<br />
                                                types.
                                            </Typography>
                                            <Typography>
                                                On-demand delivery solution that helps you to<br />
                                                send various packages to your family, business<br />
                                                partners and friends. 
                                            </Typography>
                                            <Button
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn4" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <img src="Images/PackageDeliveryServiceAlt.png" alt="PackageDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Errand Solution
                                            </Typography>
                                            <Typography className={classes.foodDevSubheading}>
                                                Ditch the hastle of joining<br />
                                                long lines to complete your<br />
                                                transactions.
                                            </Typography>
                                            <Typography>
                                                Let us Pay Bills, Complete Banking &amp; Tax office
                                                <br />Transactions on your behalf. 
                                            </Typography>
                                            <Button
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn5" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                <img src="Images/MarketPlaceServiceAlt.png" alt="MarketPlaceServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Urged Market Place
                                            </Typography>
                                            <Typography className={classes.foodDevSubheading}>
                                                Get your favourite meal<br />
                                                where ever you are.
                                            </Typography>
                                            <Typography>
                                                We deliver from your favorite local restaurant to<br />
                                                your door. 
                                            </Typography>
                                            <Button
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn6" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={6}>
                                            <Typography
                                                style={{width: "100%", paddingTop: "1%", position: "absolute", top: 0, marginBottom: 0}}
                                                className={classes.sectionHeaderText}>
                                                Deliver &amp; Earn With Urged
                                            </Typography>
                                            <img src="Images/RiderPic.png" alt="rider" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className={classes.paragraphHeader}>The Process</Typography>
                                            <Typography className={classes.paragraph}>
                                                We are always looking for Drivers/Riders to join our team, to deliver various packages for our diverse delivery system.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                We are looking for a reliable delivery driver/riders who is concerned
                                                 with customer satisfaction and transporting items in a safe, timely manner. 
                                                 The delivery driver will pick up and drop off items while adhering to customer 
                                                 directions and time schedules. You should be willing to work as part of the delivery
                                                  team in order to ensure that the items are complete, packed correctly, and safely delivered 
                                                  to the correct client.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                To succeed as a delivery driver, you should be polite and prompt with a commitment
                                                 to providing our clients with an excellent experience. You should be thorough in
                                                  ensuring orders are properly fulfilled, committed to work safety, and passionate
                                                   about satisfying clients.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Work when you can, and be the boss of your own time.
                                            </Typography>
                                            <a href="https://4b3pfykc7ix.typeform.com/to/bvlER1PD" target="_blank"  rel="noreferrer" title="Rider Form" className={classes.links}>
                                                <Button
                                                    className={classes.driverGetStarted}
                                                    variant="contained"

                                                >
                                                    Get Started
                                                </Button>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={6}>
                                            <Typography
                                                style={{width: "100%", paddingTop: "1%", position: "absolute", top: 0, marginBottom: 0}}
                                                className={classes.sectionHeaderText}>
                                                Partner With Urged
                                            </Typography>
                                            <img src="Images/ServicesMechant.png" alt="Merchant" />
                                        </Grid>
                                        {step1 && <Grid item xs={6}>
                                            <Typography className={classes.paragraphHeader}>Grow With Us!</Typography>
                                            <Typography className={classes.paragraph}>
                                                Let us help you reach more people and provide hastle free engagements with your customers and business partners.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Lorem ipsum dolor sit amet, consectetur
                                                 adipiscing elit. Posuere ut leo at parturient 
                                                 arcu faucibus tincidunt. Varius blandit egestas mauris hac dui. 
                                                 Pellentesque euismod malesuada elementum nulla eget nunc tortor 
                                                 dolor. Arcu quisque sed sed sit. Id gravida pulvinar lacus porta ut in. 
                                                 Nunc nunc ut lectus mus vel fusce.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Lectus donec suscipit pellentesque diam convallis. Lorem justo, lacinia
                                                 amet ac tincidunt quam diam. Dui tortor augue dolor ornare fermentum.
                                                  Id tellus massa et ac commodo. Quisque et in dignissim hac justo dolor iaculis.
                                                   Integer pellentesque auctor diam ullamcorper eu porta mauris. Pulvinar 
                                                   in integer eu fames felis, elit. Amet proin iaculis nec egestas elit 
                                                   suspendisse morbi mi, dolor. Ipsum purus sit pulvinar non augue amet. 
                                            </Typography>
                                            <Button
                                                className={classes.driverGetStarted}
                                                variant="contained"
                                                onClick={(e) =>handleMerchantChange('step1')}
                                            >
                                                Get Started
                                            </Button>
                                        </Grid>
                                        }
                                        {step2 &&
                                            <Grid item xs={6}>
                                                <Typography style={{fontSize: "1rem", fontWeight: 400}}>Get Started</Typography>
                                                <Typography>
                                                    Let us help you reach more people 
                                                    and provide hastle free engagements with 
                                                    your customers and business partners.
                                                </Typography> 
                                                <form>
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel htmlFor="fullname" className={classes.root}>Full Name</InputLabel>
                                                        <OutlinedInput 
                                                            className={clsx(classes.firstTextField, classes.root)}
                                                            id="fullname"
                                                            type="text"
                                                            value={values.fullname}
                                                            onChange={handleChange2('fullname')}
                                                            labelWidth={103}
                                                            required={true}
                                                            notched={true}
                                                            fullWidth
                                                        />
                                                    </FormControl>
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel htmlFor="businessname" className={classes.root}>Business Name</InputLabel>
                                                        <OutlinedInput 
                                                            className={clsx(classes.firstTextField, classes.root)}
                                                            id="businessname"
                                                            type="text"
                                                            value={values.businessname}
                                                            onChange={handleChange2('businessname')}
                                                            labelWidth={103}
                                                            required={true}
                                                            notched={true}
                                                            fullWidth
                                                        />
                                                    </FormControl>
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel htmlFor="businessemail" className={classes.root}>Business Email</InputLabel>
                                                        <OutlinedInput 
                                                            className={clsx(classes.firstTextField, classes.root)}
                                                            id="businessemail"
                                                            type="text"
                                                            value={values.businessemail}
                                                            onChange={handleChange2('businessemail')}
                                                            labelWidth={103}
                                                            required={true}
                                                            notched={true}
                                                            fullWidth
                                                        />
                                                    </FormControl>
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel htmlFor="contact" className={classes.root}>Contact Details</InputLabel>
                                                        <OutlinedInput 
                                                            className={clsx(classes.firstTextField, classes.root)}
                                                            id="contact"
                                                            type="text"
                                                            value={values.contact}
                                                            onChange={handleChange2('contact')}
                                                            labelWidth={103}
                                                            required={true}
                                                            notched={true}
                                                            fullWidth
                                                        />
                                                    </FormControl>
                                                    <Button fullWidth variant="outlined" className={classes.doneBtn}>Done</Button>
                                                </form>
                                            </Grid>
                                        }
                                    </Grid>
                                </Container>
                            </TabPanel>
                        </SwipeableViews>
                    </Container>
                </Container>
            :
                <></>

            }

            {isMatch?
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
                            <Tab label="Customers" {...a11yProps(0)} />
                            <Tab label="Drivers" {...a11yProps(1)} />
                            <Tab label="Merchants" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={12}>
                                            <Typography>
                                                <img src="Images/FoodDeliveryServiceAlt.png" alt="FoodDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Food Delivery
                                            </Typography>
                                            <Typography className={classes.foodDevSubheadingMobile}>
                                                Get your favourite meal<br />wherever you are.
                                            </Typography>
                                            <Typography>
                                                We deliver from your favorite local restaurant to your door.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img width="100%" src="Images/ServicesP1.png" alt="ServicesP1" />
                                            <a className={classes.links} href="/Restaurants" title="Restaurants">
                                                <Button
                                                    style={{
                                                        borderRadius: "47px",
                                                        width: "100%",
                                                        height: "50px",
                                                        marginTop: "15%",
                                                        marginBottom: "15%"
                                                    }}
                                                    className={classes.pOrderBtn}
                                                    variant="outlined"
                                                    endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn2" />}
                                                >
                                                    Place Order 
                                                </Button>
                                            </a>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <img src="Images/GroceryDeliveryServiceAlt.png" alt="GroceryDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Online Grocery
                                            </Typography>
                                            <Typography className={classes.foodDevSubheadingMobile}>
                                                Benefit from amazing deals<br />
                                                and offers when you shop<br />
                                                grocery with us.
                                            </Typography>
                                            <Typography>
                                                You stay home and let the grocery come to you. 
                                                We got you covered.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img width="100%" src="Images/ServicesP2.png" alt="ServicesP2" />
                                            <a className={classes.links} href="https://sallyspantry.com/" target="_blank" rel="noreferrer" title="Sally's Pantry">
                                                <Button
                                                    style={{
                                                        borderRadius: "47px",
                                                        width: "100%",
                                                        height: "50px",
                                                        marginTop: "15%",
                                                        marginBottom: "15%"
                                                    }}
                                                    className={classes.pOrderBtn}
                                                    variant="outlined"
                                                    endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn3" />}
                                                >
                                                    Shop Sallyspantry 
                                                </Button>
                                            </a>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <img src="Images/PackageDeliveryServiceAlt.png" alt="PackageDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Urged Express
                                            </Typography>
                                            <Typography className={classes.foodDevSubheadingMobile}>
                                                We deliver packages of all<br />
                                                types.
                                            </Typography>
                                            <Typography>
                                                On-demand delivery solution that helps you to 
                                                send various packages to your family, business 
                                                partners and friends. 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img width="100%" src="Images/ServicesP3.png" alt="ServicesP3" />
                                            <Button
                                                style={{
                                                    borderRadius: "47px",
                                                    width: "100%",
                                                    height: "50px",
                                                    marginTop: "15%",
                                                    marginBottom: "15%"
                                                }}
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn4" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <img src="Images/PackageDeliveryServiceAlt.png" alt="PackageDeliveryServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Errand Solution
                                            </Typography>
                                            <Typography className={classes.foodDevSubheadingMobile}>
                                                Ditch the hastle of joining<br />
                                                long lines to complete your<br />
                                                transactions.
                                            </Typography>
                                            <Typography>
                                                Let us Pay Bills, Complete Banking &amp; Tax office 
                                                Transactions on your behalf. 
                                            </Typography>
                                            <Button
                                                style={{
                                                    borderRadius: "47px",
                                                    width: "100%",
                                                    height: "50px",
                                                    marginTop: "15%",
                                                    marginBottom: "15%"
                                                }}
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn5" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                <img src="Images/MarketPlaceServiceAlt.png" alt="MarketPlaceServiceAlt" />
                                                &nbsp;&nbsp;&nbsp;
                                                Urged Market Place
                                            </Typography>
                                            <Typography className={classes.foodDevSubheadingMobile}>
                                                Get your favourite meal<br />
                                                where ever you are.
                                            </Typography>
                                            <Typography>
                                                We deliver from your favorite local restaurant to 
                                                your door. 
                                            </Typography>
                                            <Button
                                                style={{
                                                    borderRadius: "47px",
                                                    width: "100%",
                                                    height: "50px",
                                                    marginTop: "15%",
                                                    marginBottom: "15%"
                                                }}
                                                className={classes.pOrderBtn}
                                                variant="outlined"
                                                endIcon={<img src="Images/PlaceOrderBtnEnd.png" alt="place order btn6" />}
                                            >
                                                Comming Soon 
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={12}>
                                            <Typography
                                                style={{
                                                    paddingTop: "1%",marginBottom: 1,
                                                    textAlign: "center"
                                                }}
                                                className={classes.sectionHeaderText}>
                                                Deliver &amp; Earn With Urged
                                            </Typography>
                                            <img src="Images/RiderPic.png" width="100%" alt="rider" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.paragraphHeader}>The Process</Typography>
                                            <Typography className={classes.paragraph}>
                                                We are always looking for Drivers/Riders to join our team, to deliver various packages for our diverse delivery system.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                We are looking for a reliable delivery driver/riders who is concerned
                                                 with customer satisfaction and transporting items in a safe, timely manner. 
                                                 The delivery driver will pick up and drop off items while adhering to customer 
                                                 directions and time schedules. You should be willing to work as part of the delivery
                                                  team in order to ensure that the items are complete, packed correctly, and safely delivered 
                                                  to the correct client.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                To succeed as a delivery driver, you should be polite and prompt with a commitment
                                                 to providing our clients with an excellent experience. You should be thorough in
                                                  ensuring orders are properly fulfilled, committed to work safety, and passionate
                                                   about satisfying clients.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Work when you can, and be the boss of your own time.
                                            </Typography>
                                            <a href="https://4b3pfykc7ix.typeform.com/to/bvlER1PD" target="_blank"  rel="noreferrer" title="Rider Form" className={classes.links}>
                                                <Button
                                                    className={classes.driverGetStarted}
                                                    variant="contained"
                                                    style={{width: "100%"}}
                                                >
                                                    Get Started
                                                </Button>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <Container maxWidth="xl" className={classes.mainContainer}>
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                                        <Grid item xs={12}>
                                            <Typography
                                                style={{ paddingTop: "1%", marginBottom: 0}}
                                                className={classes.sectionHeaderText}>
                                                Partner With Urged
                                            </Typography>
                                            <img src="Images/ServicesMechant.png" width="100%" alt="Merchant" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className={classes.paragraphHeader}>Grow With Us!</Typography>
                                            <Typography className={classes.paragraph}>
                                                Let us help you reach more people and provide hastle free engagements with your customers and business partners.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Lorem ipsum dolor sit amet, consectetur
                                                 adipiscing elit. Posuere ut leo at parturient 
                                                 arcu faucibus tincidunt. Varius blandit egestas mauris hac dui. 
                                                 Pellentesque euismod malesuada elementum nulla eget nunc tortor 
                                                 dolor. Arcu quisque sed sed sit. Id gravida pulvinar lacus porta ut in. 
                                                 Nunc nunc ut lectus mus vel fusce.
                                            </Typography>
                                            <Typography className={classes.paragraph}>
                                                Lectus donec suscipit pellentesque diam convallis. Lorem justo, lacinia
                                                 amet ac tincidunt quam diam. Dui tortor augue dolor ornare fermentum.
                                                  Id tellus massa et ac commodo. Quisque et in dignissim hac justo dolor iaculis.
                                                   Integer pellentesque auctor diam ullamcorper eu porta mauris. Pulvinar 
                                                   in integer eu fames felis, elit. Amet proin iaculis nec egestas elit 
                                                   suspendisse morbi mi, dolor. Ipsum purus sit pulvinar non augue amet. 
                                            </Typography>
                                            <Button
                                                className={classes.driverGetStarted}
                                                variant="contained"
                                                style={{width: "100%"}}

                                            >
                                                Get Started
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </TabPanel>
                        </SwipeableViews>
                    </Container>
                </Container>
            :
                <></>

            }
            <style>
                {`
                    .MuiButtonBase-root:hover {
                        background-color: #F7B614;
                    }

                    .MuiTab-textColorPrimary.Mui-selected {
                        background-color: #F7B614;
                        color: #FFF;
                        border-radius: 50px;
                    }

                    .MuiPaper-elevation4 {
                        box-shadow: none !important;
                    }

                    .MuiTabs-flexContainer {
                        height: 50px;
                    }

                    .MuiTabs-indicator{
                        background-color: transparent;
                    }

                    .MuiTabs-scroller{
                        background-color: #FFF;
                    }

                    .MuiTab-root{
                        font-size: 1.125rem;
                    }
                `}
            </style>
        </>
    )
}


