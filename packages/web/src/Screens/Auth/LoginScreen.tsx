import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Button, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, useTheme, useMediaQuery } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailOutlined, PlayArrowRounded } from "@material-ui/icons/";
import Alert from '@material-ui/lab/Alert';

interface State {
    email: string;
    password: string;
    showPassword: boolean;
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
            color: "#eee"
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
        },
        googleBtn: {
            height: "55px",
        },
        signUpBtn: {
            position: "absolute",
            right: "3%",
            top: "6%",
            borderRadius: "25px",
            height: "35px"
        },
        orText: {
            textAlign: "center",
            marginTop: "6%",
            marginBottom: "6%"
        },
        forgotPassText: {
            marginTop: "1%",
            marginBottom: "7%"
        },
        helloStyle: {
            paddingTop: "50%"
        },
        welcomeStyle: {
            marginBottom: "6%"
        },
        firstTextField: {
            marginBottom: "3%",
            width: "100%",
            borderRadius: "25px"
        },
        skipBtn: {
            position: "absolute",
            right: "3%",
            bottom: "6%"
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
            color: "#FEC109 !important"
        },
        formSectionMobile: {
            margin: "0px",
            padding: "0% 10% 0% 10%",
            color: "#000",
        },
        helloStyleMobile: {
            paddingTop: "55%",
            fontWeight: "bold"
        },
        firstTextFieldMobile: {
            marginBottom: "3%",
            width: "100%",
            borderRadius: "25px",
            border: "1px solid #EEEEEE",
        },
        textBoxMobile: {
            width: "100%",
            borderColor: "#EEEEEE",
            border: "1px solid #EEEEEE",
            borderRadius: "25px",
        },
        forgotPassTextMobile: {
            color: "#FEC109",
            marginTop: "1%",
            marginBottom: "7%",
            textAlign: "center"
        },
        orTextMobile: {
            color:"#C2C2C2",
            textAlign: "center",
            marginTop: "6%",
            marginBottom: "6%"
        },
        loginButtonMobile: {
            //backgroundColor: "#FFF",
            color: "#FFF",
            width: "100%",
            height: "57px",
            borderColor: "FEC109 !important",
            borderRadius: "25px",
        },
        googleBtnMobile: {
            height: "57px",
            color: "#FEC109",
            borderColor: "#FEC109",
            borderRadius: "25px",
        },
        skipBtnMobile: {
            //position: "absolute",
            //left: "3%",
            //bottom: "6%",
            color: "#FEC109"
        },
        alert: {
            marginBottom: "5%"
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
                color: "#EEEEEE"
            },
            color: "#000"
        },
    })
);

