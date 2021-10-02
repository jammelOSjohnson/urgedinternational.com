import { useAppData } from '../Context/AppDataContext';
import { Container, Grid, Badge , makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { NotificationImportantRounded, ShoppingCartRounded } from "@material-ui/icons/";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        }
    }),
);

export const Notification: React.FC = function Notification() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
      var { value }  = useAppData();
      var { noties } = value;
    
      var history = useHistory();

    
      
    return (
        <>
            <Badge badgeContent={noties.length} color="primary">
                <NotificationImportantRounded className={classes.noti} />
            </Badge>
        </>
    )
}