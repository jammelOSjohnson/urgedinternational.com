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
            padding: "0 0 5% 0",
            background: "#F9FAFB"
        },
        heroBackground2Inner: {
            marginTop: "5%",
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
            borderRadius: "46px"
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
                    Frequently asked questions
                </Typography>
                <Typography className={classes.heroText2}>
                    Everything you need to know about the product and billing.
                </Typography>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Is there a free trial available?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized<br />
                            30-minute onboarding call to get you up and running as soon as possible.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Can I change my plan later?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ...
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography className={classes.heading}>What is your cancellation policy?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ...
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                    >
                    <Typography className={classes.heading}>Can other info be added to an invoice?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ...
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                    >
                    <Typography className={classes.heading}>How is pricing calculated?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ...
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accord}>
                    <AccordionSummary
                    expandIcon={<img src="Images/expandIcon.png" alt="expandIcon" />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                    >
                    <Typography className={classes.heading}>How do I change my account email?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        ...
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
                        <Button className={classes.btn}>
                            Get In Touch
                        </Button>
                    </Typography>
                </Container>
            </Container>
        </>
    )
}