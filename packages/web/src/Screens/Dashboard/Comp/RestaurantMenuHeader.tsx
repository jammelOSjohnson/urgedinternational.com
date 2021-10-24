import { Container, Grid, Badge , makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent, Avatar } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { NotificationImportantRounded, ShoppingCartRounded } from "@material-ui/icons/";
import { Cart } from "../../../Components/Cart";
import { Notification } from "../../../Components/Notification";
import { User } from "../../../Components/User"

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
        },
        main: {
            padding: 0,
        },
        gridRoot: {
            padding: "0px"
        },
        avatar: {
            width: "70px",
            height: "76px",
            backgroundColor: "#FFFFFF",
            borderRadius: "22px"
          },
        kfcImage: {
            marginTop: "0"
        },
        Btn: {
            color: "#FFF",
            backgroundColor: "#FF5E14",
            width: "150px",
            borderRadius: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3%",
            height: "41px"
        },
    }),
);

export const RestaurantMenuHeader: React.FC = function RestaurantMenuHeader() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container xs={6} direction="row" spacing={1} className={classes.gridRoot} alignItems="center">
                    <Grid item direction="row" spacing={1}>
                        <Grid item xs={2} spacing={1}>
                            <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>     
                                <img className={classes.kfcImage} src="Images/KFC Avatar.png"></img>
                            </Avatar>
                        </Grid>
                    </Grid>
                    <Grid item direction="row" spacing={1}>
                        <Grid item xs={12} spacing={1}>
                            <Typography variant={'h4'}>Kentucky Fried Chicken</Typography>
                        </Grid>
                        <Grid item xs={12} spacing={1}>
                            <Typography variant={'h6'}>Kentucky Fried Chicken</Typography>
                        </Grid>
                        <Grid item xs={12} spacing={1}>
                            <Typography variant={'h6'}>Kentucky Fried Chicken</Typography>
                        </Grid>
                    </Grid>
                    <Grid item direction="row" spacing={1}>
                        <Grid item xs={2} spacing={1}>
                            <Typography variant={'h6'}>Open</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}