export const LoginScreen: React.FC = function LoginScreen() {
    const classes = useStyles();
    const mobClasses = mobileStyles();
    //Breakpoints
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    var { value }  = useAppData();
    var { login, gLogin, fetchUserInfo, userRolef } = value;
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    // eslint-disable-next-line
    var [loading, setLoading] = useState(false);
    
    var history = useHistory();

    
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
      history.push("/Register")
    }

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        console.log(values?.email)
        console.log(values?.password);
        try{
            setError('');
            setLoading(true);
            await login(values.email.trim(), values.password.trim(), value).then(async function(res1){
                if(res1 != null){
                    await fetchUserDetails(res1).then(function(res){
                        if(res){
                            //console.log("About to close login modal.");
                            //closeModal();
                            //setLoggedIn(true);
                            //console.log("About to navigate to dashboard.");
                            //history.push("/Dashboard");
                            console.log("role is:")
                            console.log(userRolef);
                            if(userRolef !== undefined && userRolef === "Admin"){
                                setLoading(false);
                                setSuccess('Sign In Successful.');
                                setTimeout(() => {
                                    setSuccess('');
                                    //console.log("about to go to dashboard");
                                    history.push("/AdminOrders");
                                    //history.push("/");
                                }, 1500);
                                
                            }else if(userRolef !== undefined && userRolef === "Rider"){
                                setLoading(false);
                                setSuccess('Sign In Successful.');
                                setTimeout(() => {
                                    setSuccess('');
                                    //console.log("about to go to dashboard");
                                    history.push("/DeliveryOrders");
                                    //history.push("/");
                                }, 1500);
                                
                            }else{
                                setLoading(false);
                                setSuccess('Sign In Successful.');
                                setTimeout(() => {
                                    setSuccess('');
                                    //console.log("about to go to dashboard");
                                    if(history.location.state !== undefined){
                                        history.push(history.location.state.from);
                                    }
                                    
                                    //history.push("/");
                                }, 1500);
                            }
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
            console.log(err);
        }
    }

    var handleGoogleSubmit = async function handleGoogleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        //console.log("I am inside Google Submit fuction");
        try{
            setError('');
            setLoading(true);
            await gLogin(value).then(async function(res1){
                if(res1 != null){
                    if(userRolef !== undefined && userRolef === "Admin"){
                        setLoading(false);
                        setSuccess('Sign In Successful.');
                        setTimeout(() => {
                            setSuccess('');
                            //console.log("about to go to dashboard");
                            history.push("/AdminOrders");
                            //history.push("/");
                        }, 1500);
                        
                    }
                    else if(userRolef !== undefined && userRolef === "Rider"){
                        setLoading(false);
                        setSuccess('Sign In Successful.');
                        setTimeout(() => {
                            setSuccess('');
                            //console.log("about to go to dashboard");
                            history.push("/DeliveryOrders");
                            //history.push("/");
                        }, 1500);
                        
                    }else{
                        setLoading(false);
                        setSuccess('Sign In Successful.');
                        setTimeout(() => {
                            setSuccess('');
                            //console.log("about to go to dashboard");
                            history.push(history.location.state.from);
                            //history.push("/");
                        }, 1500);
                    }
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
        //console.log("Is current user null");
        //console.log(payload);
        if(payload.currentUser !== null && payload.currentUser !== undefined){
            if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
                //console.log("Fetching user info");
                 await fetchUserInfo(payload.currentUser.uid, payload);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        if(userRolef !== undefined && userRolef === "Admin" && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                //console.log("about to go to dashboard");
                history.push("/AdminOrders");
                //history.push("/");
            }, 1500);
            
        }else if(userRolef !== undefined && userRolef === "Rider" && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                //console.log("about to go to dashboard");
                history.push("/DeliveryOrders");
                //history.push("/");
            }, 1500);
            
        }else if(userRolef !== undefined && userRolef !== ""){
            setLoading(false);
            setSuccess('Sign In Successful.');
            setTimeout(() => {
                setSuccess('');
                //console.log("about to go to dashboard");
                if(history.location.state !== undefined){
                    history.push(history.location.state.from);
                }
                
                //history.push("/");
            }, 1500);
        }
    }, [userRolef])
    
    return (
        <>
            {isMatchMedium? (
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
                                        <Typography variant="subtitle2" className={classes.forgotPassText}>Forgot Password?</Typography>
                                        {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                                        {success && <Alert severity="success" className={classes.alert}>{success}</Alert>}
                                        <Button variant="contained" 
                                            style={{backgroundColor: "#FFF"}}
                                            color="secondary" className={classes.loginButton} type="submit">
                                            Sign In
                                        </Button>
                                        <Typography variant="subtitle2" className={classes.orText}>Or</Typography>
                                        <Button variant="outlined" fullWidth={true}
                                            className={classes.googleBtn} 
                                            startIcon={ <img src="Images/googleIcon.png" style={{width: "100%"}} alt="google icon"/>}  
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
                            <Typography variant="subtitle2" className={classes.forgotPassTextMobile}>Forgot Password?</Typography>
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
                                <Typography display="inline" variant="h6" style={{color: "#FEC109"}}>SKIP</Typography>
                                <PlayArrowRounded />
                            </IconButton>
                        </Typography>
                    </div>
                </Container>
            ): (<></>)}
        </>
    )
}
