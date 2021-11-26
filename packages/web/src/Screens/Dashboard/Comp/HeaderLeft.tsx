import { useAppData } from '../../../Context/AppDataContext';
import { IconButton, makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { HistoryRounded, PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {CloseRounded} from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        link: {
            textDecoration: "none",
            color: "inherit"
        },
        list: {
            width: 250,
        },
        fullList: {
          width: 'auto',
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
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
        loginIconStyle: {
            transform: "rotate(180deg)",
        },
        closeIcon: {
            fontWeight: "bolder",
            color: theme.palette.primary.light,
            fontSize: "30px",
            zIndex: 700
        },
        closeBtn: {
            position: "absolute",
            right: 5
        }
    }),
);
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const HeaderLeft: React.FC = function HeaderLeft() {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var { value }  = useAppData();
    var { logout, userInfo } = value;

    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(anchor, true)}
                edge="start"
                className={classes.closeBtn}
            >
                <CloseRounded className={classes.closeIcon}/>
            </IconButton>
          <List style={{marginTop: "15%"}}>
          {['Overview', 'Food Delivery', 'Package Delivery', 'Market Place', 'Orders'].map((text, index) => (
                        referralPath === "/Dashboard" && text === "Overview" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        (referralPath === "/FoodDelivery" || referralPath === "/Restaurants" || referralPath === "/Menu") && text === "Food Delivery" ?
                          <ListItem button key={text} className={classes.activeItem2}>
                            <ListItemIcon className={classes.activeIcon2}>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/WhiteFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/PackageDelivery" && text === "Package Delivery" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/MarketPlace" && text === "Market Place" ?
                          <ListItem button key={text} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/Orders" && text === "Orders" ?
                          <Link to="/OrdersHistory" className={classes.activeItem}>
                            <ListItem button key={text}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  />: <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Overview" ?
                          <Link to="/Dashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
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
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Orders" ?
                          <Link to="/OrderHistory" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        <ListItem button key={text} style={{paddingLeft: "12px"}}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                index === 2 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 3 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                index === 4 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
          </List>
          <Divider />
                    <List>
                        {userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined?
                        ['Settings', 'Logout'].map((text, index) => (
                            text === 'Logout'?
                            <a href="/" onClick={handleLogout} className={classes.inactiveItemLink}>
                              <ListItem button key={text} >
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </a>
                            :
                            <ListItem button key={text}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        )) :
                        ['Settings', 'Login'].map((text, index) => (
                          text === 'Login'?
                          <a href="/Login" onClick={handleLogin} className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/Logout.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                              </ListItem>
                          </a>
                          :
                          <ListItem button key={text}>
                          <ListItemIcon>
                            {
                              index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                              index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                            }
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          </ListItem>
                      ))
                      }
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.expandIconStyle,{
                            [classes.hide]: open,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerClose}
                            edge="start"
                            className={clsx( classes.callapsibleIconStyle, {
                            [classes.hide]: !open,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton> */}
                    </List>
        </div>
    );
    
    const handleLogout = (event) => {
      try{
        event.preventDefault();
        logout(value);
      }catch{
        //////console.log('Failed to logout.');
      }
    }
  
    const handleLogin = (event) => {
      try{
        event.preventDefault();
        history.push('/Login', { from: history.location.pathname});
      }catch{
        //////console.log('Failed to logout.');
      }
    }

    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    <Link to="/Dashboard" className={classes.link}>
                        PORTAL
                    </Link>
                    {referralPath === "/fooddelivery" || referralPath === "/FoodDelivery" ?
                    <span><PlayArrowRounded /> FOOD DELIVERY</span> :
                    referralPath === "/orderhistory" || referralPath === "/OrderHistory" ?
                    <span><PlayArrowRounded /> Order History</span> :
                    referralPath === "/Restaurants" || referralPath === "/restaurants" ?
                    <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> RESTAURANTS</span> :
                    referralPath === "/Menu" || referralPath === "/menu" ?
                    <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> <Link to="/Restaurants" className={classes.link}>RESTAURANTS</Link> <PlayArrowRounded /> MENU</span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <>
                    
                    <div style={{marginTop: "5%"}}>
                        {(['left'] as Anchor[]).map((anchor) => (
                            <React.Fragment key={anchor}>
                            <Button style={{zIndex: 1000}} onClick={toggleDrawer(anchor, true)} className="mobileMenuToggle">
                                <img src="Images/MobileMenuIcon.png" alt="MobileMenuIcon"></img>
                            </Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                    <style>
                      {
                        `
                          @media only screen and (min-width: 769px){
                            .mobileMenuToggle{
                              display: none;
                            }
                          }
                        `
                      }
                    </style>
                </>
            ):<></>}
        </>
    )
}