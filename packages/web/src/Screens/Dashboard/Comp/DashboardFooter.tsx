import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
//Import Components

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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
        linkStyle: {
            display: "inline-block",
            marginRight: "3%",
            color: "#7A7A7B"
        }
    }),
);

export const DashboardFooter: React.FC = function DashboardFooter() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
            <Typography style={{textAlign: "center", marginTop: "3%", paddingBottom: "3%"}}>
                <span className={classes.linkStyle}>
                    Copyright ©2021, Urged. All Rights Reserved. 
                </span>
                <Link to="#" className={classes.linkStyle}><Typography>Terms of Use </Typography></Link> 
                <Link to="#" className={classes.linkStyle}><Typography>Privacy Policy</Typography></Link>
            </Typography>
            
            
        </>
    )
}
