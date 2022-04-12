import React, { useState } from 'react';
//import CSS
import { Container, Button, Typography, makeStyles, createStyles, Theme, Grid, FormControl, OutlinedInput, InputLabel, Select, MenuItem, FormControlLabel, Checkbox} from '@material-ui/core';
import clsx from 'clsx';
import { Alert } from '@material-ui/lab';
import { useAppData } from '../../../Context/AppDataContext';

interface State {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
    checkedB: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
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
                border: "0.1px solid grey",
                color: "#000000 !important"
            },
            "& .MuiIconButton-root": {
                color: "#EEEEEE"
            },
            color: "#000"
        },
        firstTextField: {
            marginBottom: "8%",
            width: "100%",
            borderRadius: "8px",
            border: "0.1px solid grey",
            borderColor: "#EEEEEE",
        },
        Text1: {
            fontWeight: 600,
            paddingTop: "3%",
            paddingBottom: "1%",
            fontFamily: "PT Sans",
            color: "#101828",
            textAlign: "center",
            fontSize: "1.9rem"
        },
        Text2: {
            fontWeight: 500,
            paddingBottom: "3%",
            fontFamily: "Inter",
            color: "#667085",
            textAlign: "center"
        },
        Text3: {
            paddingTop: "3%",
            fontWeight: "bold",
            maxWidth: "620px",
            paddingBottom: "3%",
            fontFamily: "Open Sans",
        },
        heroBackground: {
            padding: 0,
            color: "#FFFFFF",
        },
        innerContainer: {
            paddingBottom: "3%",
        },
        btn: {
            borderRadius: "8px",
            fontFamily: "PT Sans",
            backgroundColor: "#F7B614",
            color: "#FFF",
            height: "48px",
            marginBottom: "3%"
        },
        alert: {
            marginBottom: "3%"
        }
    }),
);

export const Section3: React.FC = function Section3() {
    const classes = useStyles();

    var { value }  = useAppData();
    var { sendContactUsEmail } = value;

    const [values, setValues] = React.useState<State>({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: '',
        checkedB: false
    });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.checked });
    };

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        ////console.log("I am inside fuction");
        try{
            setSuccess('');
            setError('');
            values.firstname === ''?
                setError('Please enter your First Name')
            :values.lastname === ''?
                setError('Please enter your Last Name')
            :values.email === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))?
                setError('Please enter a valid Email')
            :values.subject === ''?
                setError('Please enter a valid Subject')
            :values.message === ''?
                setError('Please enter a valid Message')
            :await sendContactUsEmail(values.firstname + ' ' + values.lastname, values.email, values.subject, values.message).then(async function(res1){
                if(res1 != null){
                    ////console.log("About to navigate to dashboard.");
                    ////console.log(userRolef);
                    setSuccess('Thank you, we will respond shortly.');
                    setValues({
                        ...values,
                        firstname: '',
                        lastname: '',
                        email: '',
                        subject: '',
                        message: '',
                        checkedB: false
                    });
                    setTimeout(() => {
                        setSuccess('');
                    }, 6000);
                }else{
                    setError('Unable to send message at this time. Please try again later.'); 
                }
            });
            
        }catch{
            setError('Unable to send message at this time. Please try again later.');
        }
    }

    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <div className={classes.innerContainer}>
                   <Grid container  spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Typography>
                                <Typography className={classes.Text1}>
                                    Contact us
                                </Typography>
                            </Typography>
                            <Typography>
                                <Typography className={classes.Text2}>
                                    Our friendly team would love to hear from you.
                                </Typography>
                            </Typography>
                            <form style={{paddingLeft: "15%", paddingRight: "15%"}}>
                                <Grid container  spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" >
                                            <InputLabel htmlFor="firstname" className={classes.root}>First name</InputLabel>
                                            <OutlinedInput 
                                                className={clsx(classes.firstTextField, classes.root)}
                                                id="firstname"
                                                type="text"
                                                value={values.firstname}
                                                onChange={handleChange('firstname')}
                                                labelWidth={103}
                                                required={true}
                                                notched={true}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <FormControl variant="outlined" style={{textAlign: "right"}}>
                                        <InputLabel htmlFor="lastname" className={classes.root}>Last Name</InputLabel>
                                        <OutlinedInput 
                                            className={clsx(classes.firstTextField, classes.root)}
                                            id="lastname"
                                            type="text"
                                            value={values.lastname}
                                            onChange={handleChange('lastname')}
                                            labelWidth={103}
                                            required={true}
                                            notched={true}
                                        />
                                    </FormControl>
                                </Grid>
                                </Grid>
                                <FormControl fullWidth variant="outlined" >
                                    <InputLabel htmlFor="email" className={classes.root}>Email</InputLabel>
                                    <OutlinedInput 
                                        className={clsx(classes.firstTextField, classes.root)}
                                        id="email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        labelWidth={103}
                                        required={true}
                                        notched={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="outlined" >
                                    <InputLabel htmlFor="subject" className={classes.root}>Subject</InputLabel>
                                    <OutlinedInput 
                                        className={clsx(classes.firstTextField, classes.root)}
                                        id="subject"
                                        type="text"
                                        value={values.subject}
                                        onChange={handleChange('subject')}
                                        labelWidth={103}
                                        required={true}
                                        notched={true}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="outlined" >
                                    <InputLabel htmlFor="message" className={classes.root}>Message</InputLabel>
                                    <OutlinedInput 
                                        className={clsx(classes.firstTextField, classes.root)}
                                        id="message"
                                        type="text"
                                        value={values.message}
                                        onChange={handleChange('message')}
                                        labelWidth={103}
                                        required={true}
                                        notched={true}
                                        maxRows={4}
                                        multiline={true}
                                    />
                                </FormControl>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={values.checkedB}
                                        onChange={handleChange2}
                                        name="checkedB"
                                        id="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="You agree to our friendly privacy policy."
                                    style={{color: "#667085"}}
                                /><br /><br />
                                {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                <Button fullWidth variant="contained" type="button" onClick={handleSubmit} className={classes.btn} disabled={!values.checkedB}>
                                    Send message
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                                <img src="Images/map.png" width="90%" style={{maxHeight: "78vh"}} alt="" />
                        </Grid>
                   </Grid>
                </div>
            </Container>
            <style>
                {
                    `
                        .MuiButton-contained:hover {
                            background-color: #F7B614;
                        }
                    `
                }
            </style>
        </>
    )
}