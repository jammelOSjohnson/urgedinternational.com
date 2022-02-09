import { Container, Grid, makeStyles, createStyles, Typography, Theme, FormGroup, TextField, Card } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { FormControlLabel } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';


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
            padding: "0 5%"
        }
    }),
);

export const PaySettingsScreen: React.FC = () => {
    const classes = useStyles();
    const [perDelivery, setPerDelivery] = useState(0);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });


      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                                }
                                                label="per delivery"
                                            />
                                        </FormGroup><br />
                                        <TextField
                                            id="outlined-helperText"
                                            label=""
                                            value={perDelivery}
                                            helperText="/Order"
                                            variant="outlined"
                                            type='number'
                                        />
                                    </form><br />
                                    <Typography variant="subtitle1">
                                        Total pay = {`$${perDelivery}/order`}
                                    </Typography><br />
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
