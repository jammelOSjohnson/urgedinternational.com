import { Button, Container, FormControl, Grid, InputLabel, makeStyles, OutlinedInput, Theme, createStyles, InputAdornment, IconButton, Typography } from "@material-ui/core"
import { EmailOutlined, PersonRounded } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import clsx from "clsx"
import React,{ useState } from "react";

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
    fullname: string;
    email: string;
    password: string;
    showPassword: boolean;
}

export const Profile: React.FC = function Profile(){
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        fullname: '',
        email: '',
        password: '',
        showPassword: false,
      });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    // eslint-disable-next-line
    var [loading, setLoading] = useState(false);

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
            :
            <></>
            // :await signup(values, value).then(async function(res1){
            //     if(res1){
            //        setSuccess('Profile updated successfully.')
            //     }else{
            //         setError('Unable to update profile at this time.'); 
            //     }
            // });
            
        }catch{
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
                                <Typography variant="subtitle2" className={classes.forgotPassText}>Forgot Password?</Typography>
                                {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                <Button variant="contained" 
                                    style={{backgroundColor: "#FEC109"}}
                                     className={classes.loginButton} type="submit">
                                    Update Profile
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid> 
            </Container>
        </>
    )
}