import React from 'react'
import { Typography, AppBar, Button, Toolbar, makeStyles, Theme, createStyles, IconButton, Tabs, Tab } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        fontFamily: "PT Sans",
        flexGrow: 1,
    },
    appbar: {
        height: 125,
        backgroundColor: "#FFFFFF",
    },
    iconButton: {
    },
    logo: {
        height: 50.49015808105469,
        width: 147,        
        borderRadius: 0,
    },
    tabs: {
    },
    button: {
        backgroundColor: "#F7B614",
        height: 41,
        width: 130,
        borderRadius: 36,
    },
  }),
);

export const Header: React.FC = function Header() {
    const classes = useStyles();
    return (
       <>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <IconButton className={classes.iconButton}>
                        <img className={classes.logo} src="Images/logo.svg" alt="Urged Logo"></img>
                    </IconButton>
                    <Tabs textColor='secondary'>
                        <Tab label='Services'/>
                        <Tab label='Industries'/>
                        <Tab label='How it works'/>
                        <Tab label='Why'/>
                    </Tabs>
                    <Button className={classes.button}>Place Order</Button>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

 