import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Slider, useMediaQuery } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/slider.css";
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
        fonts: {
            fontFamily: "PT Sans"
        },
        image: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: "-53px",
            top: "-54px",
        },
        sliderSlogan: {
            color: '#F9F9FB',
            fontSize: '30px',
            fontWeight: 700,
            lineHeight: '26.22px',
            padding: '0% 0% 2% 0%',
            position: "absolute",
            left: "-17%",
            top: "-80%"
        },
        sliderText: {
            color: '#F9F9FB',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '29.34px',
            margin: '-10% -17% 8% 0%',
            position: "absolute",
            left: "-17%",
            width: "86%",
            textAlign: "left",
        },
        Button: {
            backgroundColor: "#FAFAFA",
            border: "1.21951px solid #F7B614",
            height: 41,
            width: 171,
            borderRadius: 36,
        },
        ButtonText: {
            color: "#4A4A4A",
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25.88px'
        },
        ".carousel-indicators [data-bs-target]": {
            borderRadius: "50px",
            height: "8px",
            width: "8px",
            boxSizing: "unset", 
            flex: "none",
            borderTop: "none",
            borderBottom: "none",
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "-17%",
            position: "relative",
            paddingTop: "3%"
        }     
    }),
);

export const AdvertisementSlider2: React.FC = function AdvertisementSlider2() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

      const matches = useMediaQuery("(max-width:8000px)");
    
      
    return (
        <>
                slider2
        </>
    )
}