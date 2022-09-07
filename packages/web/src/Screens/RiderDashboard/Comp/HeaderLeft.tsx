import { makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme, FormGroup, Switch, FormControlLabel, Grid, IconButton } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PlayArrowRounded } from "@material-ui/icons/";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { HistoryRounded } from "@material-ui/icons/";
import {CloseRounded} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useAppData } from '../../../Context/AppDataContext';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted"
            },
            "& .MuiSelect-select:$focus": {
                backgroundColor: "inherit",
                color: "#9B9B9B"
            },
            "& .MuiFormLabel-root": {
                fontWeight: 700,
                fontSize: "1.2rem"
            },
            "& .MuiInputLabel-root.Mui-focused":{
                color: "#9B9B9B"
            },
            "& .MuiSwitch-colorSecondary.Mui-checked":{
                color: "#FFF"
            },
            "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#76ff03"
            },
            "& .MuiSwitch-colorSecondary + .MuiSwitch-track": {
                backgroundColor: "#b2102f"
            }
        },
        links: {
            textDecoration: "none",
            color: "inherit"
        },list: {
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
        },closeIcon: {
            fontWeight: "bolder",
            color: theme.palette.primary.light,
            fontSize: "30px",
            zIndex: 700
        },
        closeBtn: {
            position: "absolute",
            right: 5
        },
        loginIconStyle: {
            transform: "rotate(180deg)",
        },
        expandIconStyle: {
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
            bottom: "-102%",
        },
        hide: {
            display: 'none',
        },
        callapsibleIconStyle: {
            right: 0,
            position: "absolute",
            transform: "rotate(180deg)",
            bottom: "-102%",
        },
    }),
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const HeaderLeft: React.FC = function HeaderLeft() {
    const classes = useStyles();
    const theme = useTheme();
    var { value }  = useAppData();
    var { userInfo, rider, logout, fetchRiderInfo, udateRiderStatusInfo } = value;
    //console.log(userInfo)
    const [open1, setOpen1] = React.useState(false);
    const [availability, setAvailability] = React.useState(rider !== undefined ? rider.isAvailable : false);

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setAvailability(event.target.checked);
        udateRiderStatusInfo(value, userInfo._id, event.target.checked, rider.disabled );
    }

    useEffect(() => {
        if(rider === undefined && userInfo._id !== ""){
            //console.log(userInfo._id)
            fetchRiderInfo(value,userInfo._id);
        }else if(rider !== undefined){
            if(rider.isAvailable !== availability){
                setAvailability(rider.isAvailable)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rider, userInfo._id])
    

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleDrawerOpen1 = () => {
        setOpen1(true);
    };
    
    const handleDrawerClose1 = () => {
        setOpen1(false);
    };

    const handleLogout = async (event) => {
        try{
          event.preventDefault();
          logout(value);
          setTimeout(() => {
            history.push('/Login');
          }, 3000);
        }catch{
          ////////console.log('Failed to logout.');
        }
    }

    const handleLogin = (event) => {
        try{
          event.preventDefault();
          history.push('/Login', { from: history.location.pathname});
        }catch{
          ////////console.log('Failed to logout.');
        }
    }

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
            <List>
                    {['Overview', 'Delivery Orders'].map((text, index) => (
                        referralPath === "/AdminDashboard" && text === "Overview" ?
                          <ListItem button key={8} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        //eslint-disable-next-line no-mixed-operators
                        referralPath === "/DeliveryOrdersDetails" || referralPath === "/DeliveryOrders" && text === "Delivery Orders" ?
                          <ListItem button key={9} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        text === "Overview" ?
                          // <Link to="/AdminDashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={10}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          // </Link>
                        :
                        text !== "Overview"?
                          <ListItem button key={11} style={{marginTop: "5%"}}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                  index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                          </ListItem>
                      :
                        <ListItem button key={12}>
                          <ListItemIcon>
                            {
                              index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                              index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                              index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
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
                    <a href="/" key={13} onClick={handleLogout} className={classes.inactiveItemLink}>
                      <ListItem button >
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
                    <ListItem button key={14}>
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
                  <a href="/Login" key={15} onClick={handleLogin} className={classes.inactiveItemLink}>
                    <ListItem button>
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
                  <ListItem button key={16}>
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
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen1}
                    edge="start"
                    className={clsx(classes.expandIconStyle,{
                    [classes.hide]: open1,
                    })}
                    key={17}
                >
                    <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerClose1}
                    edge="start"
                    className={clsx( classes.callapsibleIconStyle, {
                    [classes.hide]: !open1,
                    })}
                    key={18}
                >
                    <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                </IconButton>
            </List>
        </div>
    );
      
    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    <form>
                        <FormGroup row className={classes.root}>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={availability}
                                    onChange={handleChange}
                                    name="availability"
                                />
                                }
                                label={availability? "I'm Available" : "Not Available"}
                            />
                        </FormGroup>
                    </form>
                    {referralPath === "/adminordersdetails" || referralPath === "/AdminOrderSDetails" ?
                    <span><PlayArrowRounded /> <Link to="/AdminOrders" className={classes.links}>Orders</Link> <PlayArrowRounded /> Order Details</span> :
                    referralPath === "/Restaurants" || referralPath === "/restaurants" ?
                    <span><PlayArrowRounded /> FOOD DELIVERY <PlayArrowRounded /> RESTAURANTS</span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={3}>
                        <div style={{marginTop: "1%", marginBottom: "1%"}}>
                            {(['left'] as Anchor[]).map((anchor) => (
                                <React.Fragment key={anchor}>
                                <div style={{display: "flex"}}>
                                    <Button style={{zIndex: 2, position: 'fixed'}} onClick={toggleDrawer(anchor, true)} className="mobileMenuToggle">
                                        <img 
                                            src="Images/MobileMenuIcon.png"
                                            style={{marginTop: "10px"}}
                                            alt={"Menu Icon"}
                                        >
                                        </img>
                                        </Button>
                                </div>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                                </React.Fragment>
                            ))}
                        </div>    
                        </Grid>
                    </Grid>
                </>
            ):<></>}
        </>
    )
}

export default HeaderLeft;