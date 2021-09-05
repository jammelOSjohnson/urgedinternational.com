import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& .MuiFormLabel-root": {
              color: "#fff"
            },
            color: "#fff"
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
            paddingTop: "40%"
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
            position: "fixed",
            right: "3%",
            bottom: "6%"
        }
    }),
);

export const RegisterScreen: React.FC = function RegisterScreen() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
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
        history.push("/Register")
      }
    return (
        <>
            <Container maxWidth="xl" style={{padding: 0, backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden"}}>
                 <Grid container spacing={2} className={classes.gridRoot} alignItems="center">
                    <Grid item xs={12} container spacing={1}>
                        <Grid item xs={6} md={6} lg={6}>
                            <Typography className={classes.section1H1} >
                                On Time
                            </Typography>
                            <Typography className={classes.section1H2}>
                                Delivery!
                            </Typography>
                            <Typography className={classes.section1H3}>
                                We wont keep you waiting
                            </Typography>
                            <img src="Images/bike-man.jpg" style={{width: "100%"}} alt="bike icon"/>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <div className={classes.formSection}>
                                <Typography variant="h6" className={classes.helloStyle}>Hello,</Typography>
                                <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                                <form className={classes.form} noValidate autoComplete="off">
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
                                                        <EmailRounded />
                                                    </IconButton>
                                                </InputAdornment>}
                                            color="secondary"
                                            labelWidth={103}
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
                                        />
                                    </FormControl>
                                    <Typography variant="subtitle2" className={classes.forgotPassText}>Forgot Password?</Typography>
                                    <Button variant="contained" 
                                        style={{backgroundColor: "#FFF"}}
                                        color="secondary" className={classes.loginButton}>
                                        Login
                                    </Button>
                                    <Typography variant="subtitle2" className={classes.orText}>Or</Typography>
                                    <Button variant="outlined" fullWidth={true}
                                     color="secondary" className={classes.googleBtn} 
                                     startIcon={ <img src="Images/googleIcon.png" style={{width: "100%"}} alt="bike icon"/>}  >
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
    )
}
