import { makeStyles, createStyles, Typography, Theme, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Header2 } from '../../Components/Header2';
import { HeaderRight } from './Comp/HeaderRight';
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));
//Import Components


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: "100%",
            height: 95,
            position: "fixed",
            bottom: 0,
            zIndex: 1000
          },
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
        linkStyle: {
            display: "inline-block",
            marginRight: "3%",
            color: "#7A7A7B"
        },
        list: {
            width: 250,
          },
          fullList: {
            width: 'auto',
          },
          parahHead :{
            fontWeight: 700
          }
    }),
);

export const PrivacyPolicyScreen: React.FC = function PrivacyPolicyScreen() {
    const classes = useStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
      
    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" >
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1} className={classes.main}>
                        <Grid item xs={8} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderLeft />
                        </Grid>
                        <Grid item xs={4} style={{marginBottom: "2%", marginTop: "1%", background: "transparent"}}>
                            <HeaderRight />
                        </Grid>
                            <Grid item xs={12} style={{marginBottom: "1%", marginTop: "1%", background: "transparent"}}>
                                <Typography variant='h5' className={classes.parahHead}>
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography>
                                <span className={classes.parahHead}>I - WHAT DO WE DO WITH YOUR INFORMATION?</span><br /><br />

                                Whenever you purchase something from UrgedInternational, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.<br />

                                When you browse our website, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.<br />

                                Email marketing: We may also send you emails about our website, new offerings and other updates.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>II - CONSENT</span> <br /><br />

                                How do you get my consent?<br /><br />

                                When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or arrange for a refund, we imply that you consent to our collecting it and using it for that specific reason only.<br />

                                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.<br /><br />
                                
                                How do I withdraw my consent?<br /><br />

                                If after you opt-in, you change your mind, you may withdraw your 
                                consent for us to contact you, for the continued collection, use 
                                or disclosure of your information, at anytime, by contacting us at 
                                wecare@urgedinternational.com or mailing us at: UrgedInternational, 
                                77 Manchester Ave, May Pen, Jamaica
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>III - DISCLOSURE</span> <br /><br />

                                We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>IV - PAYMENT</span> <br /><br />

                                UrgedInternational does not store your credit card data. Your credit card data and collected and stored by our payment processors, WiPay.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>V - THIRD-PARTY SERVICES</span> <br /><br />

                                In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.<br />

                                However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.<br />

                                For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.<br />

                                In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.<br />

                                As an example, if you are located in Jamaica and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.<br />

                                Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.<br />

                                Links<br />

                                When you click on particular links on our storefront, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>VI - SECURITY</span> <br /><br />

                                To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.<br />

                                If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL). Although no method of transmission over the Internet or electronic storage is 100% secure, we do make serious effort to implement generally accepted industry standards.<br />

                                COOKIES<br />
                                We do use cookies in an attempt to improve the customer experience. You can choose whether you want to opt-out of cookies.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>VII - AGE OF CONSENT</span> <br /><br />

                                By using this site, you represent that you are at least the age of majority in your state or province or country of residence, or that you are the age of majority in your state or province or country of residence and you have given us your consent to allow any of your minor dependents to use this site.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>VIII - APP PERMISSIONS</span> <br /><br />

                                Location Permission Declaration:<br /><br />

                                ACCESS_FINE_LOCATION<br />
                                Above permission is used for access location after allowing the user for accurate delivery location of customer. Location service is used under the privacy policy of Google Play Developer Program Policies. We don’t share any type of location data or customer information for any additional resources. we ensure to the customer for safe and accurate delivery with privacy taking under an authorization is appropriately secure and under the law of google consents.<br />

                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>IX - CHANGES TO THIS PRIVACY POLICY</span> <br /><br />

                                We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If our website is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>QUESTIONS AND CONTACT INFORMATION</span><br /><br /> If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact us at <a href='mailto:wecare@urgedinternational.com'>wecare@urgedinternational.com</a> or by mail at<br />
                                UrgedInternational<br />
                                77 Manchester Ave,<br />
                                May Pen,<br />
                                Jamaica
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
            <style>
                {
                    `
                        @media only screen and (min-width: 768px){
                            .showOnMobile{
                                display: none;
                            }
                        }

                        @media only screen and (max-width: 768px){
                            .hideOnMobile{
                                display: none;
                            }
                        }
                    `
                }
            </style>
            
        </>
    )
}
