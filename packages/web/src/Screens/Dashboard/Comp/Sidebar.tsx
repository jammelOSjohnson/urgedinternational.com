import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, useTheme, CssBaseline, AppBar, Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const drawerWidth = "16.5%";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logo: {
            height: "37px",
            width: "107.72px",
            marginLeft: "auto",
            marginRight: "auto" ,
            marginTop: "10%"       
        },
        root: {
            display: 'flex',
          },
          appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          menuButton: {
            marginRight: 36,
          },
          hide: {
            display: 'none',
          },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
          },
          drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          drawerClose: {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9) + 1,
            },
          },
          toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          activeItem: {
            backgroundColor: "#FEC109",
            color: "#FFFFFF",
            borderRadius: "50px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
          },
          activeItem2: {
            backgroundColor: "#FF5E14",
            color: "#FFFFFF",
            borderRadius: "50px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
          },
          activeIcon2: {
            color: "#FFFFFF"
          },
          inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
          }
    }),
);


export const Sidebar: React.FC = function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
      
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}
                >
                    {/* <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> */}
                    <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    <List>
                    {['Overview', 'Food Delivery', 'Package Delivery', 'Market Place', 'Orders'].map((text, index) => (
                        referralPath === "/Dashboard" && text === "Overview" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/FoodDelivery" && text === "Food Delivery" ?
                          <ListItem button key={text} className={classes.activeItem2}>
                            <ListItemIcon className={classes.activeIcon2}>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/WhiteFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/PackageDelivery" && text === "Package Delivery" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/MarketPlace" && text === "Market Place" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/Orders" && text === "Orders" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        text === "Overview" ?
                          <Link to="/Dashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Food Delivery" ?
                          <Link to="/FoodDelivery" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        <ListItem button key={text}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                        {['Settings', 'Logout'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </List>
                </Drawer>
            </div>
        </>
    )
}
