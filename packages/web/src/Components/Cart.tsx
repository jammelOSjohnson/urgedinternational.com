import { useAppData } from '../Context/AppDataContext';
import { Badge , makeStyles, createStyles, Theme, } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { ShoppingCartRounded } from "@material-ui/icons/";

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

export const Cart: React.FC = function Cart() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
      var { value }  = useAppData();
      var { cartItems } = value;
    
      var history = useHistory();

    
      
    return (
        <>
            <Badge badgeContent={5} color="primary">
                <ShoppingCartRounded className={classes.noti} />
            </Badge>
        </>
    )
}