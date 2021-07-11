import React from 'react'
import { Typography, AppBar, Button, Toolbar, makeStyles, Theme, createStyles, IconButton, Tabs, Tab } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { CallMissedSharp } from '@material-ui/icons';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        fontFamily: "Open Sans",
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#FFFFFF",
        elevation: 0,
    },
    iconButton: {
    },
    logo: {
        height: 50.49015808105469,
        width: 147,        
    },
    Typo1: {
        fontWeight: 600,
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: "132.69%",
        color: "#000000",
        marginRight: theme.spacing(2),
    },
    // tabs: {
    //     fontStyle: "normal",
    //     fontWeight: "bold",
    //     fontSize: 16,
    //     lineHeight: 21,
    //     color: "#444444",

    // },
    // button: {
    //     backgroundColor: "#F7B614",
    //     marginRight:theme.spacing(2),
    //     height: 41,
    //     width: 130,
    //     borderRadius: 36,
    //     color: "#FFFFFF",
    // },
    toolbar: theme.mixins.toolbar
  }),
);

export const Header: React.FC = function Header() {
    const classes = useStyles();
    return (
       <>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <IconButton className={classes.iconButton}>
                        <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    </IconButton>
                    <Typography className={classes.Typo1}>
                        876-773-5015 
                    </Typography>
                    <Typography className={classes.Typo1}>
                        Monday - Saturday 9:00 am - 6:00pm
                    </Typography>
                    {/* <Tabs className={classes.tabs}>
                        <Tab label='Services'/>
                        <Tab label='Industries'/>
                        <Tab label='How it works'/>
                        <Tab label='Why'/>
                    </Tabs> */}
                    {/* <Button className={classes.button}>Place Order</Button>
                    <Button className={classes.button}>Login</Button> */}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
        </>
    )
}

 