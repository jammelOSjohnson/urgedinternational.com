import React, { useState } from 'react';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme, Accordion, AccordionSummary, AccordionDetails, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        heroText1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            paddingTop: "5%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText2: {
            fontSize: '20px',
            fontWeight: 400,
            paddingTop: "2%",
            paddingBottom: "2%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText3: {
            fontSize: '1.7rem',
            fontWeight: 700,
            paddingTop: "5%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText4: {
            fontSize: '20px',
            fontWeight: 400,
            paddingTop: "2%",
            paddingBottom: "2%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroSubText: {
            fontSize: '6vh',
            color: "#F7B614",
        },
        heroBackground: {
            background: "#F9FAFB",
            padding: 0,
        },
        heroBackground2: {
            paddingTop: "5%",
            padding: "0 0 5% 0",
            background: "#F9FAFB"
        },
        heroBackground2Inner: {
            padding: "0 0 5% 0",
            background: "#FFFFFF",
            width: "90%",
            borderRadius: "16px" 
        },
        heroTruckIcon: {
            paddingTop: "2.5%"
        },
        heroSocialIcons: {
            paddingTop: "10%",
            paddingBottom: "5%"
        },
        heroTextMargin: {
            marginLeft: "auto",
            marginRight: "auto",
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        accord: {
            width: "70%", 
            marginLeft: "auto !important", 
            marginRight: "auto !important",
            borderLeft: 0,
            borderRight: 0,
            background: "#F9FAFB"
        },
        btn: {
            color: "#FFFFFF",
            backgroundColor: "#F7B614",
            borderRadius: "46px",
            width: "130px",
            height: "44px"
        },
        links: {
            textDecoration: "none"
        }
    }),
);

export const Section7: React.FC = function Section7() {
    const classes = useStyles();
    const [expand1, setExpand1] = useState(false);
    const [expand2, setExpand2] = useState(false);
    const [expand3, setExpand3] = useState(false);
    const [expand4, setExpand4] = useState(false);
    const [expand5, setExpand5] = useState(false);
    const [expand6, setExpand6] = useState(false);
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <Typography className={classes.heroText1}>
                    Need Help?
                </Typography>
                <Typography className={classes.heroText2}>
                    {/* Everything you need to know about the product and billing. */}
                </Typography>
                {/* <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Cancel my order</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can cancel an order in the app.
                            <br />
                            <br />
                            To cancel your order:<br />
                            1. Find and select your ongoing order.<br />
                            2. In the order tracking screen, tap "Cancel order".<br />
                            3. Follow the onscreen instructions to confirm the cancelation.<br />
                            <br />
                            <br />
                            Please note, if you cancel your order AFTER the merchant started preparing it, you 
                            may not be eligible for a refund.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>My order never arrived</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        If you didn't receive your order and it's been marked complete by the delivery 
                        person in the app, contact your delivery person directly by tapping <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>Contact Us</a> then 
                        follow the on-screen prompts.
                        <br />
                        <br />
                        You can also call us via <a target="_blank" href="tel:8769601004" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>876 773 5015</a> for help.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography className={classes.heading}>I received someone else's order</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        If you received someone else's order and were delivered the wrong items, 
                        but were charged for your order please let us know here. We'll review and 
                        make any necessary adjustments; be sure to include the missing/incorrect 
                        items, and how much you were charged for each.
                        <br />
                        <br />
                        To speak to someone immediately, please reach out to your local <a target="_blank" href="tel:8769601004" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>876 773 5015</a> for help.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    >
                    <Typography className={classes.heading}>I had a food safety issue with my order</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Merchants and delivery people are expected to adhere to food safety regulations and 
                        industry best practices when preparing or otherwise handling your order.
                        <br />
                        <br />
                        Please <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>Contact</a> Us if your order:<br />
                        - Did not follow the allergy or dietary restrictions you communicated<br />
                        - Posed a potential food safety risk<br />
                        - Resulted in a food-related illness or injury
                        <br />
                        <br />
                        We'll review the details of your issue and follow up accordingly. 
                        We may also need to inform the merchant of your report to help solve this issue.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                    >
                    <Typography className={classes.heading}>My order was damaged</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Restaurants and delivery partners do their best to package and deliver food safely and securely.
                    <br />
                    <br />
                        If your order arrived damaged in any way, please let us know <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>here</a>. 
                        We'll review your order and make adjustments as necessary. We're sorry your meal wasn't perfect!
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                    >
                    <Typography className={classes.heading}>My order is taking longer than expected</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Restaurants and delivery people do their best to deliver your food within the 
                        estimated delivery time, but external factors may cause delays (for example, if the 
                        restaurant is busier than normal, your order is a large order, there's unexpected traffic 
                        or bad weather conditions).
                        <br />
                        <br />
                        If your order is taking longer than expected, check your delivery person's ETA in the 
                        app or contact them directly for details.
                        <br />
                        <br />
                        NOTE: If your delivery person arrived, attempted to contact you, and could not 
                        deliver the order, you are charged for the order. In these instances, we cannot 
                        provide a refund.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel6a-content"
                    id="panel7a-header"
                    >
                    <Typography className={classes.heading}>Food damage or quality issue</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        We're sorry the food you received didn't meet your expectations. You'll have the 
                        opportunity to rate each item in your order so you can give specific feedback about 
                        each dish. Your ratings are an important way for Urged International to ensure that we partner 
                        with only the highest quality restaurants.
                        <br />
                        <br />
                        If you believe the food you received was unacceptable, please <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>share</a> a few details 
                        about what was wrong so our team can help.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel6a-content"
                    id="panel8a-header"
                    >
                    <Typography className={classes.heading}>Report a serious incident with a delivery person</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        This page is for reporting severe behaviours; extreme words or actions that have 
                        caused you harm or extreme discomfort, or material loss.
                        <br />
                        <br />
                        If you want to report rude behaviour, please click <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>here</a>.
                        <br />
                        <br />
                        Thank you for taking the time to report this incident. Keeping you and other users 
                        safe on the platform is a top priority for Urged International.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel6a-content"
                    id="panel8a-header"
                    >
                    <Typography className={classes.heading}>Report a safety incident involving a delivery person</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        We take reported safety incidents very seriously. Any behavior involving violence, 
                        sexual misconduct, or illegal activity is explicitly prohibited in Urged International's Community 
                        Guidelines.
                        <br />
                        <br />
                        If you had an uncomfortable or unsafe experience with a delivery person, please let 
                        us know by filling out the <a target="_blank" href="/ContactUs" title="Contact Us" className={classes.links} style={{color: "#F7B614"}}>form</a>. A member of our safety team will review your 
                        report and will follow up if additional information is needed.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
            <Container maxWidth="xl" className={classes.heroBackground2}>
                <Container maxWidth="lg" className={classes.heroBackground2Inner}>
                    <Typography className={classes.heroText3}>
                        Still have questions?
                    </Typography>
                    <Typography className={classes.heroText4}>
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </Typography>
                    <Typography style={{textAlign: "center"}}>
                        <a href="/ContactUs" target="_blank" title="Contact Us" className={classes.links}>
                            <Button className={classes.btn}>
                                Get In Touch
                            </Button>
                        </a>
                    </Typography>
                </Container>
            </Container>
            <style>
                {
                    `
                        .MuiButtonBase-root:hover {
                            background-color: #F7B614;
                        }
                    `
                }
            </style>
        </>
    )
}