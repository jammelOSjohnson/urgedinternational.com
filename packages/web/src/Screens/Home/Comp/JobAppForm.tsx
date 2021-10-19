import React, { useState } from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import CSS
import { Grid, Typography, makeStyles, createStyles, Theme, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface Props {
    
}

interface State {
    firstname: string;
    lastname: string;
    email: string;
    position: string;
    contact: string;
    address: string;
    ownDLicence: boolean;
    ownLLicense: boolean;
    ownSmartPhone: boolean;
    ownTransportation: boolean;
    selectedOptionDL: string;
    selectedOptionLL: string;
    selectedOptionSM: string;
    selectedOptionTR: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            marginTop: "3%",
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.secondary.light,
                  color: "black"
                },
                '&:hover fieldset': {
                  borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                  color: 'black !important'
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "black"
              },
              '& .MuiInputBase-input': {
                color: "black"
                },

          },
          alert: {
            marginBottom: "5%"
        }
    }),
);

export const JobAppForm: React.FC = function JobAppForm() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { JoinUs } = value;
    const [values, setValues] = React.useState<State>({
        firstname: '',
        lastname: '',
        email: '',
        position: 'RIDER',
        contact: '',
        address: '',
        ownDLicence: false,
        ownLLicense: false,
        ownSmartPhone: false,
        ownTransportation: false,
        selectedOptionDL: '',
        selectedOptionLL: '',
        selectedOptionSM: '',
        selectedOptionTR: '',
      });
    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleRadioChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        var clickVal = event.target.value;
        var answer = clickVal === 'Yes1' || clickVal === 'Yes2' 
        || clickVal === 'Yes3' || clickVal === 'Yes4' ? true : false;
        var selectedOption = ''
        if(prop === 'ownDLicence'){ selectedOption = 'selectedOptionDL'} 
        if(prop === 'ownLLicense'){ selectedOption = 'selectedOptionLL'}
        if(prop === 'ownSmartPhone'){ selectedOption = 'selectedOptionSM'}
        if(prop === 'ownTransportation'){selectedOption = 'selectedOptionTR'}
        setValues({ ...values, [prop]: answer, [selectedOption]: clickVal });
    };
    
    var handleSubmit = async function handleSubmit(event){
        event.preventDefault();
        try{
            setSuccess('');
            setError('');
            if(values.firstname === '' || values.lastname === '' 
            || values.email === '' || values.position === '')
            { setError('Please complete every field on the form') } else{
                await JoinUs(values).then(function(res){
                    if(res){
                        setSuccess('Thank you for applying.');
                        setTimeout(() => {
                            setSuccess('');
                            setValues({
                                firstname: '',
                                lastname: '',
                                email: '',
                                position: 'RIDER',
                                contact: '',
                                address: '',
                                ownDLicence: false,
                                ownLLicense: false,
                                ownSmartPhone: false,
                                ownTransportation: false,
                                selectedOptionDL: '',
                                selectedOptionLL: '',
                                selectedOptionSM: '',
                                selectedOptionTR: '',
                            });
                        }, 5000);
                    }else{
                        setError('Unable to send emaila at this time.');
                    }
                })
            };
        }catch{
            setError('Unable to send emaila at this time.');
        }
    }

    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Typography align="left" variant="h6">Sign Up form</Typography>
                    <br/>
                    <Typography align="left" variant="body1">Contact Info</Typography>
                    <br/>
                    <Grid container alignContent="center" spacing={2}>
                        <Grid item xs={12} sm={4} md={4} >
                            <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" value={values.firstname} onChange={handleChange('firstname')} required/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={values.lastname} onChange={handleChange('lastname')} required/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" value={values.contact} onChange={handleChange('contact')} required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" value={values.email} onChange={handleChange('email')} required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth id="outlined-basic" label="Position" variant="outlined" value={values.position} required disabled/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Own Transportation?</FormLabel>
                                <RadioGroup aria-label="ownTransportation" name="ownTransportation" value={values.ownTransportation} onChange={handleRadioChange('ownTransportation')}>
                                    <FormControlLabel value="Yes1" control={<Radio color="primary" checked={values.selectedOptionTR === 'Yes1'} />} label="Yes" />
                                    <FormControlLabel value="No1" control={<Radio color="primary" checked={values.selectedOptionTR === 'No1'} />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Own Smartphone?</FormLabel>
                                <RadioGroup aria-label="ownSmartPhone" name="ownSmartPhone" value={values.ownSmartPhone} onChange={handleRadioChange('ownSmartPhone')}>
                                    <FormControlLabel value="Yes2" control={<Radio color="primary" checked={values.selectedOptionSM === 'Yes2'} />} label="Yes" />
                                    <FormControlLabel value="No2" control={<Radio color="primary" checked={values.selectedOptionSM === 'No2'} />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Own Drivers license?</FormLabel>
                                <RadioGroup aria-label="ownDLicence" name="ownDLicence" value={values.ownDLicence} onChange={handleRadioChange('ownDLicence')}>
                                    <FormControlLabel value="Yes3" control={<Radio color="primary" checked={values.selectedOptionDL === 'Yes3'} />} label="Yes" />
                                    <FormControlLabel value="No3" control={<Radio color="primary" checked={values.selectedOptionDL === 'No3'} />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Own Learners license?</FormLabel>
                                <RadioGroup aria-label="ownLLicense" name="ownLLicense" value={values.ownLLicense} onChange={handleRadioChange('ownLLicense')}>
                                    <FormControlLabel value="Yes4" control={<Radio color="primary" checked={values.selectedOptionLL === 'Yes4'} />} label="Yes" />
                                    <FormControlLabel value="No4" control={<Radio color="primary" checked={values.selectedOptionLL === 'No4'} />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" value={values.address} onChange={handleChange('address')} required/>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                    {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                    <Button variant="contained" color="primary" type="submit">
                        Get Started
                    </Button>&nbsp;&nbsp;
                    <Button variant="contained" color="secondary" type="button">
                        Cancel
                    </Button>
            </form>
        </>
    )
}