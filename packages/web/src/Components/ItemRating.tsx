import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';;
import React from 'react';
import { Rating } from '@mui/lab';
//Import Components

// interface Props {
    
// }

type Props = {
    rating: number
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({

    }),
);

export const ItemRating: React.FC<Props> = function ItemRating(props) {
    // eslint-disable-next-line
    const classes = useStyles();
    const { rating } = props;
    const [value, setValue] = React.useState<number | null>(rating);
      
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
