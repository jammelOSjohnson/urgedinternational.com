import React, { useState } from 'react';
import { useAppData } from '../../../Context/AppDataContext';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardContent, TextField, Button} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface Props {
    
}

interface State {
    firstname: string;
    lastname: string;
    email: string;
    position: string;
    contact: string;
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
                },
                '&:hover fieldset': {
                  borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                },
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
        position: '',
        contact: ''
      });
    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');

    var handleSubmit = async function handleSubmit(event){
        event.preventDefault();
        try{
            if(values.firstname === '' || values.lastname === '' 
            || values.email === '' || values.position === '')
            { setError('Please complete every field on the form') } else{

            };
        }catch{
            setError('Unable to send emaila at this time.')
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
                            <TextField fullWidth id="outlined-basic" label="First Name" variant="outlined" value={values.firstname} required/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" value={values.lastname} required/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" value={values.contact} required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" type="email" value={values.email} required/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth id="outlined-basic" label="Position" variant="outlined" value={values.position} required/>
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