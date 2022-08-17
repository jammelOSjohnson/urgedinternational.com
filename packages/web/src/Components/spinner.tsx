import { Backdrop, CircularProgress, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        spinner: {
            paddingTop: 0,
            paddingBottom: 0,
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);
export const Spinner: React.FC = function Spinner() {
    const classes = useStyles();
    //@typescript-eslint/no-unused-vars
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        //setOpen3(false);
    };
    return (
        <Typography variant="body1" className={classes.spinner}>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Typography>
    )

}