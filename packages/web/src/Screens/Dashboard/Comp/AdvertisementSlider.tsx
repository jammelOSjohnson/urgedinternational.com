import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Slider, useMediaQuery } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { SwipableViews }  from 'react-swipeable-views';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/slider.css";
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

export const AdvertisementSlider: React.FC = function AdvertisementSlider() {
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
                                    We are the definition of SPEED
                                </Typography>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                    Here at Urged, Quality and Time is our main priority. You can trust us to be on-time with your packages and food.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <Button className={classes.Button}>
                                        <Typography className={`${classes.fonts}`}>
                                            Categories
                                        </Typography>
                                    </Button>
                                </Typography>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </div>
        </>
    )
}