import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Button, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, useTheme, useMediaQuery, Modal, Fade, Backdrop } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailOutlined, PlayArrowRounded } from "@material-ui/icons/";
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";
import  { auth } from '../../firebase';

interface State {
    email: string;
    password: string;
    showPassword: boolean;
    forgotpassword: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logo: {
            height: "38px",
            width: "110.64px",
            //position: "fixed",
            marginLeft: "6%",
            marginTop: "6%"        
        },
        root: {
            "& .MuiFormLabel-root": {
              color: "#eee"
            },
            color: "#eee",
            "& .MuiIconButton-root": {
                fontFamily: "PT Sans"
            },
            "& .MuiButtonBase-root": {
                fontFamily: "PT Sans"
            },
        },
        gridRoot: {
            padding: "0px"
        },
        form: {
            padding: "0% 0px 5% 0px"
        },
        textBox: {
            width: "100%",
            borderColor: "#FFF",
            borderRadius: "25px",
            fontFamily: "PT Sans"
            // border: "2px solid #ffffff"
        },
        section1H1: {
            fontSize: "44.6667px",
            textAlign: "center"
        },
        section1H2: {
            fontSize: "75.3333px",
            textAlign: "center",
            color: "#333333",
            fontWeight: "bold"
        },
        section1H3: {
            fontSize: "25px",
            textAlign: "center"
        },
        formSection: {
            backgroundColor: "#FFC214",
            margin: "3% 0% 3% 0%",
            padding: "0% 20% 0% 20%",
            borderRadius: "10px",
            color: "#FFF",
            height: "94%"
        },
        loginButton: {
            //backgroundColor: "#FFF",
            color: "#F7B614",
            width: "100%",
            height: "55px",
            fontFamily: "PT Sans"
        },
        googleBtn: {
            height: "55px",
            fontFamily: "PT Sans"
        },
        signUpBtn: {
            position: "absolute",
            right: "3%",
            top: "6%",
            borderRadius: "25px",
            height: "35px",
            fontFamily: "PT Sans"
        },
        orText: {
            textAlign: "center",
            marginTop: "6%",
            marginBottom: "6%",
            fontFamily: "PT Sans"
        },
        forgotPassText: {
            marginTop: "1%",
            marginBottom: "7%",
            fontFamily: "PT Sans"
        },
        helloStyle: {
            paddingTop: "50%",
            fontFamily: "PT Sans"
        },
        welcomeStyle: {
            marginBottom: "6%",
            fontFamily: "PT Sans"
        },
        firstTextField: {
            marginBottom: "3%",
            width: "100%",
            borderRadius: "25px",
            fontFamily: "PT Sans"
        },
        skipBtn: {
            position: "absolute",
            right: "3%",
            bottom: "6%",
            fontFamily: "PT Sans"
        },
        logoMobile: {
            height: "38px",
            width: "110.64px",
            //position: "fixed",
            marginRight: "6%",
            marginTop: "30px",
            float: "right"        
        },
        signUpBtnMobile: {
            position: "absolute",
            left: "6%",
            top: "30px",
            borderRadius: "25px",
            height: "35px",
            border: "1px solid #FEC109",
            color: "#FEC109 !important",
            fontFamily: "PT Sans"
        },
        formSectionMobile: {
            margin: "0px",
            padding: "0% 10% 0% 10%",
            color: "#000",
        },
        helloStyleMobile: {
            paddingTop: "55%",
            fontWeight: "bold",
            fontFamily: "PT Sans"
        },
        firstTextFieldMobile: {
            marginBottom: "3%",
            width: "100%",
            borderRadius: "25px",
            border: "1px solid #EEEEEE",
            fontFamily: "PT Sans"
        },
        textBoxMobile: {
            width: "100%",
            borderColor: "#EEEEEE",
            border: "1px solid #EEEEEE",
            borderRadius: "25px",
            fontFamily: "PT Sans"
        },
        forgotPassTextMobile: {
            color: "#FEC109",
            marginTop: "1%",
            marginBottom: "7%",
            textAlign: "center",
            fontFamily: "PT Sans"
        },
        orTextMobile: {
            color:"#C2C2C2",
            textAlign: "center",
            marginTop: "6%",
            marginBottom: "6%",
            fontFamily: "PT Sans"
        },
        loginButtonMobile: {
            //backgroundColor: "#FFF",
            color: "#FFF",
            width: "100%",
            height: "57px",
            borderColor: "FEC109 !important",
            borderRadius: "25px",
            fontFamily: "PT Sans"
        },
        googleBtnMobile: {
            height: "57px",
            color: "#FEC109",
            borderColor: "#FEC109",
            borderRadius: "25px",
            fontFamily: "PT Sans"
        },
        skipBtnMobile: {
            //position: "absolute",
            //left: "3%",
            //bottom: "6%",
            color: "#FEC109",
            fontFamily: "PT Sans"
        },
        alert: {
            marginBottom: "5%"
        },
        cartIcon: {
            position: "absolute",
            top: 18,
            right: 10
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.primary.main,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: "34%",
            maxWidth: "400px",
            borderRadius: "20px",
            borderColor: theme.palette.primary.light,
            position: "relative"
         },
         links: {
             textDecoration: "none",
             fontWeight: 800,
             color: "inherit"
         }
    }),
);

const mobileStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
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
                border: "1px solid #EEEEEE",
                color: "#000000 !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE",
                fontFamily: "PT Sans"
            },
            color: "#000"
        },
    })
);

export const LoginScreen: React.FC = function LoginScreen() {
    const classes = useStyles();
    const mobClasses = mobileStyles();
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    //Breakpoints
    const theme = useTheme();
    const [open2, setOpen2] = React.useState(false);

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    var { value }  = useAppData();
    var { login, gLogin, resetPassword, fetchUserInfo, userRolef } = value;
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
        forgotpassword: ''
      });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    var [error2, setError2] = useState('');
    var [success2, setSuccess2] = useState('');
    // eslint-disable-next-line
    var [loading, setLoading] = useState(false);

    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const handleClickSkip = () => {
      history.push("/Dashboard")
      //history.push("/");
    }

    const handleClickSignUp = () => {
        if(history.location.state === undefined){
            history.push("/Register");
        }else{
            history.push("/Register", { from: history.location.state.from})
        }
      
    }

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //console.log(values?.email)
        //console.log(values?.password);
        try{
            setError('');
            setLoading(true);
            await login(values.email.trim(), values.password.trim(), value).then(async function(res1){
                if(res1 != null){
                    await fetchUserDetails(res1).then(function(res){
                        if(res){
                            ////console.log("About to close login modal.");
                            //closeModal();
                            //setLoggedIn(true);
                            ////console.log("About to navigate to dashboard.");
                            //history.push("/Dashboard");
                            // //console.log("role is:")
                            // //console.log(userRolef);
                            // if(userRolef !== undefined && userRolef === "Admin"){
                            //     setLoading(false);
                            //     setSuccess('Sign In Successful.');
                            //     setTimeout(() => {
                            //         setSuccess('');
                            //         ////console.log("about to go to dashboard");
                            //         history.push("/AdminOrders");
                            //         //history.push("/");
                            //     }, 1500);
                                
                            // }else if(userRolef !== undefined && userRolef === "Rider"){
                            //     setLoading(false);
                            //     setSuccess('Sign In Successful.');
                            //     setTimeout(() => {
                            //         setSuccess('');
                            //         //console.log("about to go to rider dashboard");
                            //         history.push("/DeliveryOrders");
                            //         //history.push("/");
                            //     }, 1500);
                                
                            // }else{
                            //     setLoading(false);
                            //     setSuccess('Sign In Successful.');
                            //     setTimeout(() => {
                            //         setSuccess('');
                            //         //console.log("about to go to dashboard");
                            //         //console.log(history.location.state)
                            //         if(history.location.state !== undefined){
                            //             history.push(history.location.state.from);
                            //         }else{
                            //             //console.log(history.location.state)
                            //             history.push("/FoodDelivery");
                            //         }
                                    
                            //         //history.push("/");
                            //     }, 1500);
                            // }
                        }else{
                            setError('Unable to login at this time'); 
                        }
                    });
                    
                }else{
                    setLoading(false);
                    setError('Unable to login at this time.'); 
                }
            });
        }catch(err) {
            //console.log(err);
        }
    }

    //Auth Change
    auth.onAuthStateChanged(function (user){
        if(referralPath === "/Login"){
          //update the state for current user to the user logged in
          ////console.log("about to set current user");
          ////console.log(user);
          //var userInfo = fetchUserInfo();
          //const payload = {currentUser : user, loading: false, userInfo: userInfo}
          var signonStatus = false;
          if(user !== null){
            //console.log("auth");
            signonStatus = user.uid !== null && user.uid !== undefined? true : false
          
          
              var payload = {...value,currentUser : user, loading: false, loggedIn: signonStatus}
              if(value.userInfo.email === "" ){
                //console.log("about to fetch user details")
                  fetchUserDetails(payload);
                  //  .then(function(res){
                  //     if(!res){
                  //         ////console.log('Unable to fetch user data at this time'); 
                  //     }
                  // });
              }
          } 
          // eslint-disable-next-line
        }
      });

    var handleGoogleSubmit = async function handleGoogleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        ////console.log("I am inside Google Submit fuction");
        try{
            setError('');
            setLoading(true);
            await gLogin(value).then(async function(res1){
                if(res1 != null){
                    // if(userRolef !== undefined && userRolef === "Admin"){
                    //     setLoading(false);
                    //     setSuccess('Sign In Successful.');
                    //     setTimeout(() => {
                    //         setSuccess('');
                    //         ////console.log("about to go to dashboard");
                    //         history.push("/AdminOrders");
                    //         //history.push("/");
                    //     }, 1500);
                        
                    // }
                    // else if(userRolef !== undefined && userRolef === "Rider"){
                    //     setLoading(false);
                    //     setSuccess('Sign In Successful.');
                    //     setTimeout(() => {
                    //         setSuccess('');
                    //         ////console.log("about to go to dashboard");
                    //         history.push("/DeliveryOrders");
                    //         //history.push("/");
                    //     }, 1500);
                        
                    // }else{
                    //     setLoading(false);
                    //     setSuccess('Sign In Successful.');
                    //     setTimeout(() => {
                    //         setSuccess('');
                    //         //console.log(history.location.state)
                    //         if(history.location.state !== undefined){
                    //             history.push(history.location.state.from);
                    //         }else{
                    //             //console.log(history.location.state)
                    //             history.push("/FoodDelivery");
                    //         }
                    //         //history.push("/");
                    //     }, 1500);
                    // }
                }else{
                    setLoading(false);
                    setError('Unable to login at this time.'); 
                }
            });
        }catch(err){
            setError('Failed to login');
        }
        setLoading(false);
    }

    var fetchUserDetails = async function fetchUserDetails(payload) {
        ////console.log("Is current user null");
        ////console.log(payload);
        if(payload.currentUser !== null && payload.currentUser !== undefined){
            if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
                ////console.log("Fetching user info");
                 await fetchUserInfo(payload.currentUser.uid, payload);
                return true;
            }
        }
        return false;
    }

    var handleForgotPassword = async function handleForgotPassword(e){
        e.preventDefault();
        handleOpen2();
    }

    var submitForgotPassword = async function submitForgotPassword(e){
        e.preventDefault();
        //prevents default form refresh
        //console.log("I am inside password reset fuction");
        try{
            setSuccess2('');
            setError2('');
            setLoading(true);
            await resetPassword(values.forgotpassword).then(function(res){
                setSuccess2('Check your email inbox for further instructions.');
                setValues({ ...values, forgotpassword: '' });
            });
        }catch{
            setError2('Failed to reset password');
        }
    }

    const handleClose2 = () => {
        setOpen2(false);
    };
  
    const handleOpen2 = () => {
      try
      {
        setOpen2(true);
      }catch(err){

      }
      
    };

    useEffect(() => {
        console.log("Checking role");
        console.log(userRolef);
        if(userRolef !== undefined && userRolef === "Admin" && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                ////console.log("about to go to dashboard");
                history.push("/AdminOrders");
                //history.push("/");
            }, 1500);
            
        }else if(userRolef !== undefined && userRolef === "Rider" && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                ////console.log("about to go to dashboard");
                history.push("/DeliveryOrders");
                //history.push("/");
            }, 1500);
            
        }else if(userRolef !== undefined && userRolef === "Restaurant" && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                history.push("/RestaurantDashboard")
            }, 1500)
        }else if(userRolef !== undefined && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                
                if(history.location.state !== undefined){
                    console.log("about to go to from address");
                    console.log(history.location.state.from)
                    history.push(history.location.state.from);
                }else{
                    console.log("about to go to food dashboard");
                    history.push("/Dashboard");
                }
            }, 1500);
        }
    }, [userRolef])
    
    return (
        <>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open2}>
                    <div className={clsx(classes.paper, 'modalMobile')}>
                        <h2 id="transition-modal-title" style={{textAlign: "center", color: "#fff"}}>Forgot Password</h2>
                        <Link to="Login" className={classes.cartIcon} onClick={handleClose2}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <br />
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                                <Grid item xs={12} >
                                    <form onSubmit={submitForgotPassword} autoComplete="off">
                                        <FormControl fullWidth variant="outlined" color="secondary">
                                            <InputLabel htmlFor="forgotpassword" 
                                            color="secondary" className={classes.root}>
                                                {/* Enter Email Address */}
                                            </InputLabel>
                                            <OutlinedInput 
                                                className={classes.firstTextField}
                                                id="forgotpassword"
                                                type="text"
                                                value={values.forgotpassword}
                                                onChange={handleChange('forgotpassword')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <EmailOutlined />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                color="secondary"
                                                labelWidth={103}
                                                required={true}
                                                placeholder="Enter Email Address"
                                            />
                                        </FormControl><br /><br />
                                        {error2 && <Alert severity="error" className={classes.alert}>{error2}</Alert>}
                                        {success2 && <Alert severity="success" className={classes.alert}>{success2}</Alert>}
                                        <Button variant="contained" 
                                            style={{backgroundColor: "#FFF", fontFamily: "PT Sans"}}
                                            color="secondary" className={classes.loginButton} type="submit"
                                            fullWidth>
                                            Change Password
                                        </Button>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>

            {isMatchMedium? (
                <>
                    <Container maxWidth="xl" style={{padding: 0, backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden"}}>
                        <Grid container spacing={2} className={classes.gridRoot} alignItems="center">
                            <Grid item xs={12} container spacing={1}>
                                <Grid item xs={6} md={6} lg={6}>
                                    <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                                    <Typography style={{paddingTop: "0%"}}>
                                        <Typography className={classes.section1H1} >
                                            On Time
                                        </Typography>
                                    </Typography>
                                    <Typography className={classes.section1H2}>
                                        Delivery!
                                    </Typography>
                                    <Typography className={classes.section1H3}>
                                        We wont keep you waiting
                                    </Typography>
                                    <Typography className={classes.section1H3}>
                                        for long.
                                    </Typography>
                                    <div style={{textAlign: "center"}}>
                                        <img src="Images/bike-man.jpg" style={{width: "76%"}} alt="bike icon"/>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <div className={classes.formSection}>
                                        <Button variant="outlined"
                                            color="secondary" className={classes.signUpBtn} onClick={handleClickSignUp}  >
                                                Sign Up
                                        </Button>
                                        <Typography variant="h6" className={classes.helloStyle}>Hello,</Typography>
                                        <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                                        <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                                            <FormControl fullWidth variant="outlined" color="secondary">
                                                <InputLabel htmlFor="email" color="secondary" className={classes.root}>Email Address</InputLabel>
                                                <OutlinedInput 
                                                    className={classes.firstTextField}
                                                    id="email"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange('email')}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <IconButton color="secondary">
                                                                <EmailOutlined />
                                                            </IconButton>
                                                        </InputAdornment>}
                                                    color="secondary"
                                                    labelWidth={103}
                                                    required={true}
                                                />
                                            </FormControl><br />
                                            <FormControl fullWidth variant="outlined" color="secondary">
                                                <InputLabel htmlFor="password" className={classes.root}>Password</InputLabel>
                                                <OutlinedInput 
                                                    className={classes.textBox}
                                                    id="password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <IconButton color="secondary">
                                                                <LockRounded/>
                                                            </IconButton>
                                                        </InputAdornment>}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                color="secondary"
                                                            >
                                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    color="secondary"
                                                    labelWidth={70}
                                                    required={true}
                                                />
                                            </FormControl>
                                            <Link to="Login" onClick={handleForgotPassword} className={classes.links}>
                                                <Typography variant="subtitle2" className={classes.forgotPassText}>Forgot Password?</Typography>
                                            </Link>
                                            {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                                            {success && <Alert severity="success" className={classes.alert}>{success}</Alert>}
                                            <Button variant="contained" 
                                                style={{backgroundColor: "#FFF", fontFamily: "PT Sans"}}
                                                color="secondary" className={classes.loginButton} type="submit">
                                                Sign In
                                            </Button>
                                            <Typography variant="subtitle2" className={classes.orText}>Or</Typography>
                                            <Button variant="outlined" fullWidth={true}
                                                className={classes.googleBtn} 
                                                startIcon={ <img src="Images/googleIcon.png" style={{width: "100%", fontFamily: "PT Sans"}} alt="google icon"/>}  
                                                type="button" onClick={handleGoogleSubmit}>
                                                Continue With Google
                                            </Button>
                                        </form>
                                        <Typography display="inline" className={classes.skipBtn}>
                                            <IconButton color="secondary" style={{paddingTop: "6px"}} onClick={handleClickSkip}>
                                                <Typography display="inline" variant="h6">SKIP</Typography>
                                                <PlayArrowRounded />
                                            </IconButton>
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Container>
                </>
            ): <></>}

            {isMatch? (
                <Container maxWidth="xl" style={{padding: 0, backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden"}}>
                    <Button variant="outlined"
                     className={clsx(classes.signUpBtnMobile, mobClasses.root)} onClick={handleClickSignUp}  >
                            Sign Up
                    </Button>
                    <img className={classes.logoMobile} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    <div className={classes.formSectionMobile}>
                        <Typography variant="h5" className={classes.helloStyleMobile}>Hello,</Typography>
                        <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="email"  className={mobClasses.root}>Email Address</InputLabel>
                                <OutlinedInput 
                                    className={clsx(classes.firstTextFieldMobile, mobClasses.root)}
                                    id="email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IconButton>
                                                <EmailOutlined />
                                            </IconButton>
                                        </InputAdornment>}
                                    labelWidth={103}
                                    required={true}
                                />
                            </FormControl><br />
                            <FormControl fullWidth variant="outlined" color="secondary">
                                <InputLabel htmlFor="password" className={mobClasses.root}>Password</InputLabel>
                                <OutlinedInput 
                                    className={clsx(classes.textBoxMobile, mobClasses.root)}
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IconButton>
                                                <LockRounded/>
                                            </IconButton>
                                        </InputAdornment>}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                    required={true}
                                />
                            </FormControl>
                            <Link to="Login" onClick={handleForgotPassword} className={classes.links}>
                                <Typography variant="subtitle2" className={classes.forgotPassTextMobile}>Forgot Password?</Typography>
                            </Link>
                            {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                            {success && <Alert severity="success" className={classes.alert}>{success}</Alert>}
                            <Button variant="contained" 
                                style={{backgroundColor: "#FEC109"}}
                                className={classes.loginButtonMobile} type="submit">
                                Sign In
                            </Button>
                            <Typography variant="subtitle2" className={classes.orTextMobile}>Or</Typography>
                            <Button variant="outlined" fullWidth={true}
                            className={classes.googleBtnMobile} 
                            startIcon={ <img src="Images/googleIcon.png" style={{width: "100%"}} alt="google icon"/>}  
                            type="button" onClick={handleGoogleSubmit}>
                                Continue With Google
                            </Button>
                        </form>
                        <Typography display="inline" className={classes.skipBtnMobile}>
                            <IconButton style={{paddingTop: "6px", color: "#FEC109"}} onClick={handleClickSkip}>
                                <Typography display="inline" variant="h6" style={{color: "#FEC109", fontFamily: "PT Sans"}}>SKIP</Typography>
                                <PlayArrowRounded />
                            </IconButton>
                        </Typography>
                    </div>
                </Container>
            ): (<></>)}
        </>
    )
}
