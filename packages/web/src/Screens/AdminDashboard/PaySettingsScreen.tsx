import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, FormGroup, TextField, Card, Button, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { FormControlLabel } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import { GET_PAY_SETTINGS } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import { Alert } from '@material-ui/lab';

interface State {
    checkedA: boolean;
    checkedB: boolean;
    value: string;
    _id: string
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted"
            },
            "& .MuiSelect-select:$focus": {
                backgroundColor: "inherit",
                color: "#9B9B9B"
            },
            "& .MuiFormLabel-root": {
                fontWeight: 700,
                fontSize: "1.2rem"
            },
            "& .MuiInputLabel-root.Mui-focused":{
                color: "#9B9B9B"
            }
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        },
        cardContainer: {
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
        },
        card :{
            padding: "2% 0",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            width: "80%",
        },
        cardTitle: {
            margin: "0 auto",
            width: "226px",
            fontWeight: "bold",
            color: theme.palette.primary.light
        },
        cardForm: {
            margin: "0 auto",
            width: "226px",
        },
        submitbtnForm: {
            backgroundColor: theme.palette.primary.main
        }
    }),
);

export const PaySettingsScreen: React.FC = () => {
    //Styles
    const classes = useStyles();
    //Data Store
    const { value } = useAppData();
    const { UpdatePaySettings } = value;
    const {data} = useQuery(GET_PAY_SETTINGS);
    //Local State
    const [state, setState] = React.useState<State>({
        checkedA: true,
        checkedB: false,
        value: "0",
        _id: ""
      });
    
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "checkedA" && event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked, checkedB: false });
        }else if(event.target.name === "checkedA" && !event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked, checkedB: true });
        }

        if(event.target.name === "checkedB" && event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked, checkedA: false });
        }else if(event.target.name === "checkedB" && !event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked, checkedA: true });
        }
        // setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        try{
            console.log(data)
          if (data.getPaySettings !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var paySet = data.getPaySettings[0];

            if (paySet !== null) {
                setState({
                    checkedA: paySet.perDeliveryEnabled,
                    checkedB: paySet.percentagePerOrderTotal,
                    value: paySet.value.toString(),
                    _id: paySet._id
                });
            }
          }
        }catch(err){
          ////console.log(err);
        };
    }, [data])
    

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [prop]: event.target.value });
      };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
  
    const handleClose2 = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen2(false);
    };

    const handleSubmit = () => {
        try{
            if(data.getPaySettings !== null && data.getPaySettings !== undefined) {
                let newPaySettings = {
                    _id:  state._id,
                    perDeliveryEnabled: state.checkedA,
                    percentagePerOrderTotal: state.checkedB,
                    value: parseInt(state.value),
                }
                UpdatePaySettings(value, newPaySettings).then((res) => {
                    if(res){
                        setOpen(true);
                        setOpen2(false);
                    }else{
                        setOpen2(true);
                        setOpen(false);
                    }
                });
            }else{
                //console.log("issue with getPaySettings")
            }
            
        }catch(err){
            //console.log(err)
        }
    }

    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center">
                        <Grid container direction="row" xs={12} spacing={0}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12} className={classes.cardContainer}>
                                <Card className={classes.card}>
                                    <Typography variant="h5" className={classes.cardTitle}>
                                        Driver Payment ($)
                                    </Typography><br />
                                    <form className={classes.cardForm}>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                <Switch
                                                    checked={state.checkedA}
                                                    onChange={handleChange}
                                                    name="checkedA"
                                                    color="primary"
                                                />
                                                }
                                                label="per delivery"
                                            />
                                        </FormGroup><br />
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                <Switch
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                                }
                                                label="% order total"
                                            />
                                        </FormGroup><br />
                                        <TextField
                                            id="outlined-helperText"
                                            label="Enter Value"
                                            value={state.value}
                                            helperText="(per / of) order"
                                            variant="outlined"
                                            onChange={handleChange2('value')}
                                        />
                                        <br />
                                        {state.checkedA && <>
                                            <Typography variant="subtitle1">
                                                Total pay = {`$${state.value}/order`}
                                            </Typography><br />
                                        </>
                                        }
                                        {state.checkedB && <>
                                            <Typography variant="subtitle1">
                                                    Total pay = {`${state.value}% of order`}
                                                </Typography><br />
                                            </>
                                        }
                                        <Button 
                                            color="secondary" 
                                            className={classes.submitbtnForm}
                                            onClick={handleSubmit} 
                                            fullWidth
                                        >
                                            Update Settings
                                        </Button>
                                    </form>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            Settings Updated Successfully.
                                        </Alert>
                                    </Snackbar>
                                    <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                                        <Alert onClose={handleClose2} severity="error">
                                            Unable to settings at this time.
                                        </Alert>
                                    </Snackbar>
                                </Card>
                            </Grid>
                            {/* <Grid item xs={12}>
                                Order Statistics
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
