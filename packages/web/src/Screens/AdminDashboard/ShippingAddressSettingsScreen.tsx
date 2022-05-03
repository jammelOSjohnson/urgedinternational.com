import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, FormGroup, TextField, Card, Button, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { FormControlLabel } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { Alert } from '@material-ui/lab';


interface AirFreight {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
}

interface SeaFreight {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
}

interface ShippingAddress {
    _id: string;
    AirFreight: AirFreight;
    SeaFreight: SeaFreight;
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
            width: "90%"
        },
        submitbtnForm: {
            backgroundColor: theme.palette.primary.main,
            width: "200px"
        }
    }),
);

export const ShippingAddressSettingsScreen: React.FC = () => {
    //Styles
    const classes = useStyles();
    //Data Store
    const { value } = useAppData();
    const { shippingAddress , getShippingAddress, UpdateShippingAddress } = value;
    //Local State
    const [perDelivery, setPerDelivery] = useState(0);
    const [state, setState] = React.useState<ShippingAddress>({
        _id: "",
        AirFreight: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: ''
        },
        SeaFreight: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: ''
        }
    });

    const [airaddress, setAirAddress] = React.useState<AirFreight>({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const [seaaddress, setSeaAddress] = React.useState<SeaFreight>({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: ''
    });
    
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    

    useEffect(() => {
        try{
          if (shippingAddress === undefined) {
            getShippingAddress(value);
          }else{
              setAirAddress(shippingAddress.AirFreight);
              setSeaAddress(shippingAddress.SeaFreight);
              setState({_id: shippingAddress._id, AirFreight: shippingAddress.AirFreight, 
                SeaFreight: shippingAddress.SeaFreight})
              //console.log(shippingAddress);
          }
        }catch(err){
          //console.log(err);
        };
    }, [shippingAddress])
    
    const handleChange1 = (prop: keyof AirFreight) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setAirAddress({...airaddress, [prop]: event.target.value});
    };

    const handleChange2 = (prop: keyof SeaFreight) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeaAddress({ ...seaaddress, [prop]: event.target.value });
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
            let newShippingAddress = {
                _id:  state._id,
                AirFreight: airaddress,
                SeaFreight: seaaddress
            }

            UpdateShippingAddress(value, newShippingAddress).then((res) => {
                if(res){
                    setOpen(true);
                    setOpen2(false);
                }else{
                    setOpen2(true);
                    setOpen(false);
                }
            });
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
                                        Shipping Address
                                    </Typography><br />
                                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center">
                                        <Grid item xs={12} md={6}>
                                            <form className={classes.cardForm}>
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Air AddressLine 1"
                                                    value={airaddress.addressLine1}
                                                    variant="outlined"
                                                    onChange={handleChange1('addressLine1')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Air AddressLine 2"
                                                    value={airaddress.addressLine2}
                                                    variant="outlined"
                                                    onChange={handleChange1('addressLine2')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Air City"
                                                    value={airaddress.city}
                                                    variant="outlined"
                                                    onChange={handleChange1('city')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Air State"
                                                    value={airaddress.state}
                                                    variant="outlined"
                                                    onChange={handleChange1('state')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Air ZipCode"
                                                    value={airaddress.zipCode}
                                                    variant="outlined"
                                                    onChange={handleChange1('zipCode')}
                                                    fullWidth
                                                />
                                            </form>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <form className={classes.cardForm}>
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Sea AddressLine 1"
                                                    value={seaaddress.addressLine1}
                                                    variant="outlined"
                                                    onChange={handleChange2('addressLine1')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Sea AddressLine 2"
                                                    value={seaaddress.addressLine2}
                                                    variant="outlined"
                                                    onChange={handleChange2('addressLine2')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Sea City"
                                                    value={seaaddress.city}
                                                    variant="outlined"
                                                    onChange={handleChange2('city')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Sea State"
                                                    value={seaaddress.state}
                                                    variant="outlined"
                                                    onChange={handleChange2('state')}
                                                    fullWidth
                                                />
                                                <br />
                                                <TextField
                                                    id="outlined-helperText"
                                                    label="Sea ZipCode"
                                                    value={seaaddress.zipCode}
                                                    variant="outlined"
                                                    onChange={handleChange2('zipCode')}
                                                    fullWidth
                                                />
                                            </form>
                                        </Grid>
                                        <Grid xs={12}>
                                            <br />
                                            <Typography style={{textAlign: "center"}}>
                                                <Button 
                                                    color="secondary" 
                                                    className={classes.submitbtnForm}
                                                    onClick={handleSubmit} 
                                                >
                                                    Update Settings
                                                </Button>
                                            </Typography>
                                        </Grid>
                                    </Grid>
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
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
