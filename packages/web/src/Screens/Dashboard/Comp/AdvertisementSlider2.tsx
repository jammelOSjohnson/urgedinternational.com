import { makeStyles, createStyles, Typography, Theme, Button, IconButton, Slider, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/FoodSlider.css";
import { Link } from "react-router-dom";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        slider: {
            backgroundColor: '#FEC109',
            borderRadius: '30px'
        },
        fonts: {
            fontFamily: "PT Sans"
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FF5E14",
            textTransform: "none"
        },
        image: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: "46%",
            top: "-34%",
            width: "50%"
        },
        sliderSlogan: {
            color: '#F9F9FB',
            fontSize: 'clamp(16px, 3vw, 51.31px)',
            fontWeight: 700,
            lineHeight: '120%',
            width: "50%",
            textAlign: "left",
            //padding: '0% 0% 2% 0%',
            position: "relative",
            left: "50%",
            // top: "-760%"
        },
        sliderText: {
            color: '#F9F9FB',
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: 400,
            lineHeight: '100%',
            //margin: '-10% -17% 8% 0%',
            position: "relative",
            left: "50%",
            // top: "-467%",
            width: "63%",
            textAlign: "left",
        },
        Button: {
            backgroundColor: "#FAFAFA",
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        ButtonText: {
            color: "#4A4A4A",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25.88px'
        },
        ".carousel-indicators [data-bs-target]": {
            borderRadius: "50px",
            height: "8px",
            width: "8px",
            boxSizing: "unset", 
            flex: "none",
            borderTop: "none",
            borderBottom: "none",
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        }     
    }),
);

export const AdvertisementSlider2: React.FC = function AdvertisementSlider2() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

      const matches = useMediaQuery("(max-width:8000px)");
    
      
    return (
        <>
               <div style={{position: "relative"}} id="FoodSlide">
                    <img className={classes.image} src="Images/KfcAdvertisement.png" alt="KFC Bucket"/>
                    <Carousel nextIcon={false} prevIcon={false}>
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/SliderFrame2.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "300px"}}
                            />
                            <Carousel.Caption style={{top: "5%"}}>
                                <Typography className={`${classes.fonts} ${classes.sliderSlogan}`}>
                                    Delicious Healthy Food
                                </Typography>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                With Urged, Quality and Time is our main priority. You can trust us to be on-time with your food from any restaraunt.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <Link to="/FoodDelivery/Restaurants" title="Restaurants" className={classes.inactiveItemLink}>
                                        <Button className={classes.Button}>
                                            <Typography className={`${classes.btnfonts}`}>
                                                Restaurants
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>  
                            <img
                            className="d-block"
                            src="Images/SliderFrame2.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "300px"}}
                            />
                            <Carousel.Caption>
                                <Typography className={`${classes.fonts} ${classes.sliderSlogan}`}>
                                    Delicious Healthy Food
                                </Typography>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                With Urged, Quality and Time is our main priority. You can trust us to be on-time with your food from any restaraunt.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <Button className={classes.Button}>
                                        <Typography className={`${classes.btnfonts}`}>
                                            Reataurants
                                        </Typography>
                                    </Button>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>  
                            <img
                            className="d-block"
                            src="Images/SliderFrame2.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "300px"}}
                            />
                            <Carousel.Caption>
                                <Typography className={`${classes.fonts} ${classes.sliderSlogan}`}>
                                    Delicious Healthy Food
                                </Typography>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                With Urged, Quality and Time is our main priority. You can trust us to be on-time with your food from any restaraunt.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <Button className={classes.Button}>
                                        <Typography className={`${classes.btnfonts}`}>
                                            Reataurants
                                        </Typography>
                                    </Button>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </div>
        </>
    )
}