import { LiveChatWidget } from '@livechat/widget-react';
import { makeStyles, createStyles, Typography, Theme, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
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

export const TermsOfServiceScreen: React.FC = function TermsOfServiceScreen() {
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
                                    Terms of Service
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography>
                                    Please read the terms and conditions ("Terms and Conditions") 
                                    set out below carefully before ordering any Goods or Services from 
                                    this Website. By ordering any Goods or Services from this Website, 
                                    by phone, or by our mobile applications you agree to be bound by 
                                    these Terms and Conditions.
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>1: Introduction</span><br /><br />
                                    We are UrgedInternational, a brand of https://urgedservices.com, unless 
                                    otherwise stated.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>2: Definitions</span> <br /><br />

                                2.1. "Agreement" is a reference to these Terms and Conditions, 
                                the Privacy Policy, any order form and payment instructions 
                                provided to you;<br /><br />

                                2.2. "Privacy Policy" means the policy displayed on our 
                                Website which details how we collect and store your personal 
                                data;<br /><br />

                                2.3. "you", "your" and "yours" are references to you the person 
                                accessing this Website and ordering any Goods or Services from 
                                the Website or from any other channel provided by UrgedInternational;<br/><br/>

                                2.4. "we", "us", "our", and "UrgedInternational" are references to the Company;<br/><br/>

                                2.5. "Goods" is a reference to any goods which we may offer for sale 
                                from our Website from time to time;<br/><br/>

                                2.6. "Service" or "Services" is a reference to any service which we may supply and which you may request via our Website;<br/><br/>

                                2.7. "Participating Restaurant" is a third party, which has agreed to 
                                co-operate with the Company to prepare and/or deliver the Goods or 
                                Services.<br/><br/>

                                2.8. "Food Delivery" is a reference to perishable goods and to any 
                                form of delivery service, which both are provided by our 
                                Participating Restaurants and for both of which our Participating 
                                Restaurants take full responsibility; and<br/><br/>

                                2.9. "Website" is a reference to our Website http://urgedservices.com 
                                or our mobile applications on which we offer our Goods or Services.                    
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>3: Ordering</span> <br /><br />
                                3.1. Any contract for the supply of Food Delivery from this Website is 
                                between you and the Participating Restaurant; for the supply of Goods 
                                or Services from this Website any contact is between you and UrgedInternational. 
                                You agree to take particular care when providing us with your details and warrant 
                                that these details are accurate and complete at the time of ordering. You also 
                                warrant that the credit or debit card details that you provide are for your own 
                                credit or debit card and that you have sufficient funds to make the payment.<br /><br />

                                3.2. Food Delivery, Goods and Services purchased from this Website are intended 
                                for your use only and you warrant that any Goods purchased by you are not for 
                                resale and that you are acting as principal only and not as agent for another 
                                party when receiving the Services.<br /><br />

                                3.3. Please note that some of our Goods may be suitable for certain age ranges only. 
                                You should check that the product you are ordering is suitable for the intended recipient.<br /><br />
                                3.4. When ordering from this Website you may be required to provide an e-mail address 
                                and password. You must ensure that you keep the combination of these details secure 
                                and do not provide this information to a third party.<br /><br />

                                3.5. We will take all reasonable care, in so far as it is in our power to do so, 
                                to keep the details of your order and payment secure, but in the absence of negligence 
                                on our part we cannot be held liable for any loss you may suffer if a third party 
                                procures unauthorized access to any data you provide when accessing or ordering 
                                from the Website.<br /><br />

                                3.6. Any order that you place with us is subject to product availability, delivery 
                                capacity and acceptance by us and the Participating Restaurant. When you place your 
                                order online, we will send you an email to confirm that we have received it. This 
                                email confirmation will be produced automatically so that you have confirmation of 
                                your order details. You must inform us immediately if any details are incorrect. 
                                The fact that you receive an automatic confirmation does not necessarily mean that 
                                either we or the Participating Restaurant will be able to fill your order. Once we 
                                have sent the confirmation email we will check availability and delivery capacity.<br /><br />

                                3.7. If the ordered Food Delivery and delivery capacity is available, the 
                                Participating Restaurant will accept the contract and confirm it to UrgedInternational. 
                                If the details of the order are correct, the contract for the Food Delivery, Goods or 
                                Services will be confirmed by text message (SMS).<br /><br />

                                3.8. In the case that Goods offered by UrgedInternational were ordered, UrgedInternational 
                                will confirm availability together with or separately from Food Delivery.

                                3.9. The confirmation message will specify delivery details including the approximate delivery 
                                time specified by the Participating Restaurant and confirm the price of the Food Delivery, 
                                Goods and Services ordered.<br /><br />

                                3.10. If the Food Delivery and/or Goods are not available or if there is no delivery capacity, we 
                                will also let you know by text message (SMS) or phone call.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>4: Prices and Payment</span> <br /><br />

                                4.1. Any contract for the supply of Food Delivery from this Website 
                                is between you and the Participating Restaurant; for the supply 
                                of Goods or Services from this Website any contact is between you 
                                and UrgedInternational. You agree to take particular care when 
                                providing us with your details and warrant that these details are 
                                accurate and complete at the time of ordering. You also warrant 
                                that the credit or debit card details that you provide are for 
                                your own credit or debit card and that you have sufficient funds 
                                to make the payment.<br /><br />

                                4.2. All prices listed on the Website are correct at the time of 
                                publication and have been input as received by the restaurant; 
                                While we give great care to keep them up to date, the final price 
                                charged to you by the restaurant can change at the time of delivery 
                                based on the latest menu and prices of the restaurant. We also 
                                reserve the right to alter the Goods or Services available for 
                                sale on the Website and to stop listing restaurants, Goods or 
                                Services.<br /><br />

                                4.3. All prices listed on the Website for Food Delivery by the 
                                Participating Restaurant reflect the price the Participating 
                                Restaurant charges at the time of listing. In case the price 
                                listed is not current and the restaurant informs us immediately 
                                after placing the order, we will put our best effort to contact 
                                you to inform you about the price difference and you can choose 
                                to opt-out of the order at that time.<br /><br />

                                4.4. All prices for delivery by UrgedInternational or a third 
                                party provider assigned by UrgedInternational listed on the 
                                Website are correct at the time of publication, however, we reserve 
                                the right to alter these in the future<br /><br />

                                4.5. The total price for Food Delivery, Goods or Services ordered, 
                                including delivery charges and other charges, will be displayed on 
                                the Website when you place your order. Full payment must be made 
                                for all Goods despatched and Services provided. Payment has to be 
                                made in cash or, if available on the website, by online payment, 
                                e.g. credit or debit card.<br /><br />

                                4.6. If you choose online payment, you must pay for your order before 
                                it is delivered. To ensure that shopping online is secure, your 
                                debit/credit card details will be encrypted to prevent the 
                                possibility of someone being able to read them as they are sent 
                                over the internet. Your credit card company may also conduct 
                                security checks to confirm it is you placing the order.<br /><br />

                                4.7. The prices reflected on the website/mobile application/email are 
                                determined solely by the Participating Restaurant and informed to 
                                UrgedInternational at the time of listing or afterwards. Any change 
                                in the prices of menu at the time of placing order is at the sole 
                                discretion of the Participating restaurant.<br /><br />

                                4.8. All applicable taxes and levies, the rates thereof and the 
                                manner of applicability of such taxes are being charged and 
                                determined by the Participating Restaurant and UrgedInternational 
                                is merely collecting the same on behalf of such Participating 
                                Restaurant.<br /><br />

                                4.9. The entire amount of applicable taxes collected by 
                                UrgedInternational is directly remitted as it is to Participating 
                                Restaurants and UrgedInternational does not retain any amounts 
                                thereof<br /><br />

                                4.10. UrgedInternational is not responsible for validating the legal 
                                sanctity of the applicable taxes and the manner of its applicability 
                                on behalf of the Participating Restaurant. UrgedInternational holds 
                                no responsibility for the legal correctness/validity of the levy of 
                                such taxes. The sole responsibility for any legal issue arising on the 
                                taxes shall reside with the Participating Restaurant.<br /><br />

                                4.11. The prices reflected on the website/mobile application are 
                                determined solely by the Participating Restaurant and informed to 
                                UrgedInternational at the time of listing. Any change in the prices 
                                of menu at the time of placing order is at the sole discretion of 
                                the Participating restaurant.<br /><br />

                                4.12. The transaction of sale of food or food items is between 
                                Participating Restaurant and the customer, and accordingly, 
                                UrgedInternational is not liable to charge or deposit any taxes 
                                applicable on such transaction<br /><br />

                                4.13. The final tax invoice will be issued by the Participating 
                                Restaurant and delivered to the customer along with the order<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>5: Delivery</span> <br /><br />

                                5.1. Delivery periods quoted at the time of ordering are 
                                approximate only and may vary. Goods will be delivered to the 
                                address designated by you at the time of ordering.<br /><br />

                                5.2. If delivery is done by the Participating Restaurant, it is 
                                the Participating Restaurants sole responsibility to provide Food 
                                Delivery in a timely manner.<br /><br />

                                5.3. In the case delivery is done by UrgedInternational, we will give great 
                                care to deliver in a timely manner. No responsibility is taken for 
                                late delivery by UrgedInternational in either case.<br /><br />

                                5.4. All orders are delivered by a reputable courier. We and the 
                                Participating Restaurant will make every effort to deliver within 
                                the time stated, however, we will not be liable for any loss 
                                caused to you by ordering late. If the Goods are not delivered 
                                within the estimated delivery time quoted by us, please contact 
                                the participating restaurant first. You may also contact us by 
                                telephone or email and we will try to ensure that you receive your 
                                order as quickly as possible.<br /><br />

                                5.5. In case of a late delivery, the delivery charge will neither 
                                be voided nor refunded by UrgedInternational.<br /><br />

                                5.6. All risk in the Goods and the Food Delivery shall pass to you 
                                upon delivery.<br /><br />

                                5.7. If you fail to accept delivery of Food Delivery and/or Goods 
                                at the time they are ready for delivery, or we are unable to 
                                deliver at the nominated time due to your failure to provide 
                                appropriate instructions, or authorizations, then such goods 
                                shall be deemed to have been delivered to you and all risk and 
                                responsibility in relation to such goods shall pass to you. Any 
                                storage, insurance and other costs which we incur as a result of 
                                the inability to deliver shall be your responsibility and you 
                                shall indemnify us in full for such cost.<br /><br />

                                5.8. You must ensure that at the time of delivery of Food Delivery 
                                and/or Goods adequate arrangements, including access where 
                                necessary, are in place for the safe delivery of such goods. We 
                                cannot be held liable for any damage, cost or expense incurred to 
                                such goods or premises where this arises as a result of a failure 
                                to provide adequate access or arrangements for delivery.<br /><br />

                                5.9. Participating restaurants, who will prepare your order, aim<br /><br />

                                5.9.1. to deliver the product to you at the place of delivery 
                                requested by you in your order;<br /><br />

                                5.9.2. to deliver within the time confirmed by the restaurant;<br /><br />

                                5.9.3. to inform you if they expect that they are unable to meet 
                                the estimated delivery time.<br /><br />

                                5.10. Participating Restaurants and we shall not be liable to you 
                                for any losses, liabilities, costs, damages, charges or expenses 
                                arising out of late delivery;<br /><br />

                                5.11. Please note that it might not be possible for Participating 
                                Restaurants to deliver to some locations. If this is the case, our 
                                Participating Restaurants or we will inform you using the contact 
                                details that you provide to us when you make your order and arrange 
                                for cancellation of the order or delivery to an alternative delivery 
                                address;<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>6: Cancellation</span> <br /><br />

                                6.1. You must notify the participating restaurant immediately if you 
                                decide to cancel your order, preferably by phone, and quote your 
                                order number. If the restaurant accepts your cancellation, no 
                                cancellation fee applies. If the restaurant refuses cancellation, 
                                e.g. because preparation of Food Delivery has been completed and/or 
                                delivery personnel has already been dispatched, it may not be 
                                cancelled. We will not be able to refund any order, which has been 
                                already dispatched.<br /><br />

                                6.2. We may cancel a contract if the product is not available for 
                                any reason. We will notify you if this is the case and return any 
                                payment that you have made;<br /><br />

                                6.3. If the cancellation was made in time and once the restaurant has 
                                accepted your cancellation, we will refund or re-credit your debit or 
                                credit card with the full amount within 14 days, which includes the 
                                initial delivery charge (where applicable) which you paid for the 
                                delivery of the Goods or the Services, as applicable.<br /><br />

                                6.4. In the unlikely event that the Participating Restaurant delivers 
                                a wrong item, you have the right to reject the delivery of the wrong 
                                item and you shall be fully refunded for the missing item. If the 
                                Participating Restaurant can only do a partial delivery (a few items 
                                might be not available), its staff should inform you or propose a 
                                replacement for missing items. You have the right to refuse a partial 
                                order before delivery and get a refund. We are not responsible for 
                                wrong or partial delivery. The issue has to be settled directly with 
                                the Participating Restaurant.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>7: Refund policy</span> <br /><br />

                                7.1. You as a customer can cancel your order  up to the cut-off 
                                time of 10 minutes from which you have placed an order. To do 
                                this : <br /><br />
                                
                                - Login to your Urged Account<br />
                                - Go to order history package<br />
                                - Click on Cancel Order for the order you wish to cancel<br /><br /> 

                                In such a case we will refund any payments already made 
                                by you for the order.<br /><br />

                                7.2. Customers are also refunded for the reasons below:<br /><br />

                                If a purchased item is missing, we’ll refund the customer 
                                the sales price of the item (including tax) at the time of 
                                the order.<br /> 
                                If an entire order is incorrect, the customer is 
                                refunded for the sales price of the entire order (including tax) 
                                and the delivery fee. <br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>8: Information</span> <br /><br />

                                8.1. Where we have requested information from you to provide Food Delivery, 
                                Goods or Services you agree to provide us with accurate and complete information.<br /><br />

                                8.2. You authorize us to use, store or otherwise process your personal information 
                                in order to provide the Food Delivery, Goods or Services to you and for marketing 
                                and credit control purposes (the "Purpose"). The Purpose may include the disclosure 
                                of your personal information to selected third parties from time to time where we 
                                believe that the services offered by such third parties may be of interest to you 
                                or where this is required by law or in order to provide the Food Delivery, Goods or 
                                Service to you. More information can be found in our Privacy Policy.<br /><br />

                                8.3. You are entitled to request a copy of the personal information we hold on you. 
                                Please contact us if you wish to request this information.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>9: Linked Sites</span> <br /><br />

                                There may be a number of links on our Website to third party 
                                Websites which we believe may be of interest to you. We do not 
                                represent the quality of the Goods or Services provided by such 
                                third parties nor do we have any control over the content or 
                                availability of such sites. We cannot accept any responsibility 
                                for the content of third party Websites or the Services or Goods 
                                that they may provide to you.<br />

                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>10: Complaints</span> <br /><br />

                                We take complaints very seriously and aim to respond to 
                                your complaints within 5 business days. All complaints 
                                should be addressed to wecare@urgedinternational.com.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>11: Limitation of Liability</span><br /><br /> 
                                11.1. Great care has been taken to ensure that the information 
                                available on this Website is correct and error free. We apologize 
                                for any errors or omissions that may have occurred. We cannot 
                                warrant that use of the Website will be error free or fit for 
                                purpose, timely, that defects will be corrected, or that the site 
                                or the server that makes it available are free of viruses or bugs 
                                or represents the full functionality, accuracy, reliability of the 
                                Website and we do not make any warranty whatsoever, whether express 
                                or implied, relating to fitness for purpose, or accuracy.<br /><br />

                                11.2. By accepting these terms of use you agree to relieve us from any 
                                liability whatsoever arising from your use of information from any 
                                third party, or your use of any third party website, or your 
                                consumption of any food or beverages from a Participating 
                                Restaurant.<br /><br />

                                11.3. We disclaim any and all liability to you for the supply of 
                                the Food Delivery, Goods and Services to the fullest extent 
                                permissible under applicable law. This does not affect your 
                                statutory rights as a consumer. If we are found liable for any 
                                loss or damage to you such liability is limited to the amount you have 
                                paid for the relevant Goods or Services. We cannot accept any liability 
                                for any loss, damage or expense, including any direct or indirect loss 
                                such as loss of profits to you, howsoever arising. This limitation of 
                                liability does not apply to personal injury or death arising as a 
                                direct result of our negligence.<br /><br />

                                11.4. We do not accept any liability for any delays, failures, errors 
                                or omissions or loss of transmitted information, viruses or other 
                                contamination or destructive properties transmitted to you or your 
                                computer system via our Website.<br /><br />

                                11.5. We shall not be held liable for any failure or delay in 
                                performing Services or delivering Goods where such failure arises as a 
                                result of any act or omission, which is outside our reasonable control 
                                such as all overwhelming and unpreventable events caused directly and 
                                exclusively by forces of nature that can be neither anticipated, nor 
                                controlled, nor prevented by the exercise of prudence, diligence, and 
                                care, including but not limited to: war, riot, civil commotion; 
                                compliance with any law or governmental order, rule, regulation or 
                                direction and acts of third parties.<br /><br />

                                11.6. If we have contracted to provide identical or similar order to 
                                more than one Customer and are prevented from fully meeting our 
                                obligations to you by reason of an Event of Force Majeure, we may 
                                decide at our absolute discretion which orders we will fill and to 
                                what extent.<br /><br />

                                11.7. The products sold by us are provided for private domestic and 
                                consumer use only. Accordingly, we do not accept liability for any 
                                indirect loss, consequential loss, loss of data, loss of income or 
                                profit, loss of damage to property and/or loss from claims of third 
                                parties arising out of the use of the Website or for any products or 
                                services purchased from us.<br /><br />

                                11.8. We have taken all reasonable steps to prevent Internet fraud and 
                                ensure any data collected from you is stored as securely and safely as 
                                possible. However, we cannot be held liable in the extremely unlikely 
                                event of a breach in our secure computer servers or those of third 
                                parties.<br /><br />

                                11.9. In the event UrgedInternational has a reasonable belief that there exists 
                                an abuse of vouchers and/or discount codes or in suspected instances 
                                of fraud, UrgedInternational may cause the shopper (or customer) to be blocked 
                                immediately and reserves the right to refuse future service. 
                                Additionally, should there exist an abuse of vouchers or discount 
                                codes, UrgedInternational reserves the right to seek compensation from any and 
                                all violators.<br /><br />

                                11.10. Offers are subject to UrgedInternational's discretion and may be 
                                withdrawn at any time and without notice.<br />
                                </Typography><br />
                                <Typography>
                                <span className={classes.parahHead}>12: General</span><br /><br />

                                12.1. All prices are in India Rupees. GST is included where indicated<br /><br />
                                12.2. We may subcontract any part or parts of the Services or Goods that we provide 
                                to you from time to time and we may assign or novate any part or parts of our rights 
                                under these Terms and Conditions without your consent or any requirement to notify 
                                you.<br /><br />

                                12.3. We may alter or vary the Terms and Conditions at any time without notice to you.<br /><br />
                                12.4. Payment must be made either at the time of ordering the Food 
                                Delivery, Goods or Services from us by credit card or at the time 
                                of delivery by cash. Failure to pay on time will result in the 
                                cancellation of your order.<br /><br />

                                12.5. Do not use or launch any automated system or program in 
                                connection with our website or its online ordering functionality;<br /><br />

                                12.6. Do not collect or harvest any personally identifiable information 
                                from the website, use communication systems provided by the website 
                                for any commercial solicitation purposes, solicit for any reason 
                                whatsoever any users of the website with respect to their submissions 
                                to the website, or publish or distribute any vouchers or codes in 
                                connection with the website, or scrape or hack the website.<br /><br />

                                12.7. The Terms and Conditions together with the Privacy Policy, any 
                                order form and payment instructions constitute the entire agreement 
                                between you and us. No other terms whether expressed or implied shall 
                                form part of this Agreement. In the event of any conflict between 
                                these Terms and Conditions and any other term or provision on the 
                                Website, these Terms and Conditions shall prevail.<br /><br />

                                12.8. If any term or condition of our Agreement shall be deemed 
                                invalid, illegal or unenforceable, the parties hereby agree that such 
                                term or condition shall be deemed to be deleted and the remainder of 
                                the Agreement shall continue in force without such term or condition.<br /><br />

                                12.9. These Terms and Conditions and our Agreement shall be governed 
                                by and construed in accordance with the laws of India. The parties 
                                hereto submit to the exclusive jurisdiction of the courts of India.<br /><br />

                                12.10. No delay or failure on our part to enforce our rights or 
                                remedies under the Agreement shall constitute a waiver on our part 
                                of such rights or remedies unless such waiver is confirmed in 
                                writing.<br /><br />

                                12.11. These Terms and Conditions and a contract (and all 
                                non-contractual obligations arising out of or connected to them) 
                                shall be governed and construed in accordance with India Laws. 
                                Both we and you hereby submit to the non-exclusive jurisdiction of 
                                the India Courts. All dealings, correspondence and contacts 
                                between us shall be made or conducted in the English language.<br />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
            {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_APP_LIVECHAT_LICENSE !== undefined? process.env.REACT_APP_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
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

export default TermsOfServiceScreen;
