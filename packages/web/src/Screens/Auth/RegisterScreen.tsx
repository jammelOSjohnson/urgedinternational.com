import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Button, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, useTheme, useMediaQuery } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailOutlined, PlayArrowRounded, PersonRounded } from "@material-ui/icons/";
import Alert from '@material-ui/lab/Alert';
import { auth } from '../../firebase';
import { LiveChatWidget } from '@livechat/widget-react';

interface State {
    fullname: string;
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logo: {
            height: "38px",
            width: "110.64px",
            position: "absolute",
            marginLeft: "6%",
            marginTop: "4%"        
        },
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
                border: "0.1px solid grey",
                color: "#000000 !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            color: "#000"
        },
        gridRoot: {
            padding: "0px"
        },
        form: {
            padding: "0% 0px 5% 0px"
        },
        textBox: {
            width: "100%",
            borderRadius: "25px",
            border: "0.1px solid grey",
            borderColor: "#EEEEEE",
        },
        section1H1: {
            fontSize: "44.6667px",
            textAlign: "left"
        },
        section1H2: {
            fontSize: "75.3333px",
            textAlign: "left",
            color: "#FFFFFF",
            fontWeight: "bold"
        },
        section1H3: {
            fontSize: "25px",
            textAlign: "left"
        },
        formSection: {
            backgroundColor: "#FFFFFF",
            margin: "3% 0% 3% 3%",
            padding: "0% 20% 0% 20%",
            borderRadius: "10px",
            color: "#333333",
            height: "94%"
        },
        leftSection: {
            backgroundColor: "#FFFFFF",
            margin: "3% 0% 3% 3%",
            padding: "0% 0% 0% 0%",
            borderRadius: "10px",
            color: "#FFF",
            height: "94%"
        },
        loginButton: {
            //backgroundColor: "#FFF",
            color: "#FFF",
            width: "100%",
            height: "55px",
        },
        googleBtn: {
            height: "55px",
            border: "1px solid #FEC109",
            color: "#FEC109"
        },
        signUpBtn: {
            position: "absolute",
            right: "3%",
            top: "6%",
            borderRadius: "25px",
            height: "35px",
            border: "1px solid #FEC109",
            color: "#FEC109 !important"
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
            marginBottom: "8%",
            width: "100%",
            borderRadius: "25px",
            border: "0.1px solid grey",
            borderColor: "#EEEEEE"
        },
        skipBtn: {
            position: "absolute",
            right: "3%",
            bottom: "3%",
            color: "#2C2C2C",
            "& .MuiIconButton-root" :{
                color: "#2C2C2C"
            }
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
            paddingTop: "30%",
            fontWeight: "bold"
        },
        firstTextFieldMobile: {
            marginBottom: "3%",
            width: "100%",
            borderColor: "#EEEEEE",
            borderRadius: "25px",
            border: "0.1px solid grey"
        },
        textBoxMobile: {
            width: "100%",
            borderColor: "#EEEEEE",
            borderRadius: "25px",
            border: "0.1px solid grey"
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
                border: "1px solid #EEE",
                color: "#000000 !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            color: "#000"
        },
    })
);

