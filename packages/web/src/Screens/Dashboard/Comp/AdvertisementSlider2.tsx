import { makeStyles, createStyles, Typography, Theme, Button, IconButton, FormControl, InputAdornment, Select, MenuItem, TextField, useTheme, useMediaQuery, Input } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/FoodSlider.css";
import { Link } from "react-router-dom";
//import { useAppData } from '../../../Context/AppDataContext';
import { LocationOnRounded } from "@material-ui/icons/";

interface State {
    address: string;
    searchquery: string;
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
            width: "36%",
            textAlign: "left",
            //padding: '0% 0% 2% 0%',
            position: "relative",
            left: "46%",
            // top: "-760%"
        },
        sliderText: {
            color: '#F9F9FB',
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: 400,
            lineHeight: '100%',
            //margin: '-10% -17% 8% 0%',
            position: "relative",
            left: "45%",
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
            left: "45%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        form: {
            padding: "0% 0px 2% 0px",
            width: "70%",
            marginLeft: "44%;",
            marginTop: "5%",
            textAlign: "left"
        },
        formControl: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            minWidth: 120,
            backgroundColor: "#FFFFFF"
        },
        formSelect: {
            borderBottomLeftRadius: "25px",
            borderTopLeftRadius: "25px",
            height: "55px",
            width: "240px"
        },
        formControlSelect: {
            borderBottomLeftRadius: "25px",
            borderTopLeftRadius: "25px",
        },
        firstTextField: {
            marginBottom: "0%",
            width: "100%",
            height: "55px",
            borderBottomRightRadius: "25px",
            borderTopRightRadius: "25px",
            borderBottomLeftRadius: "25px",
            borderTopLeftRadius: "25px",
            border: "none",
            backgroundColor: "#FFFFFF",
            color: "#9B9B9B !important"
        },
        firstFormControl: {
            borderBottomRightRadius: "25px",
            borderTopRightRadius: "25px",
            // width: "47%",
            minWidth: "247px",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        root: {
            "& .MuiFormLabel-root": {
                color: "#EEE"
            },
            "&.MuiFormLabel-root.Mui-focused": {
                  color: "#EEE"
            },
            "& .MuiInputBase-root": {
                color: "#9B9B9B "
            },
            "& .MuiOutlinedInput-root": {
                border: "1px solid #EEE",
                color: "#EEEEEE !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            "& .MuiFilledInput-underline:hover:before": {
                borderBottom: "none"
            },
            "& .MuiFilledInput-underline:before": {
                borderBottom: "none"
            },
            "& .MuiFilledInput-root": {
                backgroundColor: "#FFFFFF",
                borderBottomRightRadius: "25px",
                borderTopRightRadius: "25px",
                borderBottomLeftRadius: "25px",
                borderTopLeftRadius: "25px",
            },
            "& .MuiFilledInput-input": {
                padding: "18px 12px 10px",
                height: "25px"
            },
            "& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)": {
                marginTop: "6px"
            }
        },
        searchBtn: {
            padding: "0px"
        }     
    }),
);

const useMobileStyles = makeStyles((theme: Theme) => 
    createStyles({
        image: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: "46%",
            top: "-37%",
            left: "0%",
            width: "82%"
        },
        firstFormControl: {
            borderBottomRightRadius: "25px",
            borderTopRightRadius: "25px",
            // width: "47%",
            minWidth: "100%",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        form: {
            padding: "0% 0px 2% 0px",
            width: "100%",
            marginLeft: "0%",
            marginTop: "0%",
            textAlign: "left",
            position: 'absolute',
            bottom: "-18%"
        },
        slider: {
            borderRadius: '30px'
        },
        sliderSlogan: {
            color: '#F9F9FB',
            fontSize: 'clamp(16px, 3vw, 51.31px)',
            fontWeight: 700,
            lineHeight: '120%',
            width: "36%",
            textAlign: "left",
            //padding: '0% 0% 2% 0%',
            position: "relative",
            left: "59%",
            // top: "-760%"
        }
    })
);
    

