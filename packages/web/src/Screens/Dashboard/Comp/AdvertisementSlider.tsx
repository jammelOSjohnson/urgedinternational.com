import { makeStyles, createStyles, Typography, Theme, Button, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/slider.css";
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        slider: {
            backgroundColor: '#FEC109',
            borderRadius: '30px'
        },
        fonts: {
            fontFamily: "PT Sans"
        },
        image: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: "-53px",
            top: "-54px",
        },
        sliderSlogan: {
            color: '#F9F9FB',
            fontSize: '30px',
            fontWeight: 700,
            lineHeight: '26.22px',
            padding: '0% 0% 2% 0%',
            position: "absolute",
            left: "-17%",
            top: "-80%"
        },
        sliderText: {
            color: '#F9F9FB',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '29.34px',
            margin: '-10% -17% 8% 0%',
            position: "absolute",
            left: "-17%",
            width: "86%",
            textAlign: "left",
        },
        Button: {
            backgroundColor: "#FAFAFA",
            border: "1.21951px solid #F7B614",
            height: 41,
            width: 171,
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
            left: "-17%",
            position: "relative",
            paddingTop: "3%"
        }     
    }),
);

const useMobileStyles = makeStyles((theme: Theme) => 
    createStyles({
        imageMobile: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: "2%",
            top: "20%",
            width: "35%"
        },
        sliderSlogan: {
            color: '#F9F9FB',
            fontSize: '30px',
            fontWeight: 700,
            lineHeight: '26.22px',
            padding: '0% 0% 2% 0%',
            position: "absolute",
            left: "-17%",
            top: "-138%",
            width: "300px"
        },
        sliderText: {
            color: '#F9F9FB',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '29.34px',
            margin: '-10% -17% 8% 0%',
            position: "absolute",
            left: "-17%",
            top: "-28%",
            width: "86%",
            textAlign: "left",
        },
    })
)

export const AdvertisementSlider: React.FC = function AdvertisementSlider() {
    const classes = useStyles();
    const classesMobile = useMobileStyles();
    const theme = useTheme();
    
    //const matches = useMediaQuery("(max-width:8000px)");
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
      
    return (
        <>
            {isMatchMedium?
                <div style={{position: "relative"}}>
                    <img className={classes.image} src="Images/Rocket.png" alt="rocket logo"/>
                    <Carousel nextIcon={false} prevIcon={false}>
                        <Carousel.Item>  
                            <img
                            className="d-block"
                            src="Images/SliderFrame.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "300px"}}
                            />
                            <Carousel.Caption>
                                <Typography className={`${classes.fonts} ${classes.sliderSlogan}`}>
                                    We provide CONVENIENCE
                                </Typography>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                    Here at Urged, Quality and Time is our main priority. You can trust us to be on-time with your packages and food.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <a href="#categories" title="categories" className={clsx("inactiveItemLink")}>
                                        <Button className={clsx(classes.Button, "catBtn")}>
                                            <Typography className={`${classes.fonts}`}>
                                                Categories
                                            </Typography>
                                        </Button>
                                    </a>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <style>
                        {
                            `
                                .inactiveItemLink{
                                    text-decoration: none;
                                }

                                inactiveItemLink:hover{
                                    text-decoration: none;
                                    background-color: none;
                                }

                                .catBtn:hover{
                                    color: #5D6467;
                                    background-color: #FF5E14;
                                }
                            `
                        }
                    </style>
                </div>
                :
                <></>
            }
            {isMatch?
                <div style={{position: "relative"}}>
                    <img className={classesMobile.imageMobile} src="Images/Rocket.png" alt="rocket logo"/>
                    <Carousel nextIcon={false} prevIcon={false}>
                        <Carousel.Item>  
                            <img
                            className="d-block"
                            src="Images/SliderFrame.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "300px"}}
                            />
                            <Carousel.Caption>
                                <Typography className={`${classes.fonts} ${classesMobile.sliderSlogan}`}>
                                    We provide CONVENIENCE
                                </Typography>
                                <Typography className={`${classes.fonts} ${classesMobile.sliderText}`}>
                                    Here at Urged, Quality and Time is our main priority. You can trust us to be on-time with your packages and food.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                <a href="#categories" title="categories" className={clsx("inactiveItemLink")}>
                                    <Button className={clsx(classes.Button, "catBtn")}>
                                        <Typography className={`${classes.fonts}`}>
                                            Categories
                                        </Typography>
                                    </Button>
                                </a>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <style>
                        {
                            `
                                .inactiveItemLink{
                                    text-decoration: none;
                                }

                                inactiveItemLink:hover{
                                    text-decoration: none;
                                    background-color: none;
                                }

                                .catBtn:hover{
                                    color: #FFF;
                                    background-color: #FF5E14;
                                }
                            `
                        }
                    </style>
                </div>
                :
                <></>
            }
        </>
    )
}