export const RegisterScreen: React.FC = function RegisterScreen() {
    const classes = useStyles();
    const mobClasses = mobileStyles();
    //Breakpoints
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    var { value }  = useAppData();
    var { signup, gLogin, fetchUserInfoForSignUp, fetchUserInfo, userRolef } = value;
    const [values, setValues] = React.useState<State>({
        fullname: '',
        email: '',
        password: '',
        showPassword: false,
      });

    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
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

    const handleClickSignIn = () => {
      history.push("/Login")
      //history.push("/");
    }

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        ////console.log("I am inside fuction");
        try{
            setSuccess('');
            setError('');
            setLoading(true);
            values.fullname === ''?
                setError('Please enter your Full Name')
            :values.email === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))?
                setError('Please enter a valid Email')
            :values.password === ''?
                setError('Please enter a valid Password')
            :await signup(values, value).then(async function(res1){
                if(res1 != null){
                    if(res1 !== "The email address is already in use by another account."){
                        await fetchUserDetailsSignUp(res1).then(function(res){
                            if(res){
                                // ////console.log("About to navigate to dashboard.");
                                // ////console.log(userRolef);
                                // setSuccess('Sign Up Successful.');
                                // setTimeout(() => {
                                //     setSuccess('');
                                //     //console.log("about to go to dashboard");
                                //     if(history.location.state === undefined){
                                //         history.push("/Dashboard");
                                //     }else{
                                //         history.push(history.location.state.from)
                                //     }
                                //     //history.push("/");
                                // }, 1500);
                            }else{
                                setError('Unable to Sign Up at this time'); 
                            } 
                        });
                    }else{
                        setError('The email address is already in use by another account.')
                    }
                }else{
                    setError('Unable to Sign Up at this time.'); 
                }
            });
            
        }catch{
            setError('Failed to Sign Up');
        }
        setLoading(false);
    }

    var handleGoogleSubmit = async function handleGoogleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        ////console.log("I am inside Google Submit fuction");
        try{
            setSuccess('');
            setError('');
            setLoading(true);
            let aftergLogin =await gLogin(value).then(async function(res1){
                if(res1 != null){
                     return res1;
                }else{
                    return null;
                }
            });

            if(aftergLogin !== null){
                await fetchUserDetails(aftergLogin);
            }else{
                setLoading(false);
                setError('Unable to Sign Up at this time.');
            }
        }catch{
            setError('Failed to Sign Up');
        }
        setLoading(false);
    }

    // auth.onAuthStateChanged(function (user){
    //     console.log(referralPath);
    //     console.log(history.location.state);
    // });

    var fetchUserDetailsSignUp = async function fetchUserDetailsSignUp(payload) {
        //console.log("signup");
        ////console.log("Is current user null");
        ////console.log(value);
        if(payload.currentUser !== null && payload.currentUser !== undefined){
            if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
                ////console.log("Fetching user info");
                ////console.log(state);
                fetchUserInfoForSignUp(payload.currentUser.uid, payload, value);
                return true;
            }
        }
        return false;
    }

    var fetchUserDetails = async function fetchUserDetails(payload) {
        //console.log("google signup");
        ////console.log("Is current user null");
        ////console.log(value);
        if(payload.currentUser !== null && payload.currentUser !== undefined){
            if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
                ////console.log("Fetching user info");
                ////console.log(state);
                await fetchUserInfo(payload.currentUser.uid, payload);
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        //console.log("Checking role");
        //console.log(userRolef);
        if(userRolef !== undefined && userRolef !== ""){
            setLoading(false);
            setSuccess('Registration In Successful.');
            setTimeout(() => {
                setSuccess('');
                
                if(history.location.state !== undefined){
                    //console.log("about to go to from address");
                    //console.log(history.location.state.from)
                    history.push(history.location.state.from);
                }else{
                    //console.log("about to go to food dashboard");
                    history.push("/Dashboard");
                }
            }, 1500);
        }
    }, [userRolef])
    
    return (
        <>
            {isMatchMedium? (
                <Container maxWidth="xl" style={{padding: 0, backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden"}}>
                    <Grid container spacing={2} className={classes.gridRoot} alignItems="center">
                        <Grid item xs={12} container spacing={1}>
                            <Grid item xs={7} md={7} lg={7}>
                                <img className={classes.logo} src="Images/urged logo white.svg" alt="Urged Logo"></img>
                                <div className={classes.leftSection}>
                                    <div style={{textAlign: "left"}}>
                                        <img src="Images/RiderBackground.png" style={{width: "100%", maxHeight: "92vh"}} alt="bike icon"/>
                                    </div>
                                </div>    
                            </Grid>
                            <Grid item xs={5} md={5} lg={5}>
                                <div className={classes.formSection}>
                                    <Button variant="outlined"
                                        color="secondary" className={classes.signUpBtn} onClick={handleClickSignIn}  >
                                            Sign In
                                    </Button>
                                    <Typography variant="h6" className={classes.helloStyle}>Hello,</Typography>
                                    <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                                    <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="fullname" className={classes.root}>Full Name</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="fullname"
                                                type="text"
                                                value={values.fullname}
                                                onChange={handleChange('fullname')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <PersonRounded />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                        />
                                        </FormControl><br />
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="email" className={classes.root}>Email Address</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
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
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                            />
                                        </FormControl><br />
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel htmlFor="password" className={classes.root}>Password</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.textBox, classes.root)}
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
                                                labelWidth={70}
                                                required={true}
                                                notched={true}
                                                autoComplete={"off"}
                                            />
                                        </FormControl>
                                        <Typography variant="subtitle2" className={classes.forgotPassText}>Forgot Password?</Typography>
                                        {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                        {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                        <Button variant="contained" 
                                            style={{backgroundColor: "#FEC109"}}
                                             className={classes.loginButton} type="submit" disabled={loading}>
                                            Sign Up
                                        </Button>
                                        <Typography variant="subtitle2" className={classes.orText}>Or</Typography>
                                        <Button variant="outlined" fullWidth={true}
                                            className={classes.googleBtn} 
                                            startIcon={ <img src="Images/googleIcon.png" style={{width: "100%"}} alt="google icon"/>}  
                                            type="button" onClick={handleGoogleSubmit} disabled={loading}>
                                            Continue With Google
                                        </Button>
                                    </form>
                                    <Typography display="inline" className={classes.skipBtn}>
                                        <IconButton style={{paddingTop: "6px"}} onClick={handleClickSkip}>
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
                     className={clsx(classes.signUpBtnMobile, mobClasses.root)} onClick={handleClickSignIn}  >
                            Sign In
                    </Button>
                    <img className={classes.logoMobile} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    <div className={classes.formSectionMobile}>
                        <Typography variant="h5" className={classes.helloStyleMobile}>Hello,</Typography>
                        <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                            <FormControl fullWidth variant="outlined" >
                                <InputLabel shrink htmlFor="fullname" className={mobClasses.root}>Full Name</InputLabel>
                                <OutlinedInput 
                                    className={clsx(classes.firstTextFieldMobile, mobClasses.root, "MuiOutlinedInput-notchedOutline")}
                                    id="fullname"
                                    type="text"
                                    value={values.fullname}
                                    onChange={handleChange('fullname')}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IconButton color="secondary">
                                                <PersonRounded />
                                            </IconButton>
                                        </InputAdornment>}
                                    //labelWidth={70}
                                    required={true}
                                    notched={true}
                                    label="Full Name"
                                />
                            </FormControl><br />
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
                                    notched={true}
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
                                    notched={true}
                                    autoComplete={"off"}
                                />
                            </FormControl>
                            <Typography variant="subtitle2" className={classes.forgotPassTextMobile}>Forgot Password?</Typography>
                            {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                            {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                            <Button variant="contained" 
                                style={{backgroundColor: "#FEC109"}}
                                className={classes.loginButtonMobile} type="submit" disabled={loading}>
                                Sign Up
                            </Button>
                            <Typography variant="subtitle2" className={classes.orTextMobile}>Or</Typography>
                            <Button variant="outlined" fullWidth={true}
                            className={classes.googleBtnMobile} 
                            startIcon={ <img src="Images/googleIcon.png" style={{width: "100%"}} alt="google icon"/>}  
                            type="button" onClick={handleGoogleSubmit} disabled={loading}>
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

            {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_APP_LIVECHAT_LICENSE !== undefined? process.env.REACT_APP_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    )
}

export default RegisterScreen;