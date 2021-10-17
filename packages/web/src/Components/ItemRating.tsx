import { Container, Grid, makeStyles, createStyles, Typography, Theme} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { Rating } from '@material-ui/lab';
//Import Components

// interface Props {
    
// }

type Props = {
    rating: number
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({

    }),
);

export const ItemRating: React.FC<Props> = function ItemRating(props) {
    const classes = useStyles();
    const { rating } = props;
    const [value, setValue] = React.useState<number | null>(rating);
    
      var history = useHistory();

    
      
    return (
        <>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </>
    )
}
