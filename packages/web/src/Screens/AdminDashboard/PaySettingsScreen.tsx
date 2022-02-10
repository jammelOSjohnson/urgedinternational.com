import { useAppData } from '../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, FormGroup, TextField, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { FormControlLabel } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import { GET_PAY_SETTINGS } from '../../GraphQL/Queries';
import { useQuery } from '@apollo/client';


interface Props {
    
}

interface State {
    checkedA: boolean;
    checkedB: boolean;
    value: string;
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
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
        card :{
            padding: "2% 0 0 2%"
        }
    }),
);

export const PaySettingsScreen: React.FC = () => {
    //Styles
    const classes = useStyles();
    //Data Store
    const { value } = useAppData();
    const { paySettings , fetchPaySettings } = value;
    const {data} = useQuery(GET_PAY_SETTINGS);
    //Local State
    const [perDelivery, setPerDelivery] = useState(0);
    const [state, setState] = React.useState<State>({
        checkedA: true,
        checkedB: false,
        value: "0"
      });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "checkedA" && event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked, checkedB: false });
        }
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        try{
          if (data.getPaySettings !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var paySet = data.getPaySettings;

            if (paySet !== null) {
                setState({
                    checkedA: paySettings.perDeliveryEnabled,
                    checkedB: paySettings.percentagePerOrderTotal,
                    value: paySettings.value.toString()
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
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <Typography variant="h5">
                                        Driver payment ($)
                                    </Typography><br />
                                    <form>
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
                                            label=""
                                            value={state.value}
                                            helperText="/Order"
                                            variant="outlined"
                                            onChange={handleChange2('value')}
                                        />
                                    </form><br />
                                    {state.checkedA && <>
                                        <Typography variant="subtitle1">
                                            Total pay = {`$${state.value}/order`}
                                        </Typography><br />
                                    </>}
                                    {state.checkedB && <><Typography variant="subtitle1">
                                            Total pay = {`${state.value}% of order`}
                                        </Typography><br />
                                    </>}
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
