import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Slider } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        slider: {
            backgroundColor: '#FEC109',
            borderRadius: '30px'
        },
        sliderText: {
            color: '#F9F9FB'
        }
    }),
);

export const AdvertisementSlider: React.FC = function AdvertisementSlider() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
             <Container maxWidth="xl" className={classes.slider}>
                <Grid container spacing={0} alignContent="center" alignItems="center">
                    <Grid xs={11} sm={6} md={5} lg={4} xl={3}>
                        <Typography align="left" className={classes.sliderText}>
                            We are the definition of SPEED
                        </Typography>
                        <Typography align="left" className={classes.sliderText}>
                            Here at Urged, Quality and Time is our main priority. You can trust us to be on-time with your packages and food.
                        </Typography>
                        <Button>
                            <Typography>
                                Categories
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}