export const AdvertisementSlider2: React.FC = function AdvertisementSlider2() {
    const classes = useStyles();
    const classesMobile = useMobileStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    //var { value }  = useAppData();
    const [values, setValues] = React.useState<State>({
        address: 'Select Location',
        searchquery: '',
      });

      //const matches = useMediaQuery("(max-width:8000px)");
      
      const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValues({...values, address: event.target.value as string});
      };

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        //console.log("I am inside fuction");
        try{
            
            
        }catch{
            // setError('Failed to Sign Up');
        }
        //setLoading(false);
    }
      
    return (
        <>
            {isMatchMedium?
               <div style={{position: "relative"}} id="FoodSlide">
                    <img className={classes.image} src="Images/KfcAdvertisement.png" alt="KFC Bucket"/>
                    <Carousel nextIcon={false} prevIcon={false} className={classesMobile.slider}>
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/SliderFrame2.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "30%"}}
                            />
                            <Carousel.Caption style={{top: "5%"}}>
                                <Typography className={`${classes.fonts} ${classes.sliderSlogan}`}>
                                    Delicious Healthy Food
                                </Typography>
                                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                                    <FormControl variant="outlined" className={classes.firstFormControl}>
                                        <TextField 
                                            id="filled-basic"  
                                            variant="filled"
                                            value={values.searchquery} 
                                            onChange={handleChange('searchquery')}
                                            className={clsx(classes.firstTextField, classes.root)}
                                            placeholder="Search restaurants or dishes."
                                        />
                                    </FormControl>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.searchBtn}
                                        type="submit"
                                    >
                                        <img src="Images/searchicon.png" style={{width: "100%"}} alt="icon"/>
                                    </IconButton>
                                </form>
                                <Typography className={`${classes.fonts} ${classes.sliderText}`}>
                                With Urged, Quality and Time is our main priority. You can trust us to be on-time with your food from any restaraunt.
                                </Typography>
                                <Typography className={classes.btnLayout}>
                                    <Link to="/Restaurants" title="Restaurants" className={classes.inactiveItemLink}>
                                        <Button className={classes.Button}>
                                            <Typography className={`${classes.btnfonts}`}>
                                                Restaurants
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
               :
               <></>
            }
            {isMatch?
                <div style={{position: "relative"}} id="FoodSlide">
                    <img className="image" src="Images/KfcAdvertisement.png" alt="KFC Bucket"/>
                    <Carousel nextIcon={false} prevIcon={false}>
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/SliderFrame2.png"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "193px"}}
                            />
                            <Carousel.Caption style={{top: "5%"}}>
                                <Typography className={`${classes.fonts} ${classesMobile.sliderSlogan}`}>
                                    Delicious Healthy Food
                                </Typography>
                                <form onSubmit={handleSubmit} className={classesMobile.form} noValidate autoComplete="off">
                                    <FormControl variant="outlined" className={classesMobile.firstFormControl}>
                                        {/* <TextField 
                                            id="filled-basic"  
                                            variant="filled"
                                            value={values.searchquery} 
                                            onChange={handleChange('searchquery')}
                                            className={clsx(classes.firstTextField, classes.root)}
                                            placeholder="Search restaurants or dishes."
                                        /> */}
                                        <Input
                                            id="input-with-icon-adornment"
                                            value={values.searchquery} 
                                            onChange={handleChange('searchquery')}
                                            className={clsx(classes.firstTextField, classes.root)}
                                            placeholder="Search restaurants or dishes."
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <img src="Images/searchicongrey.png" style={{width: "100%"}} alt="icon"/>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {/* <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        className={classes.searchBtn}
                                        type="submit"
                                    >
                                        <img src="Images/searchicon.png" style={{width: "100%"}} alt="icon"/>
                                    </IconButton> */}
                                </form>
                                
                                {/* <Typography className={classes.btnLayout}>
                                    <Link to="/Restaurants" title="Restaurants" className={classes.inactiveItemLink}>
                                        <Button className={classes.Button}>
                                            <Typography className={`${classes.btnfonts}`}>
                                                Restaurants
                                            </Typography>
                                        </Button>
                                    </Link>
                                </Typography> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <style>
                        {
                            `
                                .image {
                                    z-index: 1;
                                    margin: 0% 0% 0% 0%;
                                    position: absolute;
                                    right: 46%;
                                    top: -37%;
                                    left: 0%;
                                    width: 82%;
                                }

                                @media only screen and (min-width: 768px){
                                    .image {
                                        z-index: 1;
                                        margin: 0% 0% 0% 0%;
                                        position: absolute;
                                        right: 46%;
                                        top: -37%;
                                        left: 0%;
                                        width: 82%;
                                    }
                                }

                                @media only screen and (max-width: 768px){
                                    .carousel-caption {
                                        right: 5%;
                                        left: 5%;
                                    }
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