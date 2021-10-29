import { Container, Grid, makeStyles, createStyles, Typography, Theme, FormControl, InputLabel, Select, TextField, MenuItem, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { Sidebar } from '../Dashboard/Comp/Sidebar';

interface Props {
    
}

interface State {
    deliveryAddress: string;
    paymentMethod: string;
    additionalIntructions: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 0% 0px",
            borderRadius: "22px",
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
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
        Button: {
            backgroundColor: theme.palette.primary.light,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
    }),
);

export const CheckoutScreen: React.FC = function CheckoutScreen() {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        deliveryAddress: '',
        paymentMethod: 'Select Method',
        additionalIntructions: '',
      });
    
      const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      
    return (
        <>
        <Sidebar>
            <Container maxWidth="xl" style={{paddingLeft: "8px", paddingRight: "8px"}} className={classes.main}>
                <Container maxWidth="md" style={{paddingLeft: "8px", paddingRight: "8px", paddingBottom: "20%"}}>
                    <Typography variant="h4" style={{paddingTop: "5%", paddingBottom: "5%" }}>
                        Secure Checkout
                    </Typography>
                    <form>
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={10} sm={12} >
                                <TextField
                                    id="outlined-multiline-static1"
                                    label="Delivery Address"
                                    multiline
                                    rows={4}
                                    defaultValue={values.deliveryAddress}
                                    onChange={handleChange2('deliveryAddress')}
                                    variant="outlined"
                                    placeholder="Enter Address Here"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={10} sm={12}>
                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">Payment Method</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={values.paymentMethod}
                                        onChange={handleChange}
                                        label="Payment Method"
                                        name="paymentMethod"
                                        className={classes.root}
                                    >
                                        <MenuItem value={"Select Method"}>Select Method</MenuItem>
                                        <MenuItem value={"Credit, Visa Debit Or Master Card"}>Credit, Visa Debit Or Master Card</MenuItem>
                                        <MenuItem value={"Cash on Delivery"}>Cash on Delivery</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10} sm={12} >
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Additionl Info"
                                    multiline
                                    rows={4}
                                    defaultValue={values.additionalIntructions}
                                    onChange={handleChange2('additionalIntructions')}
                                    variant="outlined"
                                    placeholder="Enter Additional Info Here"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={10} sm={12} >
                                <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button">
                                    Complete Order 
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Container>
        </Sidebar>
        </>
    )
}
