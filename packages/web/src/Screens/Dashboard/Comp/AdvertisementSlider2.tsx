import { makeStyles, createStyles, Typography, Theme, Button, IconButton, Slider, useMediaQuery, FormControl, OutlinedInput, InputAdornment, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/FoodSlider.css";
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';
import { LocationOnRounded } from "@material-ui/icons/";

interface Props {
    
}

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
        },
        form: {
            padding: "0% 0px 5% 0px",
            width: "70%",
            marginLeft: "49%;"
        },
        formControl: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            minWidth: 120,
            backgroundColor: "#FFFFFF"
        },
        firstTextField: {
            marginBottom: "0%",
            width: "100%",
            borderBottomRightRadius: "25px",
            borderTopRightRadius: "25px",
            border: "1px solid",
            backgroundColor: "#FFFFFF",
            color: "#9B9B9B"
        },
        firstFormControl: {
            borderBottomRightRadius: "25px",
            borderTopRightRadius: "25px",
            width: "47%",
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
                color: "#EEE"
            },
            "& .MuiOutlinedInput-root": {
                border: "1px solid #EEE",
                color: "#EEEEEE !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            color: "#EEE"
        },
        searchBtn: {
            padding: "0px"
        }     
    }),
);

    

export const AdvertisementSlider2: React.FC = function AdvertisementSlider2() {
    const classes = useStyles();
    var { value }  = useAppData();
    const [values, setValues] = React.useState<State>({
        address: 'Select Location',
        searchquery: '',
      });
    
      var history = useHistory();

      const matches = useMediaQuery("(max-width:8000px)");
      
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
            // setSuccess('');
            // setError('');
            // setLoading(true);
            // await signup(values, value).then(async function(res1){
            //     if(res1 != null){
            //         if(res1 !== "The email address is already in use by another account."){
            //             await fetchUserDetailsSignUp(res1).then(function(res){
            //                 if(res){
            //                     //console.log("About to navigate to dashboard.");
            //                     //console.log(userRolef);
            //                     setSuccess('Sign Up Successful.');
            //                     setTimeout(() => {
            //                         setSuccess('');
            //                         console.log("about to go to dashboard");
            //                         history.push('/Dashboard')
            //                     }, 1500);
            //                 }else{
            //                     setError('Unable to login at this time'); 
            //                 } 
            //             });
            //         }else{
            //             setError('The email address is already in use by another account.')
            //         }
            //     }else{
            //         setError('Unable to Sign Up at this time.'); 
            //     }
            // });
            
        }catch{
            // setError('Failed to Sign Up');
        }
        //setLoading(false);
    }
      
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
                                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                                    <FormControl variant="filled" className={classes.formControl}>
                                        {/* <InputLabel id="demo-simple-select-filled-label">Select Location</InputLabel> */}
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={values.address}
                                            onChange={handleChange2}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconButton style={{color: "#FF5E14"}}>
                                                        <LocationOnRounded />
                                                    </IconButton>
                                                </InputAdornment>}
                                        >
                                            <MenuItem value="Select Location">
                                                <em>Select Location</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                    <FormControl variant="outlined" className={classes.firstFormControl}>
                                        {/* <OutlinedInput 
                                            className={clsx(classes.firstTextField, classes.root)}
                                            id="fullname"
                                            type="text"
                                            //value={values.fullname}
                                            //onChange={handleChange('fullname')}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconButton color="secondary">
                                                         <PersonRounded />
                                                    </IconButton>
                                                </InputAdornment>}
                                            labelWidth={103}
                                            required={true}
                                        /> */}
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
                                    {/* <Button variant="contained" 
                                        style={{backgroundColor: "#FEC109"}}
                                         className={classes.loginButton} 
                                         type="submit"
                                    >
                                        Sign Up
                                    </Button> */}
                                </form>
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