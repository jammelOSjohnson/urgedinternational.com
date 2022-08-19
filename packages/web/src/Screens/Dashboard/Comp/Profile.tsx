import { Button, Container, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, Theme, createStyles, InputAdornment, IconButton, Typography } from "@material-ui/core"
import { EmailOutlined, PersonRounded, PhoneAndroidRounded, LocationCityRounded } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import clsx from "clsx"
import React,{ useEffect, useState } from "react";
import { useAppData } from "../../../Context/AppDataContext";
import { useHistory } from 'react-router-dom';

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
            margin: "0% 0% 3% 3%",
            padding: "0% 10% 0% 10%",
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
            paddingTop: "0%"
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

interface State {
    ContactNumber: string;
    Email: string;
    FullName: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
}

export const Profile: React.FC = function Profile(){
    const classes = useStyles();

    var {value} = useAppData();
    var history = useHistory();

    var {userInfo, UpdateUserInfo, userRolef} = value;

    const [values, setValues] = React.useState<State>({
        ContactNumber: userInfo.contactNumber,
        Email: userInfo.email,
        FullName: userInfo.fullName,
        AddressLine1: userInfo.addressLine1,
        AddressLine2: userInfo.addressLine2,
        City: userInfo.city,
      });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    // eslint-disable-next-line
    var [loading, setLoading] = useState(false);

    useEffect(() => {
        try{
            if(values.Email === ""){
                setValues({
                    Email: userInfo.email,
                    FullName: userInfo.fullName,
                    ContactNumber: userInfo.contactNumber,
                    AddressLine1: userInfo.addressLine1,
                    AddressLine2: userInfo.addressLine2,
                    City: userInfo.city
                });

                if(userRolef !== "Customer"){
                    history.push("Dashboard")
                }
            }
        }catch(e){
            console.log(e)
        }
    },[userInfo, userRolef])

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        ////console.log("I am inside fuction");
        try{
            setSuccess('');
            setError('');
            setLoading(true);
            values.FullName === ''?
                setError('Please enter your Full Name')
            :values.Email === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.Email))?
                setError('Please enter a valid Email')
            // :values.password === ''?
            //     setError('Please enter a valid Password')
            :await UpdateUserInfo(value, values).then(async function(res1){
                if(res1){
                    setSuccess('Profile updated successfully.')
                }else{
                    setError('Unable to update profile at this time.'); 
                }
            });
            
        }catch(e){
            console.log(e);
            setError('Unable to update profile at this time.');
        }
        setLoading(false);
    }

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Container maxWidth="xl" style={{padding: 0, backgroundColor: "#FFF", overflowX: "hidden", overflowY: "hidden"}}>
                <Grid container spacing={2} className={classes.gridRoot} alignItems="center">
                    <Grid item xs={12}>
                        <div className={classes.formSection}>
                            <Typography variant="h6" className={classes.helloStyle}>Hello,</Typography>
                            <Typography variant="subtitle1" className={classes.welcomeStyle}>Welcome Back</Typography>
                            <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="FullName" className={classes.root}>Full Name</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="FullName"
                                                type="text"
                                                value={values.FullName}
                                                onChange={handleChange('FullName')}
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
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="ContactNumber" className={classes.root}>Contact Number</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="ContactNumber"
                                                type="text"
                                                value={values.ContactNumber}
                                                onChange={handleChange('ContactNumber')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <PhoneAndroidRounded />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="Email" className={classes.root}>Email Address</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="Email"
                                                type="text"
                                                value={values.Email}
                                                onChange={handleChange('Email')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <EmailOutlined />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                                disabled={true}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="AddressLine1" className={classes.root}>AddressLine1</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="AddressLine1"
                                                type="text"
                                                value={values.AddressLine1}
                                                onChange={handleChange('AddressLine1')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <LocationCityRounded />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="AddressLine2" className={classes.root}>AddressLine2</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="AddressLine2"
                                                type="text"
                                                value={values.AddressLine2}
                                                onChange={handleChange('AddressLine2')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <LocationCityRounded />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth variant="outlined" >
                                            <InputLabel htmlFor="City" className={classes.root}>City</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="City"
                                                type="text"
                                                value={values.City}
                                                onChange={handleChange('City')}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <IconButton color="secondary">
                                                            <LocationCityRounded />
                                                        </IconButton>
                                                    </InputAdornment>}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                        {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                        <Button variant="contained" 
                                            style={{backgroundColor: "#FEC109"}}
                                            className={classes.loginButton} type="submit"
                                            disabled={loading}>
                                            Update Profile
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid> 
            </Container>
        </>
    )
}